"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const township_controllers_1 = require("../controllers/township_controllers");
const router = (0, express_1.Router)();
router.get('/', township_controllers_1.getTownships);
router.get('/support-stats', township_controllers_1.getTownshipSupportStats);
exports.default = router;
