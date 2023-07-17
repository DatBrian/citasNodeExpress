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

    public getNextCita = async (req: Request, res: Response) => {
        try {
            const usuario = req.params.idUsuario;
            const cita = await this.service.getNextCita(usuario);
            res.json(cita);
        } catch (error) {
            console.error('Error al obtener la Cita del paciente:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener la Cita del paciente' });
        }
    }

    public getUserMedicoCita = async (req: Request, res: Response) => {
        try {
            const medico = req.params.idMedico;
            const pacientes = await this.service.getUserMedicoCita(medico);
            res.json(pacientes);
        } catch (error) {
            console.error('Error al obtener el paciente del doctor:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener el paciente del doctor' });
        }
    }

    public getUserCitas = async (req: Request, res: Response) => {
        try {
            const paciente = req.params.id;
            const citas = await this.service.getUserCitas(paciente);
            res.json(citas);
        } catch (error) {
            console.error('Error al obtener las citas del paciente:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las citas del paciente' });
        }
    }

    public getDateCitas = async (req: Request, res: Response) => {
        try {
            const date = req.params.date;
            const citas = await this.service.getDateCitas(date);
            res.json(citas);
        } catch (error) {
            console.error('Error al obtener las citas de esa fecha:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las citas de esa fecha' });
        }
    }

    public getCountCitas = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const date = req.params.date;
            const count = await this.service.getCoutCitas(id, date);
            res.json(count);
        } catch (error) {
            console.error('Error al obtener el conteo de citas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener el conteo de citas' });
        }
    }

    public getUserConsultorio = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const consultorios = await this.service.getUserConsultorio(id);
            res.json(consultorios);
        } catch (error) {
            console.error('Error al obtener los consultorios del paciente:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los consultorios del paciente' });
        }
    }

    public getGeneroCitas = async (req: Request, res: Response) => {
        try {
            const genero = req.params.genero;
            const citas = await this.service.getGeneroCitas(genero);
            res.json(citas);
        } catch (error) {
            console.error('Error al obtener las citas de ese genero:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las citas de ese genero' });
        }
    }
}

export default CitasController;
export const citasController = new CitasController();