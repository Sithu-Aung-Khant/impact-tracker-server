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
exports.aidTypes = exports.townships = void 0;
exports.fetchWithDelay = fetchWithDelay;
// This would typically come from an API or database
exports.townships = [
    'Yangon',
    'Mandalay',
    'Naypyidaw',
    'Bago',
    'Mawlamyine',
    'Taunggyi',
    'Pathein',
    'Monywa',
    'Meiktila',
    'Myitkyina',
];
exports.aidTypes = [
    'Food Kits',
    'Educational Materials',
    'Medical Supplies',
    'Hygiene Kits',
    'Shelter Materials',
    'Water Purification',
    'Clothing',
];
// Mock function to simulate fetching data with delay
function fetchWithDelay(data_1) {
    return __awaiter(this, arguments, void 0, function* (data, delay = 500) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, delay);
        });
    });
}
