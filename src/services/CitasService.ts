// import CitasDTO from "../model/dto/CitasDTO";
import CitasEntity from "../model/entities/CitasEntity";
import CitasRepository, { citasRepository } from "../repositories/CitasRepository";

class CitasService {
    private repository: CitasRepository

    constructor() {
        this.repository = citasRepository;
    }

    public async getCitas(): Promise<CitasEntity[]> {
        try {
            const Citas = await this.repository.getCitas();
            return Citas;
        } catch (error) {
            throw error;
        }
    }

}

export default CitasService;
export const citasService = new CitasService();