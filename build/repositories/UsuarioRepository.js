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
            return rows.map(({ usu_nombre: name, usu_segdo_nombre: secondName, usu_primer_apellido_usuar: lastName, usu_segdo_apellido_usuar: secondLastName, usu_telefono: phone, usu_direccion: address, 'usu_e-mail': mail, usu_tipodoc: doc, usu_genero: genero, usu_acudiente: acudiente, }) => new UsuarioEntity_1.default(name, secondName, lastName, secondLastName, phone, address, mail, doc, genero, acudiente));
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
