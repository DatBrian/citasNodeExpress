"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citasController = void 0;
const CitasService_1 = require("../services/CitasService");
class CitasController {
    service;
    constructor() {
        this.service = CitasService_1.citasService;
    }
    getCitas = async (_req, res) => {
        try {
            const Citas = await this.service.getCitas();
            res.json(Citas);
        }
        catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    };
}
exports.default = CitasController;
exports.citasController = new CitasController();
