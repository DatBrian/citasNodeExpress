"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CitasRoutes_1 = require("./routes/CitasRoutes");
const UsuarioRoutes_1 = require("./routes/UsuarioRoutes");
const app = new app_1.default([
    CitasRoutes_1.citasRoutes,
    UsuarioRoutes_1.usuarioRoutes
]);
app.listen();
