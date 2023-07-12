"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CitasEntity {
    codigo;
    fecha;
    estado;
    medico;
    datosUser;
    constructor(codigo, fecha, estado, medico, datosUser) {
        this.codigo = codigo;
        this.fecha = fecha;
        this.estado = estado;
        this.medico = medico;
        this.datosUser = datosUser;
    }
}
exports.default = CitasEntity;
