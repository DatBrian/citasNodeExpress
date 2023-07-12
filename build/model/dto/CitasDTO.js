"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
require("reflect-metadata");
const FunctionsCommon_1 = require("../../common/FunctionsCommon");
class BodegasDTO {
    codigo;
    fecha;
    estado;
    medico;
    datosUser;
    constructor(cit_codigo, cit_fecha, cit_estado, cit_medico, cit_datosUser) {
        this.codigo = cit_codigo;
        this.fecha = cit_fecha;
        this.estado = cit_estado;
        this.medico = cit_medico;
        this.datosUser = cit_datosUser;
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: 'codigo' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], BodegasDTO.prototype, "codigo", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'fecha' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.ValidateIf)((_, value) => !value),
    (0, class_transformer_1.Transform)(({ value }) => (0, FunctionsCommon_1.formatDate)(value), { toClassOnly: true }),
    __metadata("design:type", String)
], BodegasDTO.prototype, "fecha", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'estado' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], BodegasDTO.prototype, "estado", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'medico' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], BodegasDTO.prototype, "medico", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'datosUser' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], BodegasDTO.prototype, "datosUser", void 0);
exports.default = BodegasDTO;
