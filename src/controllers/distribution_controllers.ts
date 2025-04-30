import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client';
import { startOfMonth, endOfMonth, subMonths } from 'date-fns';

const prisma = new PrismaClient();

export const getDistributionSummaryByTownship = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch all aid types to dynamically include them in the summary
    const aidTypes = await prisma.aidType.findMany();
    const aidTypeNames = aidTypes.map((aidType) =>
      aidType.name
        .replace(/\s+/g, (match, offset) =>
          offset === 0 ? match.toLowerCase() : match[0].toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/^./, (firstChar) => firstChar.toLowerCase())
    );

    const distributions = await prisma.distribution.findMany({
      include: {
        township: true,
        aidType: true,
      },
    });

    const summary = distributions.reduce((acc, distribution) => {
      const townshipName = distribution.township.name;
      const aidTypeName = distribution.aidType.name
        .replace(/\s+/g, (match, offset) =>
          offset === 0 ? match.toLowerCase() : match[0].toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/^./, (firstChar) => firstChar.toLowerCase());
      const quantity = distribution.quantity;

      if (!acc[townshipName]) {
        // Initialize the summary object with all aid types
        acc[townshipName] = aidTypeNames.reduce((obj, name) => {
          obj[name] = 0;
          return obj;
        }, {} as Record<string, number>);
        acc[townshipName].total = 0;
      }

      acc[townshipName][aidTypeName] += quantity;
      acc[townshipName].total += quantity;

      return acc;
    }, {} as Record<string, Record<string, number>>);

    const formattedSummary = Object.entries(summary).map(
      ([township, data]) => ({
        township,
        ...data,
      })
    );

    res.json(formattedSummary);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving distribution summary' });
  }
};

export const getDistributionsByAidType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch all distributions with aidType and quantity
    const distributions = await prisma.distribution.findMany({
      include: {
        aidType: true,
      },
    });

    // Aggregate quantities by aidType.name in camelCase
    const summary = distributions.reduce((acc, distribution) => {
      const aidTypeName = distribution.aidType.name
        .replace(/\s+/g, (match, offset) =>
          offset === 0 ? match.toLowerCase() : match[0].toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/^./, (firstChar) => firstChar.toLowerCase());
      const quantity = distribution.quantity;

      if (!acc[aidTypeName]) {
        acc[aidTypeName] = 0;
      }

      acc[aidTypeName] += quantity;

      return acc;
    }, {} as Record<string, number>);

    // Format the response
    const formattedSummary = Object.entries(summary).map(
      ([aidType, totalQuantity]) => ({
        aidType,
        totalQuantity,
      })
    );

    res.json(formattedSummary);
  } catch (error) {
    console.error('Error fetching distributions by aid type:', error);
    res
      .status(500)
      .json({ error: 'Failed to fetch distributions by aid type' });
  }
};

// Define the type for the where clause
interface WhereClause {
  township?: {
    name: {
      contains: string;
      mode: 'insensitive';
    };
  };
  aidType?: {
    name: {
      contains: string;
      mode: 'insensitive';
    };
  };
  date?: {
    gte?: Date;
    lte?: Date;
  };
}

export const getDistributions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = 1,
      limit = 10,
      township,
      aidType,
      startDate,
      endDate,
    } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build filter conditions
    const where: WhereClause = {};

    if (township) {
      where.township = {
        name: {
          contains: township as string,
          mode: 'insensitive',
        },
      };
    }

    if (aidType) {
      where.aidType = {
        name: {
          contains: aidType as string,
          mode: 'insensitive',
        },
      };
    }

    if (startDate || endDate) {
      where.date = {};

      if (startDate) {
        where.date.gte = new Date(startDate as string);
      }

      if (endDate) {
        where.date.lte = new Date(endDate as string);
      }
    }

    // Get total count for pagination
    const total = await prisma.distribution.count({ where });

    // Get distributions
    const distributions = await prisma.distribution.findMany({
      where,
      include: {
        township: true,
        aidType: true,
        fieldWorker: true,
      },
      orderBy: {
        date: 'desc',
      },
      skip,
      take: Number(limit),
    });

    res.json({
      data: distributions,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Error fetching distributions:', error);
    res.status(500).json({ error: 'Failed to fetch distributions' });
  }
};

