"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.citasRepository = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
const CitasEntity_1 = __importDefault(require("../model/entities/CitasEntity"));
const Connection_1 = require("../db/Connection");
class CitasRepository extends Connection_1.Connection {
    async getCitas() {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = 'SELECT * FROM cita ORDER BY cit_fecha ASC';
            const [rows] = await connection.query(query);
            const citas = rows.map((row) => {
                const mappedRow = {
                    codigo: row.cit_codigo,
                    fecha: row.cit_fecha,
                    estado: row.cit_estadoCita,
                    medico: row.cit_medico,
                    datosUser: row.cit_datosUsuario
                };
                return new CitasEntity_1.default(mappedRow.codigo, mappedRow.fecha, mappedRow.estado, mappedRow.medico, mappedRow.datosUser);
            });
            return citas;
        }
        catch (error) {
            console.error('Error al obtener las Citas :(', error);
            throw new Error('Error al obtener las Citas :(');
        }
        finally {
            connection.release();
        }
    }
}
exports.default = CitasRepository;
exports.citasRepository = new CitasRepository();
