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

            const usuarios: UsuarioEntity[] = rows.map((row) => {
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

                return new UsuarioEntity(
                    mappedRow.name,
                    mappedRow.secondName,
                    mappedRow.lastName,
                    mappedRow.secondLastName,
                    mappedRow.phone,
                    mappedRow.address,
                    mappedRow.mail,
                    mappedRow.doc,
                    mappedRow.genero,
                    mappedRow.acudiente
                );
            });
            return usuarios;
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