import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import { plainToClass } from "class-transformer";
import UsuarioDTO from "../model/dto/UsuarioDTO";

class UsuarioRepository extends Connection {
    public async getUsuarios(): Promise<UsuarioDTO[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `SELECT usuario.*, tipo_documento.tipdoc_nombre AS documento, genero.gen_nombre AS genero, acudiente.acu_nombreCompleto AS nombre_acudiente
        FROM usuario
        INNER JOIN tipo_documento ON usuario.usu_tipodoc = tipo_documento.tipdoc_id
        INNER JOIN genero ON usuario.usu_genero = genero.gen_id
        INNER JOIN acudiente ON usuario.usu_acudiente = acudiente.acu_codigo
        ORDER BY usu_nombre ASC`;
            const [rows] = await connect.query<RowDataPacket[]>(query);
            const dtos: UsuarioDTO[] = rows.map((row) => {
                return plainToClass(UsuarioDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

        } catch (error) {
            console.error("Error al obtener los pacientes :(", error);
            throw new Error("Error al obtener los pacientes :(");
        } finally {
            connection.release();
        }
    }
}

export default UsuarioRepository;
export const usuarioRepository = new UsuarioRepository();