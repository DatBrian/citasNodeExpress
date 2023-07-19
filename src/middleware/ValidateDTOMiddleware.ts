import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

class ValidateMiddlewareDTO {
    constructor() { }

    public static async validator(
        req: Request,
        res: Response,
        next: NextFunction,
        type: any
    ) {
        try {
            const dto = plainToClass(type, req.body);
            await validate(dto);
            return ((req.body = dto), next());
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ error: "Error en los parámetros de la consulta, revisa la consola para mas información" });
        }
    }

    public static async validatorParams(
        req: Request,
        res: Response,
        next: NextFunction,
        type: any
    ) {
        try {
            const dto = plainToClass(type, JSON.parse(JSON.stringify(req.params)), { excludeExtraneousValues: true });
            await validate(dto);
            return ((req.body = dto), next());
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ error: "Error en el cuerpo de la consulta, revisa la consola para más información" });
        }
    }
}
export default ValidateMiddlewareDTO;