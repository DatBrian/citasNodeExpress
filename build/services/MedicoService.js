"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicoService = void 0;
const MedicoRepository_1 = require("../repositories/MedicoRepository");
class MedicoService {
    repository;
    constructor() {
        this.repository = MedicoRepository_1.medicoRepository;
    }
    async getMedicos() {
        try {
            const medicos = await this.repository.getMedicos();
            return medicos;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = MedicoService;
exports.medicoService = new MedicoService();
