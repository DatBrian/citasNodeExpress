import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import UsuarioController, { usuariosController } from "../controllers/UsuarioController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";


class UsuarioRoutes extends RouterCommon<UsuarioController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: UsuarioController;

    constructor() {
        super(UsuarioController, ValidateMiddlewareDTO);
        this.path = '/pacientes';
        this.router = Router();
        this.controller = usuariosController;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.controller.getUsuarios)
    }
}

export const usuarioRoutes = new UsuarioRoutes();