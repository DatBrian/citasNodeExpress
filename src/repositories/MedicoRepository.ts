import { RowDataPacket } from "mysql2";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import MedicosDTO from "../model/dto/MedicosDTO";
import { plainToClass } from "class-transformer";

class MedicoRepository extends Connection{

    public async getMedicos(): Promise<MedicosDTO[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT medico.*, especialidad.esp_nombre AS nombre_especialidad, consultorio.cons_nombre AS nombre_consultorio
            FROM medico
            JOIN especialidad ON medico.med_especialidad = especialidad.esp_id
            JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query);
            const dtos: MedicosDTO[] = rows.map((row) => {
                return plainToClass(MedicosDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

        } catch (error) {
            console.error('Error al obtener los médicos :(', error);
            throw new Error('Error al obtener los médicos :(');
        } finally {
            connection.release();
        }
    }

    public async getMedicosbyEsp(especialidad: string): Promise<MedicosDTO[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT medico.*, especialidad.esp_nombre AS nombre_especialidad, consultorio.cons_nombre AS nombre_consultorio
            FROM medico
            JOIN especialidad ON medico.med_especialidad = especialidad.esp_id
            JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
            WHERE especialidad.esp_nombre = ?`;
            const [rows] = await connect.query<RowDataPacket[]>(query, [especialidad]);
            const dtos: MedicosDTO[] = rows.map((row) => {
                return plainToClass(MedicosDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

        } catch (error) {
            console.error('Error al obtener los médicos con esa especialidad :(', error);
            throw new Error('Error al obtener los médicos con esa especialidad :(');
        } finally {
            connection.release();
        }
    }

    public async verifyEspecialidad(especialidad: string): Promise<boolean>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'SELECT COUNT(*) as count FROM especialidad WHERE esp_nombre = ?';
            const [rows] = await connect.query<RowDataPacket[]>(query, [especialidad]);

            const count = rows[0].count;

            return (count > 0) ? true : false;
        } catch (error) {
            console.error('Error al verificar la especialidad:', error);
            throw new Error('Error al verificar la especialidad');
        } finally {
            connection.release();
        }
    }
}
export default MedicoRepository;
export const medicoRepository = new MedicoRepository();