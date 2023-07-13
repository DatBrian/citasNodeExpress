"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MedicosEntity {
    matricula;
    nombre;
    consultorio;
    especialidad;
    constructor(matricula, nombre, consultorio, especialidad) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.consultorio = consultorio;
        this.especialidad = especialidad;
    }
}
exports.default = MedicosEntity;
