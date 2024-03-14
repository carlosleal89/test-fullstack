"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.get('/', (req, res) => userController.getUsers(req, res));
router.post('/', (req, res) => userController.createUser(req, res));
router.patch('/:id', (req, res) => userController.updateUser(req, res));
exports.default = router;
