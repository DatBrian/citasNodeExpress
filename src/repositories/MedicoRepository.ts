import { RowDataPacket } from "mysql2";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import MedicosEntity from "../model/entities/MedicosEntity";

class MedicoRepository extends Connection{

    public async getMedicos(especialidad: string): Promise<MedicosEntity[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'SELECT medico.*, especialidad.esp_nombre AS especialidad_nombre FROM medico JOIN especialidad ON medico.med_especialidad = especialidad.esp_id WHERE especialidad.esp_nombre = ?';
            const [rows] = await connect.query<RowDataPacket[]>(query, [especialidad]);

            return rows.map(({ med_nroMatricula: matricula, med_nombreCompleto: nombre, med_consultorio: consultorio, especialidad_nombre: especialidad }) =>
                new MedicosEntity(matricula, nombre, consultorio, especialidad)
            );

        } catch (error) {
            console.error('Error al obtener los médicos :(', error);
            throw new Error('Error al obtener los médicos :(');
        } finally {
            connection.release();
        }
    }
}
export default MedicoRepository;
export const medicoRepository = new MedicoRepository();