"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioService = void 0;
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
class UsuarioService {
    repository;
    constructor() {
        this.repository = UsuarioRepository_1.usuarioRepository;
    }
    async getUsuarios() {
        try {
            const usuarios = await this.repository.getUsuarios();
            return usuarios;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = UsuarioService;
exports.usuarioService = new UsuarioService();
