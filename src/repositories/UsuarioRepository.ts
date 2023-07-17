import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import { plainToClass } from "class-transformer";
import UsuarioDTO from "../model/dto/UsuarioDTO";
import UsuarioInsertDTO from "../model/dto/UsuarioInsert";

class UsuarioRepository extends Connection {

    public async getUsuarios(): Promise<UsuarioDTO[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `SELECT usuario.*, tipo_documento.tipdoc_nombre AS documento, genero.gen_nombre AS name_genero, acudiente.acu_nombreCompleto AS name_acudiente
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

    public async insertUsuario(body: UsuarioInsertDTO): Promise<string>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `INSERT INTO usuario SET ?`;
            await connect.query(query, body);

            return 'Usuario insertado correctamente';
        } catch (error) {
            console.error("Error al insertar el paciente :(", error);
            throw new Error("Error al insertar el paciente :(");
        } finally {
            connection.release();
        }
    }

    public async verifyDoc(doc: number): Promise<boolean> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `SELECT tipdoc_nombre FROM tipo_documento WHERE tipdoc_id = ?`;
            const [rows] = await connect.query<RowDataPacket[]>(query, [doc]);

            return (rows[0].usu_tipodoc == "cedula de ciudadania")
                ? true
                : false;
        } catch (error) {
            console.error("Error al verificar el documento del paciente :(", error);
            throw new Error("Error al verificar el documento del paciente :(");
        } finally {
            connection.release();
        }
    }

    public async verifyAcudiente(id: number): Promise<boolean> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `SELECT COUNT(*) as count FROM acudiente WHERE acu_codigo = ?`;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id]);

            const count = rows[0].count;

            return (count > 0) ? true : false;
        } catch (error) {
            console.error("Error al verificar el acudiente del paciente :(", error);
            throw new Error("Error al verificar el acudiente del paciente :(");
        } finally {
            connection.release();
        }
    }
}

export default UsuarioRepository;
export const usuarioRepository = new UsuarioRepository();