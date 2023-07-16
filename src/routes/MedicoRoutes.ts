import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import MedicoController, { medicoController } from "../controllers/MedicoController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import MedicosDTO from "../model/dto/MedicosDTO";


class MedicoRoutes extends RouterCommon<MedicoController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: MedicoController;

    constructor() {
        super(MedicoController, ValidateMiddlewareDTO);
        this.path = '/medicos';
        this.router = Router();
        this.controller = medicoController
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}/:especialidad`,
            (req, res, next) => ValidateMiddlewareDTO.validatorParams(req, res, next, MedicosDTO),
            this.controller.getMedicosbyEsp)
    }
}
export const medicosRoutes = new MedicoRoutes();