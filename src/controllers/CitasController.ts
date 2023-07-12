import { Request, Response } from "express";
import CitasService, { citasService } from "../services/CitasService";

class CitasController {
    private readonly service: CitasService;

    constructor() {
        this.service = citasService;
    }

    public getCitas = async (_req: Request, res: Response) => {
        try {
            const Citas = await this.service.getCitas();
            res.json(Citas);
        } catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    }

}

export default CitasController;
export const citasController = new CitasController();