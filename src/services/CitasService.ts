import CitasDTO from "../model/dto/CitasDTO";
import CitasRepository, { citasRepository } from "../repositories/CitasRepository";

class CitasService {
    private repository: CitasRepository

    constructor() {
        this.repository = citasRepository;
    }

    public async getCitas(): Promise<CitasDTO[]> {
        try {
            const citas = await this.repository.getCitas();
            return citas;
        } catch (error) {
            throw error;
        }
    }

    public async getUserCita(id:string): Promise<CitasDTO[]>{
        try {
            const cita = await this.repository.nextUserCita(id);
            return cita;
        } catch (error) {
            throw error;
        }
    }

}

export default CitasService;
export const citasService = new CitasService();