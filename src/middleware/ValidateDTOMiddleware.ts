import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";

class ValidateMiddlewareDTO {
    constructor() { }

    public static async validator(
        req: Request,
        res: Response,
        next: NextFunction,
        type: any
    ) {
        try {
            const dto = plainToClass(type, JSON.parse(JSON.stringify(req.params)));
            const errors: ValidationError[] = await validate(dto);
            console.log(dto);
            return errors.length > 0
                ? res.status(400).json({
                    errors: errors.map((error) => ({
                        property: error.property,
                        constraints: error.constraints,
                    }))
                })
                : ((req.body = dto), next());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error " });
        }
    }
}
export default ValidateMiddlewareDTO;