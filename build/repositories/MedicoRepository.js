"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicoRepository = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
const Connection_1 = require("../db/Connection");
const MedicosEntity_1 = __importDefault(require("../model/entities/MedicosEntity"));
class MedicoRepository extends Connection_1.Connection {
    async getMedicos() {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'SELECT * FROM medico WHERE med_especialidad = ?';
            const [rows] = await connect.query(query);
            return rows.map(({ med_nroMatricula: matricula, med_nombreCompleto: nombre, med_consultorio: consultorio, med_especialidad: especialidad }) => new MedicosEntity_1.default(matricula, nombre, consultorio, especialidad));
        }
        catch (error) {
            console.error('Error al obtener los médicos :(', error);
            throw new Error('Error al obtener los médicos :(');
        }
        finally {
            connection.release();
        }
    }
}
exports.default = MedicoRepository;
exports.medicoRepository = new MedicoRepository();
