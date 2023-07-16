import CitasDTO from "../model/dto/CitasDTO";
import UsuarioDTO from "../model/dto/UsuarioDTO";
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

    public async getNextCita(id:string): Promise<CitasDTO[]>{
        try {
            const cita = await this.repository.nextUserCita(id);
            return cita;
        } catch (error) {
            throw error;
        }
    }

    public async getUserMedicoCita(id:string): Promise<UsuarioDTO[]>{
        try {
            const pacientes = await this.repository.userMedicoCita(id);
            return pacientes;
        } catch (error) {
            throw error;
        }
    }

    public async getUserCitas(id: string): Promise<CitasDTO[]>{
        try {
            const citas = await this.repository.userCitas(id);
            return citas;
        } catch (error) {
            throw error;
        }
    }

    public async getDateCitas(date: string): Promise<CitasDTO[]>{
        try {
            const citas = await this.repository.datesCita(date);
            return citas;
        } catch (error) {
            throw error;
        }
    }

    public async getCoutCitas(id: string, date: string): Promise<CitasDTO[]>{
        try {
            const count = await this.repository.countCitas(id, date);
            return count;
        } catch (error) {
            throw error;
        }
    }

}

export default CitasService;
export const citasService = new CitasService();