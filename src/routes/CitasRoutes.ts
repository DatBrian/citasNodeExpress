import { Router } from "express";
import CitasController, { citasController } from "../controllers/CitasController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import RouterCommon from "../common/RouterCommon";
import CitasDTO from "../model/dto/CitasDTO";

class CitasRoutes extends RouterCommon<CitasController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: CitasController;

    constructor() {
        super(CitasController, ValidateMiddlewareDTO);
        this.path = '/citas';
        this.router = Router();
        this.controller = citasController;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.controller.getCitas)

        this.router.get(`${this.path}/next/:idUsuario`,
            (req, res, next) => ValidateMiddlewareDTO.validatorParams(req, res, next, CitasDTO),
            this.controller.getNextCita)

        this.router.get(`${this.path}/medico/:idMedico`,
            (req, res, next) => ValidateMiddlewareDTO.validatorParams(req, res, next, CitasDTO),
            this.controller.getUserMedicoCita)

        this.router.get(`${this.path}/paciente/:id`,
            (req, res, next) => ValidateMiddlewareDTO.validatorParams(req, res, next, CitasDTO),
            this.controller.getUserCitas)
    }
}

export const citasRoutes = new CitasRoutes();