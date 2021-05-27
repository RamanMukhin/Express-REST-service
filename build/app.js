"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const user_router_1 = require("./resources/users/user.router");
const board_router_1 = require("./resources/boards/board.router");
const task_router_1 = require("./resources/tasks/task.router");
const app = express_1.default();
exports.app = app;
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', user_router_1.router);
app.use('/boards', board_router_1.router);
app.use('/boards/:id/tasks', task_router_1.router);
