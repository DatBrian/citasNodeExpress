import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import UsuarioEntity from "../model/entities/UsuarioEntity";

class UsuarioRepository extends Connection {

    public async getUsuarios(): Promise<UsuarioEntity[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'SELECT * FROM usuario ORDER BY usu_nombre ASC;';
            const [rows] = await connect.query<RowDataPacket[]>(query);

            return rows.map(
                ({
                usu_nombre: name,
                usu_segdo_nombre: secondName,
                usu_primer_apellido_usuar: lastName,
                usu_segdo_apellido_usuar: secondLastName,
                usu_telefono: phone,
                usu_direccion: address,
                'usu_e-mail': mail,
                usu_tipodoc: doc,
                usu_genero: genero,
                usu_acudiente: acudiente,
                }) =>
                new UsuarioEntity(
                    name,
                    secondName,
                    lastName,
                    secondLastName,
                    phone,
                    address,
                    mail,
                    doc,
                    genero,
                    acudiente
                )
            );
        } catch (error) {
            console.error('Error al obtener los pacientes :(', error);
            throw new Error('Error al obtener los pacientes :(');
        } finally {
            connection.release();
        }
    }
}
export default UsuarioRepository;
export const usuarioRepository = new UsuarioRepository();