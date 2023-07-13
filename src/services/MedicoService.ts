import MedicosEntity from "../model/entities/MedicosEntity";
import MedicoRepository, { medicoRepository } from "../repositories/MedicoRepository";


class MedicoService{
    private repository: MedicoRepository;

    constructor() {
        this.repository = medicoRepository;
    }

    public async getMedicos(): Promise<MedicosEntity[]>{
        try {
            const medicos = await this.repository.getMedicos();
            return medicos;
        } catch (error) {
            throw error;
        }
    }
}

export default MedicoService;
export const medicoService = new MedicoService();