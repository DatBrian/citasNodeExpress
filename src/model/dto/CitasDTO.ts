import { Expose, Transform } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

class CitasDTO {
    @Expose({ name: 'cit_fecha' })
    @IsOptional()
    @IsString()
    public date: string;

    @Expose({ name: 'cit_estadoCita' })
    @IsOptional()
    @IsInt()
    public id_estado: number;

    @Expose({ name: 'cit_medico' })
    @IsOptional()
    @IsInt()
    public id_medico: number;

    @Expose({ name: 'cit_datosUsuario' })
    @IsOptional()
    @IsInt()
    public id_datos: number;

    @Expose({ name: 'estado' })
    @IsOptional()
    @IsString()
    public estado: string

    @Expose({ name: 'medico_nombre' })
    @IsOptional()
    @IsString()
    public medico: string

    @Expose({ name: 'usuario_nombre' })
    @IsOptional()
    @IsString()
    public usuario: string

    @Expose({ name: 'idUsuario' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    public idUsuario: string

    constructor(
        cit_fecha: string,
        cit_estadoCita: number,
        cit_medico: number,
        cit_datosUsuario: number,
        estado: string,
        medico_nombre: string,
        usuario_nombre: string,
        idUsuario:string
    ) {
        this.date = cit_fecha;
        this.id_estado = cit_estadoCita;
        this.id_medico = cit_medico;
        this.id_datos = cit_datosUsuario;
        this.estado = estado;
        this.medico = medico_nombre;
        this.usuario = usuario_nombre;
        this.idUsuario = idUsuario;
    }
}
export default CitasDTO;