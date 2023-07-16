import { Expose } from "class-transformer";
import { IsInt, IsString } from "class-validator";

class CitasDTO {
    @Expose({ name: 'cit_fecha' })
    @IsString()
    public date: string;

    @Expose({ name: 'cit_estadoCita' })
    @IsInt()
    public id_estado: number;

    @Expose({ name: 'cit_medico' })
    @IsInt()
    public id_medico: number;

    @Expose({ name: 'cit_datosUsuario' })
    @IsInt()
    public id_datos: number;

    @Expose({ name: 'estado' })
    @IsString()
    public estado: string

    @Expose({ name: 'medico_nombre' })
    @IsString()
    public medico: string

    @Expose({ name: 'usuario_nombre' })
    @IsString()
    public usuario: string

    constructor(
        cit_fecha: string,
        cit_estadoCita: number,
        cit_medico: number,
        cit_datosUsuario: number,
        estado: string,
        medico_nombre: string,
        usuario_nombre: string
    ) {
        this.date = cit_fecha;
        this.id_estado = cit_estadoCita;
        this.id_medico = cit_medico;
        this.id_datos = cit_datosUsuario;
        this.estado = estado;
        this.medico = medico_nombre;
        this.usuario = usuario_nombre;
    }
}
export default CitasDTO;