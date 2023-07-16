import { Request, Response } from "express";
import CitasService, { citasService } from "../services/CitasService";

class CitasController {
    private readonly service: CitasService;

    constructor() {
        this.service = citasService;
    }

    public getCitas = async (_req: Request, res: Response) => {
        try {
            const citas = await this.service.getCitas();
            res.json(citas);
        } catch (error) {
            console.error('Error al obtener las Citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las Citas' });
        }
    }

    public getUserCita = async (req: Request, res: Response) => {
        try {
            const usuario = req.params.idUsuario;
            const cita = await this.service.getUserCita(usuario);
            res.json(cita);
        } catch (error) {
            console.error('Error al obtener la Cita del paciente:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener la Cita del paciente' });
        }
    }

}

export default CitasController;
export const citasController = new CitasController();