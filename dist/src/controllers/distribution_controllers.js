"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalDistributions = exports.getRecentDistributions = exports.deleteDistribution = exports.updateDistribution = exports.createDistribution = exports.getDistributionById = exports.getDistributions = exports.getDistributionsByAidType = exports.getDistributionSummaryByTownship = void 0;
const client_1 = require("../../generated/prisma/client");
const date_fns_1 = require("date-fns");
const prisma = new client_1.PrismaClient();
const getDistributionSummaryByTownship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all aid types to dynamically include them in the summary
        const aidTypes = yield prisma.aidType.findMany();
        const aidTypeNames = aidTypes.map((aidType) => aidType.name
            .replace(/\s+/g, (match, offset) => offset === 0 ? match.toLowerCase() : match[0].toUpperCase())
            .replace(/\s+/g, '')
            .replace(/^./, (firstChar) => firstChar.toLowerCase()));
        const distributions = yield prisma.distribution.findMany({
            include: {
                township: true,
                aidType: true,
            },
        });
        const summary = distributions.reduce((acc, distribution) => {
            const townshipName = distribution.township.name;
            const aidTypeName = distribution.aidType.name
                .replace(/\s+/g, (match, offset) => offset === 0 ? match.toLowerCase() : match[0].toUpperCase())
                .replace(/\s+/g, '')
                .replace(/^./, (firstChar) => firstChar.toLowerCase());
            const quantity = distribution.quantity;
            if (!acc[townshipName]) {
                // Initialize the summary object with all aid types
                acc[townshipName] = aidTypeNames.reduce((obj, name) => {
                    obj[name] = 0;
                    return obj;
                }, {});
                acc[townshipName].total = 0;
            }
            acc[townshipName][aidTypeName] += quantity;
            acc[townshipName].total += quantity;
            return acc;
        }, {});
        const formattedSummary = Object.entries(summary).map(([township, data]) => (Object.assign({ township }, data)));
        res.json(formattedSummary);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving distribution summary' });
    }
});
exports.getDistributionSummaryByTownship = getDistributionSummaryByTownship;
const getDistributionsByAidType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all distributions with aidType and quantity
        const distributions = yield prisma.distribution.findMany({
            include: {
                aidType: true,
            },
        });
        // Aggregate quantities by aidType.name in camelCase
        const summary = distributions.reduce((acc, distribution) => {
            const aidTypeName = distribution.aidType.name
                .replace(/\s+/g, (match, offset) => offset === 0 ? match.toLowerCase() : match[0].toUpperCase())
                .replace(/\s+/g, '')
                .replace(/^./, (firstChar) => firstChar.toLowerCase());
            const quantity = distribution.quantity;
            if (!acc[aidTypeName]) {
                acc[aidTypeName] = 0;
            }
            acc[aidTypeName] += quantity;
            return acc;
        }, {});
        // Format the response
        const formattedSummary = Object.entries(summary).map(([aidType, totalQuantity]) => ({
            aidType,
            totalQuantity,
        }));
        res.json(formattedSummary);
    }
    catch (error) {
        console.error('Error fetching distributions by aid type:', error);
        res
            .status(500)
            .json({ error: 'Failed to fetch distributions by aid type' });
    }
});
exports.getDistributionsByAidType = getDistributionsByAidType;
const getDistributions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 10, township, aidType, startDate, endDate, } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        // Build filter conditions
        const where = {};
        if (township) {
            where.township = {
                name: {
                    contains: township,
                    mode: 'insensitive',
                },
            };
        }
        if (aidType) {
            where.aidType = {
                name: {
                    contains: aidType,
                    mode: 'insensitive',
                },
            };
        }
        if (startDate || endDate) {
            where.date = {};
            if (startDate) {
                where.date.gte = new Date(startDate);
            }
            if (endDate) {
                where.date.lte = new Date(endDate);
            }
        }
        // Get total count for pagination
        const total = yield prisma.distribution.count({ where });
        // Get distributions
        const distributions = yield prisma.distribution.findMany({
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
    }
    catch (error) {
        console.error('Error fetching distributions:', error);
        res.status(500).json({ error: 'Failed to fetch distributions' });
    }
});
exports.getDistributions = getDistributions;
const getDistributionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const distribution = yield prisma.distribution.findUnique({
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
    }
    catch (error) {
        console.error('Error fetching distribution:', error);
        res.status(500).json({ error: 'Failed to fetch distribution' });
    }
});
exports.getDistributionById = getDistributionById;
const createDistribution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, townshipId, aidTypeId, fieldWorkerId, quantity, notes } = req.body;
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
        const township = yield prisma.township.findUnique({
            where: { id: Number(townshipId) },
        });
        if (!township) {
            res.status(404).json({ error: 'Township not found' });
            return;
        }
        // Check if aid type exists
        const aidType = yield prisma.aidType.findUnique({
            where: { id: Number(aidTypeId) },
        });
        if (!aidType) {
            res.status(404).json({ error: 'Aid type not found' });
            return;
        }
        // Check if field worker exists
        const fieldWorker = yield prisma.fieldWorker.findUnique({
            where: { id: Number(fieldWorkerId) },
        });
        if (!fieldWorker) {
            res.status(404).json({ error: 'Field worker not found' });
            return;
        }
        // Create distribution
        const distribution = yield prisma.distribution.create({
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
    }
    catch (error) {
        console.error('Error creating distribution:', error);
        res.status(500).json({ error: 'Failed to create distribution' });
    }
});
exports.createDistribution = createDistribution;
const updateDistribution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { date, townshipId, aidTypeId, fieldWorkerId, quantity, notes } = req.body;
        // Check if distribution exists
        const existingDistribution = yield prisma.distribution.findUnique({
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
            const township = yield prisma.township.findUnique({
                where: { id: Number(townshipId) },
            });
            if (!township) {
                res.status(404).json({ error: 'Township not found' });
                return;
            }
        }
        // Check if aid type exists if provided
        if (aidTypeId) {
            const aidType = yield prisma.aidType.findUnique({
                where: { id: Number(aidTypeId) },
            });
            if (!aidType) {
                res.status(404).json({ error: 'Aid type not found' });
                return;
            }
        }
        // Check if field worker exists if provided
        if (fieldWorkerId) {
            const fieldWorker = yield prisma.fieldWorker.findUnique({
                where: { id: Number(fieldWorkerId) },
            });
            if (!fieldWorker) {
                res.status(404).json({ error: 'Field worker not found' });
                return;
            }
        }
        // Update distribution
        const distribution = yield prisma.distribution.update({
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
    }
    catch (error) {
        console.error('Error updating distribution:', error);
        res.status(500).json({ error: 'Failed to update distribution' });
    }
});
exports.updateDistribution = updateDistribution;
const deleteDistribution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Check if distribution exists
        const existingDistribution = yield prisma.distribution.findUnique({
            where: { id: Number(id) },
        });
        if (!existingDistribution) {
            res.status(404).json({ error: 'Distribution not found' });
            return;
        }
        yield prisma.distribution.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error('Error deleting distribution:', error);
        res.status(500).json({ error: 'Failed to delete distribution' });
    }
});
exports.deleteDistribution = deleteDistribution;
const getRecentDistributions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDistributions = yield prisma.distribution.findMany({
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
    }
    catch (error) {
        console.error('Error fetching recent distributions:', error);
        res.status(500).json({ error: 'Failed to fetch recent distributions' });
    }
});
exports.getRecentDistributions = getRecentDistributions;
const getTotalDistributions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentMonthStart = (0, date_fns_1.startOfMonth)(new Date());
        const currentMonthEnd = (0, date_fns_1.endOfMonth)(new Date());
        const lastMonthStart = (0, date_fns_1.startOfMonth)((0, date_fns_1.subMonths)(new Date(), 1));
        const lastMonthEnd = (0, date_fns_1.endOfMonth)((0, date_fns_1.subMonths)(new Date(), 1));
        // Fetch current month distributions with aidType included
        const currentMonthDistributions = yield prisma.distribution.findMany({
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
        const totalTownshipsReached = new Set(currentMonthDistributions.map((d) => d.townshipId)).size;
        // Fetch last month distributions with aidType included
        const lastMonthDistributions = yield prisma.distribution.findMany({
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
        const percentageComparedToLastMonth = lastMonthTotal > 0
            ? ((totalDistributions - lastMonthTotal) / lastMonthTotal) * 100
            : 100; // If last month had no distributions, consider it a 100% increase
        // Count food kits and education materials
        const foodKitsCount = currentMonthDistributions.filter((d) => d.aidType.name === 'Food Kits').length;
        const educationMaterialsCount = currentMonthDistributions.filter((d) => d.aidType.name === 'Education Materials').length;
        const lastMonthFoodKitsCount = lastMonthDistributions.filter((d) => d.aidType.name === 'Food Kits').length;
        const lastMonthEducationMaterialsCount = lastMonthDistributions.filter((d) => d.aidType.name === 'Education Materials').length;
        const foodKitsPercentage = lastMonthFoodKitsCount > 0
            ? ((foodKitsCount - lastMonthFoodKitsCount) / lastMonthFoodKitsCount) *
                100
            : 100;
        const educationMaterialsPercentage = lastMonthEducationMaterialsCount > 0
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
    }
    catch (error) {
        console.error('Error fetching total distributions:', error);
        res.status(500).json({ error: 'Failed to fetch total distributions' });
    }
});
exports.getTotalDistributions = getTotalDistributions;
