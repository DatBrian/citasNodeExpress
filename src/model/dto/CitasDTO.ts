import { Expose, Type, Transform } from 'class-transformer';
import { IsString, IsInt, IsDateString, ValidateIf, IsOptional } from 'class-validator';
import 'reflect-metadata';
import { formatDate } from '../../common/FunctionsCommon';

class BodegasDTO {
    @Expose({ name: 'codigo' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    codigo: number;

    @Expose({ name: 'fecha' })
    @IsDateString()
    @ValidateIf((_, value) => !value)
    @Transform(({ value }) => formatDate(value), { toClassOnly: true })
    fecha: string;

    @Expose({ name: 'estado' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    estado: number;

    @Expose({ name: 'medico' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    medico: number;

    @Expose({ name: 'datosUser' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    datosUser: number;

    constructor(
        cit_codigo: number,
        cit_fecha: string,
        cit_estado: number,
        cit_medico: number,
        cit_datosUser: number
    ) {
        this.codigo = cit_codigo;
        this.fecha = cit_fecha;
        this.estado = cit_estado;
        this.medico = cit_medico;
        this.datosUser = cit_datosUser;
    }
}
export default BodegasDTO;