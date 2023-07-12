import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import CitasEntity from "../model/entities/CitasEntity";
import { Connection } from "../db/Connection";

class CitasRepository extends Connection {

    public async getCitas(): Promise<CitasEntity[]> {
        const connection = await dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = 'SELECT * FROM cita ORDER BY cit_fecha ASC';
            const [rows] = await connection.query<RowDataPacket[]>(query);

            const Citas: CitasEntity[] = rows.map((row) => {
                const mappedRow = {
                    codigo: row.cit_codigo,
                    fecha: row.cit_fecha,
                    estado: row.cit_estadoCita,
                    medico: row.cit_medico,
                    datosUser: row.cit_datosUsuario
                };

                return new CitasEntity(
                    mappedRow.codigo,
                    mappedRow.fecha,
                    mappedRow.estado,
                    mappedRow.medico,
                    mappedRow.datosUser
                );
            });

            return Citas;
        } catch (error) {
            console.error('Error al obtener las Citas :(', error);
            throw new Error('Error al obtener las Citas :(');
        } finally {
            connection.release();
        }
    }
}
export default CitasRepository;
export const citasRepository = new CitasRepository();