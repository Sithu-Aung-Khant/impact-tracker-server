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
exports.getTownshipSupportStats = exports.getTownships = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const getTownships = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const townships = yield prisma.township.findMany();
        res.json(townships);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving townships' });
    }
});
exports.getTownships = getTownships;
const getTownshipSupportStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the current date and the start of the current and previous months
        const currentDate = new Date();
        const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const previousMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        // Get total distributions per township
        const townshipsWithDistributions = yield prisma.distribution.groupBy({
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
        const leastSupportedTownship = townshipsWithDistributions[townshipsWithDistributions.length - 1];
        // Calculate the average distributions per township
        const totalDistributions = townshipsWithDistributions.reduce((acc, curr) => acc + (curr._sum.quantity || 0), 0);
        const averagePerTownship = totalDistributions / townshipsWithDistributions.length;
        // Get distributions for the current and previous months
        const currentMonthDistributions = yield prisma.distribution.aggregate({
            _sum: {
                quantity: true,
            },
            where: {
                date: {
                    gte: currentMonthStart,
                },
            },
        });
        const previousMonthDistributions = yield prisma.distribution.aggregate({
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
        const growthPercentage = previousMonthTotal === 0
            ? 0
            : ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100;
        // Get township names
        const mostSupportedTownshipName = yield prisma.township.findUnique({
            where: {
                id: mostSupportedTownship.townshipId,
            },
            select: {
                name: true,
            },
        });
        const leastSupportedTownshipName = yield prisma.township.findUnique({
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
                name: (mostSupportedTownshipName === null || mostSupportedTownshipName === void 0 ? void 0 : mostSupportedTownshipName.name) || 'Unknown',
                totalDistributions: mostSupportedTownship._sum.quantity || 0,
            },
            leastSupportedTownship: {
                name: (leastSupportedTownshipName === null || leastSupportedTownshipName === void 0 ? void 0 : leastSupportedTownshipName.name) || 'Unknown',
                totalDistributions: leastSupportedTownship._sum.quantity || 0,
            },
            averagePerTownship: Math.round(averagePerTownship),
            growthThisMonth: Math.round(growthPercentage),
        };
        res.json(response);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Error retrieving township support statistics' });
    }
});
exports.getTownshipSupportStats = getTownshipSupportStats;
