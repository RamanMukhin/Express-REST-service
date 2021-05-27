"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const usersService = __importStar(require("./user.service"));
const userUtil_1 = require("../../common/userUtil");
const user_model_1 = require("./user.model");
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(user_model_1.User.toResponse));
});
router.route('/').post(async (req, res) => {
    const newUser = userUtil_1.toUserDto(req.body);
    const user = await usersService.create(newUser);
    res.status(201).json(user_model_1.User.toResponse(user));
});
router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.find(id);
    if (typeof user === 'undefined') {
        res.status(404);
    }
    else {
        res.json(user_model_1.User.toResponse(user));
    }
});
router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const updateUser = userUtil_1.toUserDto(req.body);
    const user = await usersService.update(id, updateUser);
    res.json(user_model_1.User.toResponse(user));
});
router.route('/:id').delete(async (req, res) => {
    const { id } = req.params;
    await usersService.remove(id);
    res.json();
});
