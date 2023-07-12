"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CitasRoutes_1 = require("./routes/CitasRoutes");
const app = new app_1.default([
    CitasRoutes_1.citasRoutes
]);
app.listen();
