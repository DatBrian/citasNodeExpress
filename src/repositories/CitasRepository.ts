import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import CitasDTO from "../model/dto/CitasDTO";
import { plainToClass } from "class-transformer";
import UsuarioDTO from "../model/dto/UsuarioDTO";

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
            ORDER BY cita.cit_fecha ASC
            `;
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

    public async nextUserCita(id: string): Promise<CitasDTO[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT cita.*, estado_cita.estcita_nombre AS estado, medico.med_nombreCompleto AS medico_nombre, usuario.usu_nombre AS usuario_nombre
            FROM cita
            INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            WHERE cit_datosUsuario = ?
            ORDER BY cita.cit_fecha ASC
            LIMIT 1`;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id]);
            const dtos: CitasDTO[] = rows.map((row) => {
                return plainToClass(CitasDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

        } catch (error) {
            console.error('Error al obtener la Citas del Paciente :(', error);
            throw new Error('Error al obtener la Cita del Paciente :(');
        } finally {
            connection.release();
        }
    }

    public async userMedicoCita(id: string): Promise<UsuarioDTO[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
                SELECT u.*
                FROM cita c
                INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
                WHERE c.cit_medico = ?;
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id]);
            const dtos: UsuarioDTO[] = rows.map((row) => {
                return plainToClass(UsuarioDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;

        } catch (error) {
            console.error('Error al obtener los pacientes del doctor :(', error);
            throw new Error('Error al obtener los pacientes del doctor :(');
        } finally {
            connection.release();
        }
    }

    public async userCitas(id: string): Promise<CitasDTO[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT cita.*, estado_cita.estcita_nombre AS estado, medico.med_nombreCompleto AS medico_nombre, usuario.usu_nombre AS usuario_nombre
            FROM cita
            INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            WHERE cit_datosUsuario = ?
            ORDER BY cita.cit_fecha ASC
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id]);
            const dtos: CitasDTO[] = rows.map((row) => {
                return plainToClass(CitasDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;
        } catch (error) {
            console.error('Error al obtener las citas del paciente :(', error);
            throw new Error('Error al obtener las citas del paciente :(');
        } finally {
            connection.release();
        }
    }

    public async datesCita(date: string): Promise<CitasDTO[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT cita.*, estado_cita.estcita_nombre AS estado, medico.med_nombreCompleto AS medico_nombre, usuario.usu_nombre AS usuario_nombre
            FROM cita
            INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
            WHERE cit_fecha = ?
            ORDER BY cit_fecha ASC
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query, [date]);
            const dtos: CitasDTO[] = rows.map((row) => {
                return plainToClass(CitasDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;
        } catch (error) {
            console.error('Error al obtener las citas en la fecha ingresada :(', error);
            throw new Error('Error al obtener las citas en la fecha ingresada:(');
        } finally {
            connection.release();
        }
    }

    public async countCitas(id: string, date: string): Promise<CitasDTO[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT COUNT(*) AS count
            FROM cita
            WHERE cit_medico = ? AND cit_fecha = ?
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id, date]);
            const dtos: CitasDTO[] = rows.map((row) => {
                return plainToClass(CitasDTO, row, {
                    excludeExtraneousValues: true
                });
            });
            return dtos;
        } catch (error) {
            console.error('Error al obtener el conteo de las citas :(', error);
            throw new Error('Error al obtener el conteo de las citas :(');
        } finally {
            connection.release();
        }
    }

    public async userConsultorios(id: string): Promise<RowDataPacket[]>{
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `
            SELECT DISTINCT medico.med_consultorio AS consultorio
            FROM cita
            INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
            WHERE cita.cit_datosUsuario = ?
            `;
            const [rows] = await connect.query<RowDataPacket[]>(query, [id]);
            return rows;
        } catch (error) {
            console.error('Error al obtener los consultorios de ese paciente :(', error);
            throw new Error('Error al obtener los consultorios de ese paciente :(');
        } finally {
            connection.release();
        }
    }
}
export default CitasRepository;
export const citasRepository = new CitasRepository();