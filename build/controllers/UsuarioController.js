"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
class UsuarioController {
    service;
    constructor() {
        this.service = UsuarioService_1.usuarioService;
    }
    getUsuarios = async (_req, res) => {
        try {
            const usuarios = await this.service.getUsuarios();
            res.json(usuarios);
        }
        catch (error) {
            console.error('Error al obtener los pacientes:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los pacientes' });
        }
    };
}
exports.default = UsuarioController;
exports.usuariosController = new UsuarioController();
