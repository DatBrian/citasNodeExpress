import { Expose, Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";
import 'reflect-metadata';

class MedicosDTO{

    @Expose({ name: 'med_nroMatriculaProsional' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    public matricula: number

    @Expose({ name: 'med_nombreCompleto' })
    @IsOptional()
    @IsString()
    public nombre: string;

    @Expose({ name: 'med_consultorio' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    public id_consultorio: number

    @Expose({ name: 'med_especialidad' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    public id_especialidad: number

    @Expose({ name: 'nombre_consultorio' })
    @IsOptional()
    @IsString()
    public nombre_consultorio: string;

    @Expose({ name: 'nombre_especialidad' })
    @IsOptional()
    @IsString()
    public nombre_especialidad: string;

    @Expose({ name: 'especialidad' })
    @IsOptional()
    @IsString()
    public especialidad: string;

    constructor(
        med_nroMatriculaProsional: number,
        med_nombreCompleto: string,
        med_consultorio: number,
        med_especialidad: number,
        nombre_consultorio: string,
        nombre_especialidad: string,
        especialidad:string
    ) {
        this.matricula = med_nroMatriculaProsional;
        this.nombre = med_nombreCompleto;
        this.id_consultorio = med_consultorio;
        this.id_especialidad = med_especialidad;
        this.nombre_consultorio = nombre_consultorio;
        this.nombre_especialidad = nombre_especialidad;
        this.especialidad = especialidad;
    }
}
export default MedicosDTO;