import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import CitasDTO from "../model/dto/CitasDTO";
import { plainToClass } from "class-transformer";

class CitasRepository extends Connection {

    public async getCitas(): Promise<CitasDTO[]> {
        const connection = await dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = `
            SELECT cita.*, estado_cita.estcita_nombre AS estado, medico.med_nombreCompleto AS medico_nombre, usuario.usu_nombre AS usuario_nombre
            FROM cita
            INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            ORDER BY cita.cit_fecha ASC`;
            const [rows] = await connection.query<RowDataPacket[]>(query);
            const dtos: CitasDTO[] = rows.map((row) => {
                return plainToClass(CitasDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

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