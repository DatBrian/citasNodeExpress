import MedicoService, { medicoService } from "../services/MedicoService";
import { Request, Response } from "express";

class MedicoController {
    private readonly service: MedicoService;

    constructor() {
        this.service = medicoService;
    }

    public getMedicos = async (_req: Request, res: Response) => {
        try {
            const medicos = await this.service.getMedicos();
            res.json(medicos);
        } catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    }
}

export default MedicoController;
export const medicoController = new MedicoController();