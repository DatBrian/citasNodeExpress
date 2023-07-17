import { Expose, Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

class UsuarioInsertDTO {
    @Expose({ name: 'name' })
    @IsOptional()
    @IsString()
    public usu_nombre: string;

    @Expose({ name: 'secondName' })
    @IsOptional()
    @IsString()
    public usu_segdo_nombre: string;

    @Expose({ name: 'lastName' })
    @IsOptional()
    @IsString()
    public usu_primer_apellido_usuar: string;

    @Expose({ name: 'secondLastName' })
    @IsOptional()
    @IsString()
    public usu_segdo_apellido_usuar: string;

    @Expose({ name: 'phone' })
    @IsOptional()
    @IsString()
    public usu_telefono: string;

    @Expose({ name: 'address' })
    @IsOptional()
    @IsString()
    public usu_direccion: string;

    @Expose({ name: 'mail' })
    @IsOptional()
    @IsString()
    public usu_email: string;

    @Expose({ name: 'doc' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    public usu_tipodoc: number;

    @Expose({ name: 'genero' })
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    public usu_genero: number;

    @Expose({ name: 'acudiente' })
    @IsOptional()
    @Transform(({ value }) => {
        if (value === null || value === '') {
            return null;
        }
        return parseInt(value);
    })
    public usu_acudiente: number;

    constructor(
        name: string,
        secondName: string,
        lastName: string,
        secondLastName: string,
        phone: string,
        address: string,
        mail: string,
        doc: number,
        genero: number,
        acudiente: number,
    ) {
        this.usu_nombre = name;
        this.usu_segdo_nombre = secondName;
        this.usu_primer_apellido_usuar = lastName;
        this.usu_segdo_apellido_usuar = secondLastName;
        this.usu_telefono = phone;
        this.usu_direccion = address;
        this.usu_email = mail;
        this.usu_tipodoc = doc;
        this.usu_acudiente = genero;
        this.usu_genero = acudiente;
    }
}

export default UsuarioInsertDTO;