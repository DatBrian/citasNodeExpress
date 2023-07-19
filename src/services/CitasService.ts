import { RowDataPacket } from "mysql2";
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

    public async getNextCita(id:string): Promise<CitasDTO[] | string>{
        try {
            const pacienteExist = await this.repository.verifyPaciente(id);

            return pacienteExist
                ? await this.repository.nextUserCita(id)
                : "El paciente no existe :/";
        } catch (error) {
            throw error;
        }
    }

    public async getUserMedicoCita(id:string): Promise<UsuarioDTO[] | string>{
        try {
            const medicoExist = await this.repository.verifyMedico(id);

            return medicoExist
                ? await this.repository.userMedicoCita(id)
                : "El médico no existe :/"
        } catch (error) {
            throw error;
        }
    }

    public async getUserCitas(id: string): Promise<CitasDTO[] | string>{
        try {
            const pacienteExist = await this.repository.verifyPaciente(id);

            return pacienteExist
                ? await this.repository.userCitas(id)
                : "El paciente no existe :/";
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

    public async getCountCitas(id: string, date: string): Promise<CitasDTO[] | string>{
        try {
            const medicoExist = await this.repository.verifyMedico(id);

            return medicoExist
                ? await this.repository.countCitas(id, date)
                : "El médico no existe :/"
        } catch (error) {
            throw error;
        }
    }

    public async getUserConsultorio(id: string): Promise<RowDataPacket[] | string>{
        try {
            const pacienteExist = await this.repository.verifyPaciente(id);

            return pacienteExist
                ? await this.repository.userConsultorios(id)
                : "El paciente no existe :/";
        } catch (error) {
            throw error;
        }
    }

    public async getGeneroCitas(genero: string): Promise<CitasDTO[]>{
        try {
            const citas = await this.repository.generoCitas(genero);
            return citas;
        } catch (error) {
            throw error;
        }
    }

    public async getRefusedCitas(month: string): Promise<CitasDTO[]>{
        try {
            const citas = await this.repository.getRefusedCitas(month);
            return citas;
        } catch (error) {
            throw error;
        }
    }

}

export default CitasService;
export const citasService = new CitasService();