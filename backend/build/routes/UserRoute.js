"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const express_1 = require("express");
const validateCpf_1 = require("../validations/middlewares/validateCpf");
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => userController.getUsers(req, res));
router.post('/', validateCpf_1.validateCpf, (req, res) => userController.createUser(req, res));
router.patch('/:id', validateCpf_1.validateCpf, (req, res) => userController.updateUser(req, res));
exports.default = router;
