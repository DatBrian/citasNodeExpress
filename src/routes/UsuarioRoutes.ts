import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import UsuarioController, { usuariosController } from "../controllers/UsuarioController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import UsuarioInsertDTO from "../model/dto/UsuarioInsert";


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

        this.router.post(`${this.path}`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, UsuarioInsertDTO);
            },
            (req, res) => this.controller.insertUsuario(req, res));
    }
}

export const usuarioRoutes = new UsuarioRoutes();