export const getDistributionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const distribution = await prisma.distribution.findUnique({
      where: { id: Number(id) },
      include: {
        township: true,
        aidType: true,
        fieldWorker: true,
      },
    });

    if (!distribution) {
      res.status(404).json({ error: 'Distribution not found' });
      return;
    }

    res.json(distribution);
  } catch (error) {
    console.error('Error fetching distribution:', error);
    res.status(500).json({ error: 'Failed to fetch distribution' });
  }
};

export const createDistribution = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, townshipId, aidTypeId, fieldWorkerId, quantity, notes } =
      req.body;

    // Validate required fields
    if (!date || !townshipId || !aidTypeId || !fieldWorkerId || !quantity) {
      res.status(400).json({
        error: 'Missing required fields',
        required: [
          'date',
          'townshipId',
          'aidTypeId',
          'fieldWorkerId',
          'quantity',
        ],
      });
      return;
    }

    // Validate quantity
    if (quantity <= 0) {
      res.status(400).json({ error: 'Quantity must be greater than 0' });
      return;
    }

    // Check if township exists
    const township = await prisma.township.findUnique({
      where: { id: Number(townshipId) },
    });

    if (!township) {
      res.status(404).json({ error: 'Township not found' });
      return;
    }

    // Check if aid type exists
    const aidType = await prisma.aidType.findUnique({
      where: { id: Number(aidTypeId) },
    });

    if (!aidType) {
      res.status(404).json({ error: 'Aid type not found' });
      return;
    }

    // Check if field worker exists
    const fieldWorker = await prisma.fieldWorker.findUnique({
      where: { id: Number(fieldWorkerId) },
    });

    if (!fieldWorker) {
      res.status(404).json({ error: 'Field worker not found' });
      return;
    }

    // Create distribution
    const distribution = await prisma.distribution.create({
      data: {
        date: new Date(date),
        quantity: Number(quantity),
        notes,
        township: { connect: { id: Number(townshipId) } },
        aidType: { connect: { id: Number(aidTypeId) } },
        fieldWorker: { connect: { id: Number(fieldWorkerId) } },
      },
    });

    res.json(distribution);
  } catch (error) {
    console.error('Error creating distribution:', error);
    res.status(500).json({ error: 'Failed to create distribution' });
  }
};

export const updateDistribution = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { date, townshipId, aidTypeId, fieldWorkerId, quantity, notes } =
      req.body;

    // Check if distribution exists
    const existingDistribution = await prisma.distribution.findUnique({
      where: { id: Number(id) },
    });

    if (!existingDistribution) {
      res.status(404).json({ error: 'Distribution not found' });
      return;
    }

    // Validate quantity if provided
    if (quantity !== undefined && quantity <= 0) {
      res.status(400).json({ error: 'Quantity must be greater than 0' });
      return;
    }

    // Check if township exists if provided
    if (townshipId) {
      const township = await prisma.township.findUnique({
        where: { id: Number(townshipId) },
      });

      if (!township) {
        res.status(404).json({ error: 'Township not found' });
        return;
      }
    }

    // Check if aid type exists if provided
    if (aidTypeId) {
      const aidType = await prisma.aidType.findUnique({
        where: { id: Number(aidTypeId) },
      });

      if (!aidType) {
        res.status(404).json({ error: 'Aid type not found' });
        return;
      }
    }

    // Check if field worker exists if provided
    if (fieldWorkerId) {
      const fieldWorker = await prisma.fieldWorker.findUnique({
        where: { id: Number(fieldWorkerId) },
      });

      if (!fieldWorker) {
        res.status(404).json({ error: 'Field worker not found' });
        return;
      }
    }

    // Update distribution
    const distribution = await prisma.distribution.update({
      where: { id: Number(id) },
      data: {
        date: date ? new Date(date) : undefined,
        quantity: quantity ? Number(quantity) : undefined,
        notes,
        townshipId: townshipId ? Number(townshipId) : undefined,
        aidTypeId: aidTypeId ? Number(aidTypeId) : undefined,
        fieldWorkerId: fieldWorkerId ? Number(fieldWorkerId) : undefined,
      },
      include: {
        township: true,
        aidType: true,
        fieldWorker: true,
      },
    });

    res.json(distribution);
  } catch (error) {
    console.error('Error updating distribution:', error);
    res.status(500).json({ error: 'Failed to update distribution' });
  }
};

