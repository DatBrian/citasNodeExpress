"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
const Connection_1 = require("../db/Connection");
const UsuarioEntity_1 = __importDefault(require("../model/entities/UsuarioEntity"));
class UsuarioRepository extends Connection_1.Connection {
    async getUsuarios() {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'SELECT * FROM usuario ORDER BY usu_nombre ASC;';
            const [rows] = await connect.query(query);
            const usuarios = rows.map((row) => {
                const mappedRow = {
                    name: row.usu_nombre,
                    secondName: row.usu_segdo_nombre,
                    lastName: row.usu_primer_apellido_usuar,
                    secondLastName: row.usu_segdo_apellido_usuar,
                    phone: row.usu_telefono,
                    address: row.usu_direccion,
                    mail: row["usu_e-mail"],
                    doc: row.usu_tipodoc,
                    genero: row.usu_genero,
                    acudiente: row.usu_acudiente
                };
                return new UsuarioEntity_1.default(mappedRow.name, mappedRow.secondName, mappedRow.lastName, mappedRow.secondLastName, mappedRow.phone, mappedRow.address, mappedRow.mail, mappedRow.doc, mappedRow.genero, mappedRow.acudiente);
            });
            return usuarios;
        }
        catch (error) {
            console.error('Error al obtener los pacientes :(', error);
            throw new Error('Error al obtener los pacientes :(');
        }
        finally {
            connection.release();
        }
    }
}
exports.default = UsuarioRepository;
exports.usuarioRepository = new UsuarioRepository();
