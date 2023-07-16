import MedicosDTO from "../model/dto/MedicosDTO";
import MedicoRepository, { medicoRepository } from "../repositories/MedicoRepository";


class MedicoService{
    private repository: MedicoRepository;

    constructor() {
        this.repository = medicoRepository;
    }

    public async getMedicosbyEsp(especialidad: string): Promise<MedicosDTO[] | string> {
        try {
            const especialidadExists = await this.repository.verifyEspecialidad(especialidad);

            return especialidadExists
                ? await this.repository.getMedicosbyEsp(especialidad)
                : "La especialidad indicada no existe";
        } catch (error) {
            throw error;
        }
    }

}

export default MedicoService;
export const medicoService = new MedicoService();