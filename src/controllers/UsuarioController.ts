import UsuarioService, { usuarioService } from "../services/UsuarioService";
import { Request, Response } from "express";

class UsuarioController{
    private readonly service: UsuarioService;

    constructor() {
        this.service = usuarioService;
    }

    public getUsuarios = async (_req: Request, res: Response) => {
        try {
            const usuarios = await this.service.getUsuarios();
            res.json(usuarios);
        } catch (error) {
            console.error('Error al obtener los pacientes:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los pacientes' });
        }
    }
}
export default UsuarioController;
export const usuariosController = new UsuarioController();