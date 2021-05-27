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
const boardsService = __importStar(require("./board.service"));
const boardUtil_1 = require("../../common/boardUtil");
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(async (_req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
});
router.route('/').post(async (req, res) => {
    const title = boardUtil_1.toBoardDto(req.body);
    const columns = boardUtil_1.toColumnDto(req.body);
    const board = await boardsService.create(title, columns);
    res.status(201).json(board);
});
router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.find(id);
    if (typeof board === 'undefined') {
        res.status(404);
    }
    res.json(board);
});
router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const updateTitle = boardUtil_1.toBoardDto(req.body);
    const updateColumns = boardUtil_1.toColumnDto(req.body);
    const board = await boardsService.update(id, updateTitle, updateColumns);
    res.json(board);
});
router.route('/:id').delete(async (req, res) => {
    const { id } = req.params;
    await boardsService.remove(id);
    res.json();
});
