import MedicosEntity from "../model/entities/MedicosEntity";
import MedicoRepository, { medicoRepository } from "../repositories/MedicoRepository";


class MedicoService{
    private repository: MedicoRepository;

    constructor() {
        this.repository = medicoRepository;
    }

    public async getMedicos(especialidad: string): Promise<MedicosEntity[] | string> {
        try {
            const especialidadExists = await this.repository.verifyEspecialidad(especialidad);

            return especialidadExists
                ? await this.repository.getMedicos(especialidad)
                : "La especialidad indicada no existe";
        } catch (error) {
            throw error;
        }
    }

}

export default MedicoService;
export const medicoService = new MedicoService();