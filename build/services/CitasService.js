"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citasService = void 0;
const CitasRepository_1 = require("../repositories/CitasRepository");
class CitasService {
    repository;
    constructor() {
        this.repository = CitasRepository_1.citasRepository;
    }
    async getCitas() {
        try {
            const Citas = await this.repository.getCitas();
            return Citas;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = CitasService;
exports.citasService = new CitasService();
