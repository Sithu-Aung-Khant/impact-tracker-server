import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export const getTownships = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const townships = await prisma.township.findMany();
    res.json(townships);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving townships' });
  }
};

export const getTownshipSupportStats = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Get the current date and the start of the current and previous months
    const currentDate = new Date();
    const currentMonthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const previousMonthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );

    // Get total distributions per township
    const townshipsWithDistributions = await prisma.distribution.groupBy({
      by: ['townshipId'],
      _sum: {
        quantity: true,
      },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
    });

    // Get the most and least supported townships
    const mostSupportedTownship = townshipsWithDistributions[0];
    const leastSupportedTownship =
      townshipsWithDistributions[townshipsWithDistributions.length - 1];

    // Calculate the average distributions per township
    const totalDistributions = townshipsWithDistributions.reduce(
      (acc, curr) => acc + (curr._sum.quantity || 0),
      0
    );
    const averagePerTownship =
      totalDistributions / townshipsWithDistributions.length;

    // Get distributions for the current and previous months
    const currentMonthDistributions = await prisma.distribution.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        date: {
          gte: currentMonthStart,
        },
      },
    });

    const previousMonthDistributions = await prisma.distribution.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        date: {
          gte: previousMonthStart,
          lt: currentMonthStart,
        },
      },
    });

    // Calculate growth percentage
    const currentMonthTotal = currentMonthDistributions._sum.quantity || 0;
    const previousMonthTotal = previousMonthDistributions._sum.quantity || 0;
    const growthPercentage =
      previousMonthTotal === 0
        ? 0
        : ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100;

    // Get township names
    const mostSupportedTownshipName = await prisma.township.findUnique({
      where: {
        id: mostSupportedTownship.townshipId,
      },
      select: {
        name: true,
      },
    });

    const leastSupportedTownshipName = await prisma.township.findUnique({
      where: {
        id: leastSupportedTownship.townshipId,
      },
      select: {
        name: true,
      },
    });

    // Prepare the response
    const response = {
      mostSupportedTownship: {
        name: mostSupportedTownshipName?.name || 'Unknown',
        totalDistributions: mostSupportedTownship._sum.quantity || 0,
      },
      leastSupportedTownship: {
        name: leastSupportedTownshipName?.name || 'Unknown',
        totalDistributions: leastSupportedTownship._sum.quantity || 0,
      },
      averagePerTownship: Math.round(averagePerTownship),
      growthThisMonth: Math.round(growthPercentage),
    };

    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving township support statistics' });
  }
};
