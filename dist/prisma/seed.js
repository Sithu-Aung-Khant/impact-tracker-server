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
// import { PrismaClient } from '@prisma/client';
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        // Create townships
        const townships = [
            {
                name: 'Yangon',
                region: 'Yangon Region',
                latitude: 16.8661,
                longitude: 96.1951,
            },
            {
                name: 'Mandalay',
                region: 'Mandalay Region',
                latitude: 21.9588,
                longitude: 96.0891,
            },
            {
                name: 'Naypyidaw',
                region: 'Naypyidaw Union Territory',
                latitude: 19.7633,
                longitude: 96.0785,
            },
            {
                name: 'Bago',
                region: 'Bago Region',
                latitude: 17.335,
                longitude: 96.4815,
            },
            {
                name: 'Mawlamyine',
                region: 'Mon State',
                latitude: 16.491,
                longitude: 97.626,
            },
            {
                name: 'Taunggyi',
                region: 'Shan State',
                latitude: 20.7895,
                longitude: 97.0376,
            },
            {
                name: 'Pathein',
                region: 'Ayeyarwady Region',
                latitude: 16.7792,
                longitude: 94.7321,
            },
            {
                name: 'Monywa',
                region: 'Sagaing Region',
                latitude: 22.1086,
                longitude: 95.1358,
            },
        ];
        for (const township of townships) {
            yield prisma.township.upsert({
                where: { name: township.name },
                update: {},
                create: township,
            });
        }
        // Create aid types
        const aidTypes = [
            {
                name: 'Food Kits',
                description: 'Basic food supplies including rice, oil, and canned goods',
            },
            {
                name: 'Educational Materials',
                description: 'Books, stationery, and learning resources',
            },
            {
                name: 'Medical Supplies',
                description: 'First aid kits, medicines, and medical equipment',
            },
            {
                name: 'Hygiene Kits',
                description: 'Soap, sanitizer, toothpaste, and other hygiene products',
            },
            {
                name: 'Shelter Materials',
                description: 'Tarpaulins, ropes, and basic construction materials',
            },
        ];
        for (const aidType of aidTypes) {
            yield prisma.aidType.upsert({
                where: { name: aidType.name },
                update: {},
                create: aidType,
            });
        }
        // Create field workers
        const fieldWorkers = [
            { name: 'Aung Min', email: 'aungmin@example.com', phone: '+95912345678' },
            { name: 'Thiri Aung', email: 'thiri@example.com', phone: '+95923456789' },
            { name: 'Kyaw Zaw', email: 'kyawzaw@example.com', phone: '+95934567890' },
            { name: 'Su Su', email: 'susu@example.com', phone: '+95945678901' },
            { name: 'Tun Tun', email: 'tuntun@example.com', phone: '+95956789012' },
        ];
        for (const worker of fieldWorkers) {
            yield prisma.fieldWorker.upsert({
                where: { email: worker.email },
                update: {},
                create: worker,
            });
        }
        // Get created records for reference
        const createdTownships = yield prisma.township.findMany();
        const createdAidTypes = yield prisma.aidType.findMany();
        const createdFieldWorkers = yield prisma.fieldWorker.findMany();
        // Create sample distributions
        const distributions = [
            {
                date: new Date('2023-04-15'),
                townshipId: (_b = (_a = createdTownships.find((t) => t.name === 'Yangon')) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0,
                aidTypeId: (_d = (_c = createdAidTypes.find((a) => a.name === 'Food Kits')) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : 0,
                fieldWorkerId: (_f = (_e = createdFieldWorkers.find((f) => f.name === 'Aung Min')) === null || _e === void 0 ? void 0 : _e.id) !== null && _f !== void 0 ? _f : 0,
                quantity: 50,
                notes: 'Distributed in eastern district',
            },
            {
                date: new Date('2023-04-14'),
                townshipId: (_h = (_g = createdTownships.find((t) => t.name === 'Mandalay')) === null || _g === void 0 ? void 0 : _g.id) !== null && _h !== void 0 ? _h : 0,
                aidTypeId: (_k = (_j = createdAidTypes.find((a) => a.name === 'Educational Materials')) === null || _j === void 0 ? void 0 : _j.id) !== null && _k !== void 0 ? _k : 0,
                fieldWorkerId: (_m = (_l = createdFieldWorkers.find((f) => f.name === 'Thiri Aung')) === null || _l === void 0 ? void 0 : _l.id) !== null && _m !== void 0 ? _m : 0,
                quantity: 30,
                notes: 'School supplies for three local schools',
            },
            {
                date: new Date('2023-04-13'),
                townshipId: (_p = (_o = createdTownships.find((t) => t.name === 'Bago')) === null || _o === void 0 ? void 0 : _o.id) !== null && _p !== void 0 ? _p : 0,
                aidTypeId: (_r = (_q = createdAidTypes.find((a) => a.name === 'Medical Supplies')) === null || _q === void 0 ? void 0 : _q.id) !== null && _r !== void 0 ? _r : 0,
                fieldWorkerId: (_t = (_s = createdFieldWorkers.find((f) => f.name === 'Kyaw Zaw')) === null || _s === void 0 ? void 0 : _s.id) !== null && _t !== void 0 ? _t : 0,
                quantity: 25,
                notes: 'First aid kits for community health workers',
            },
            {
                date: new Date('2023-04-12'),
                townshipId: (_v = (_u = createdTownships.find((t) => t.name === 'Naypyidaw')) === null || _u === void 0 ? void 0 : _u.id) !== null && _v !== void 0 ? _v : 0,
                aidTypeId: (_x = (_w = createdAidTypes.find((a) => a.name === 'Food Kits')) === null || _w === void 0 ? void 0 : _w.id) !== null && _x !== void 0 ? _x : 0,
                fieldWorkerId: (_z = (_y = createdFieldWorkers.find((f) => f.name === 'Su Su')) === null || _y === void 0 ? void 0 : _y.id) !== null && _z !== void 0 ? _z : 0,
                quantity: 40,
                notes: 'Emergency food supplies',
            },
            {
                date: new Date('2023-04-11'),
                townshipId: (_1 = (_0 = createdTownships.find((t) => t.name === 'Mawlamyine')) === null || _0 === void 0 ? void 0 : _0.id) !== null && _1 !== void 0 ? _1 : 0,
                aidTypeId: (_3 = (_2 = createdAidTypes.find((a) => a.name === 'Hygiene Kits')) === null || _2 === void 0 ? void 0 : _2.id) !== null && _3 !== void 0 ? _3 : 0,
                fieldWorkerId: (_5 = (_4 = createdFieldWorkers.find((f) => f.name === 'Tun Tun')) === null || _4 === void 0 ? void 0 : _4.id) !== null && _5 !== void 0 ? _5 : 0,
                quantity: 35,
                notes: 'COVID-19 prevention supplies',
            },
        ];
        // Create many more sample distributions to have realistic data
        // Generate distributions for each township and aid type
        for (const township of createdTownships) {
            for (const aidType of createdAidTypes) {
                // Skip if we already have this combination in our sample data
                if (distributions.some((d) => d.townshipId === township.id && d.aidTypeId === aidType.id)) {
                    continue;
                }
                // Create between 1-5 distributions for this township/aid type combination
                const count = Math.floor(Math.random() * 5) + 1;
                for (let i = 0; i < count; i++) {
                    const randomWorker = createdFieldWorkers[Math.floor(Math.random() * createdFieldWorkers.length)];
                    const randomQuantity = Math.floor(Math.random() * 50) + 10; // 10-60 items
                    const randomDate = new Date();
                    randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30)); // Last 30 days
                    distributions.push({
                        date: randomDate,
                        townshipId: township.id,
                        aidTypeId: aidType.id,
                        fieldWorkerId: randomWorker.id,
                        quantity: randomQuantity,
                        notes: `Regular distribution of ${aidType.name}`,
                    });
                }
            }
        }
        // Insert all distributions
        yield prisma.distribution.createMany({
            data: distributions,
            skipDuplicates: true,
        });
        console.log(`Database has been seeded.`);
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
