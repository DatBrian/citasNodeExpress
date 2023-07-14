import { Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import 'reflect-metadata';

class MedicosDTO{
    @Expose({name: 'especialidad'})
    @IsString()
    @Type(()=> String)
    public especialidad: string;

    constructor(
        especialidad:string
    ) {
        this.especialidad = especialidad;
    }
}
export default MedicosDTO;