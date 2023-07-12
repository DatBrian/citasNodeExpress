"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ValidateMiddlewareDTO {
    constructor() { }
    static async validator(req, res, next, type) {
        try {
            const dto = (0, class_transformer_1.plainToClass)(type, req.body);
            const errors = await (0, class_validator_1.validate)(dto);
            console.log(dto);
            return errors.length > 0
                ? res.status(400).json({
                    errors: errors.map((error) => ({
                        property: error.property,
                        constraints: error.constraints,
                    }))
                })
                : ((req.body = dto), next());
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error " });
        }
    }
}
exports.default = ValidateMiddlewareDTO;