export const deleteDistribution = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Check if distribution exists
    const existingDistribution = await prisma.distribution.findUnique({
      where: { id: Number(id) },
    });

    if (!existingDistribution) {
      res.status(404).json({ error: 'Distribution not found' });
      return;
    }

    await prisma.distribution.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting distribution:', error);
    res.status(500).json({ error: 'Failed to delete distribution' });
  }
};

export const getRecentDistributions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recentDistributions = await prisma.distribution.findMany({
      take: 5, // Fetch the last 5 distributions
      orderBy: {
        date: 'desc', // Order by date in descending order
      },
      include: {
        township: true,
        aidType: true,
        fieldWorker: true,
      },
    });

    const formattedDistributions = recentDistributions.map((distribution) => ({
      date: distribution.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      township: distribution.township.name,
      aidType: distribution.aidType.name,
      quantity: distribution.quantity,
      fieldWorker: distribution.fieldWorker.name,
    }));

    res.json(formattedDistributions);
  } catch (error) {
    console.error('Error fetching recent distributions:', error);
    res.status(500).json({ error: 'Failed to fetch recent distributions' });
  }
};

export const getTotalDistributions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const currentMonthStart = startOfMonth(new Date());
    const currentMonthEnd = endOfMonth(new Date());
    const lastMonthStart = startOfMonth(subMonths(new Date(), 1));
    const lastMonthEnd = endOfMonth(subMonths(new Date(), 1));

    // Fetch current month distributions with aidType included
    const currentMonthDistributions = await prisma.distribution.findMany({
      where: {
        date: {
          gte: currentMonthStart,
          lte: currentMonthEnd,
        },
      },
      include: {
        aidType: true, // Include aidType relation
      },
    });

    const totalDistributions = currentMonthDistributions.length;
    const totalTownshipsReached = new Set(
      currentMonthDistributions.map((d) => d.townshipId)
    ).size;

    // Fetch last month distributions with aidType included
    const lastMonthDistributions = await prisma.distribution.findMany({
      where: {
        date: {
          gte: lastMonthStart,
          lte: lastMonthEnd,
        },
      },
      include: {
        aidType: true, // Include aidType relation
      },
    });

    const lastMonthTotal = lastMonthDistributions.length;

    // Calculate percentages
    const percentageComparedToLastMonth =
      lastMonthTotal > 0
        ? ((totalDistributions - lastMonthTotal) / lastMonthTotal) * 100
        : 100; // If last month had no distributions, consider it a 100% increase

    // Count food kits and education materials
    const foodKitsCount = currentMonthDistributions.filter(
      (d) => d.aidType.name === 'Food Kits'
    ).length;
    const educationMaterialsCount = currentMonthDistributions.filter(
      (d) => d.aidType.name === 'Educational Materials'
    ).length;

    const lastMonthFoodKitsCount = lastMonthDistributions.filter(
      (d) => d.aidType.name === 'Food Kits'
    ).length;
    const lastMonthEducationMaterialsCount = lastMonthDistributions.filter(
      (d) => d.aidType.name === 'Educational Materials'
    ).length;

    const foodKitsPercentage =
      lastMonthFoodKitsCount > 0
        ? ((foodKitsCount - lastMonthFoodKitsCount) / lastMonthFoodKitsCount) *
          100
        : 100;

    const educationMaterialsPercentage =
      lastMonthEducationMaterialsCount > 0
        ? ((educationMaterialsCount - lastMonthEducationMaterialsCount) /
            lastMonthEducationMaterialsCount) *
          100
        : 100;

    // Format the response
    const response = {
      totalDistributions,
      percentageComparedToLastMonth,
      totalTownshipsReached,
      numberOfTownshipsThisMonth: totalTownshipsReached,
      totalFoodKits: foodKitsCount,
      foodKitsPercentage,
      totalEducationMaterials: educationMaterialsCount,
      educationMaterialsPercentage,
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching total distributions:', error);
    res.status(500).json({ error: 'Failed to fetch total distributions' });
  }
};
