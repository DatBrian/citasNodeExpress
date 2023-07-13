"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicoController = void 0;
const MedicoService_1 = require("../services/MedicoService");
class MedicoController {
    service;
    constructor() {
        this.service = MedicoService_1.medicoService;
    }
    getMedicos = async (_req, res) => {
        try {
            const medicos = await this.service.getMedicos();
            res.json(medicos);
        }
        catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    };
}
exports.default = MedicoController;
exports.medicoController = new MedicoController();
