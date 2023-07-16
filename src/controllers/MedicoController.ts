import MedicoService, { medicoService } from "../services/MedicoService";
import { Request, Response } from "express";

class MedicoController {
    private readonly service: MedicoService;

    constructor() {
        this.service = medicoService;
    }

    public getMedicosbyEsp = async (req: Request, res: Response) => {
        try {
            const especialidad = req.params.especialidad;
            const medicos = await this.service.getMedicosbyEsp(especialidad);
            res.json(medicos);
        } catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    }
}

export default MedicoController;
export const medicoController = new MedicoController();