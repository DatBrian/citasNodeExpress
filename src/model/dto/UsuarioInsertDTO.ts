import { Expose, Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

class UsuarioInsertDTO {
    @Expose({ name: 'name' })
    @IsOptional()
    @Transform(({ value }) => (/^[A-Za-z]+$/.test(value) || typeof value === "undefined") ? value :
        { status: 400, message: "Error en el ingreso del nombre, utilice solo letras sin espacios" },
        { toClassOnly: true })
    @IsString()
    public usu_nombre: string;

    @Expose({ name: 'secondName' })
    @IsOptional()
    @Transform(({ value }) => (/^[A-Za-z]+$/.test(value) || typeof value === "undefined") ? value :
        { status: 400, message: "Error en el ingreso del segundo nombre, utilice solo letras sin espacios" },
        { toClassOnly: true })
    @IsString()
    public usu_segdo_nombre: string;

    @Expose({ name: 'lastName' })
    @IsOptional()
    @Transform(({ value }) => (/^[A-Za-z]+$/.test(value) || typeof value === "undefined") ? value :
        { status: 400, message: "Error en el ingreso del apellido, utilice solo letras sin espacios" },
        { toClassOnly: true })
    @IsString()
    public usu_primer_apellido_usuar: string;

    @Expose({ name: 'secondLastName' })
    @IsOptional()
    @Transform(({ value }) => (/^[A-Za-z]+$/.test(value) || typeof value === "undefined") ? value :
        { status: 400, message: "Error en el ingreso del segundo apellido, ingrese solo letras sin espacios" },
        { toClassOnly: true })
    @IsString()
    public usu_segdo_apellido_usuar: string;

    @Expose({ name: 'phone' })
    @IsOptional()
    @Transform(({ value }) => (/^(?:\+\d{1,3}\s?)?\d{10}$/.test(value) || typeof value === "undefined") ? value :
        { status: 400, message: "Error en el ingreso del número de teléfono. El formato válido es de 10 dígitos numéricos con un prefijo opcional en formato '+XXX'." },
        { toClassOnly: true })
    @IsString()
    public usu_telefono: string;

    @Expose({ name: 'address' })
    @IsOptional()
    @IsString()
    public usu_direccion: string;

    @Expose({ name: 'mail' })
    @IsOptional()
    @Transform(({ value }) => (/\S+@\S+\.\S+/.test(value) || typeof value === "undefined") ? value :
        (() => { throw new Error("El parámetro email proporcionado no es un parámetro válido, ingrese un número entero >:("); })(),
        { toClassOnly: true })
    @IsString()
    public usu_email: string;

    @Expose({ name: 'doc' })
    @IsOptional()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value) || typeof value === "undefined"
            ? value
            : (() => { throw new Error("El parámetro doc proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public usu_tipodoc: number;

    @Expose({ name: 'genero' })
    @IsOptional()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value) || typeof value === "undefined"
            ? value
            : (() => { throw new Error("El id de género proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public usu_genero: number;

    @Expose({ name: 'acudiente' })
    @IsOptional()
    @Transform(({ value }) =>
        value === null || value === '' || value === undefined
            ? null
            : /^[0-9]+$/.test(value) || typeof value === 'undefined'
                ? parseInt(value)
                : (() => {
                    throw new Error(
                        'El id de acudiente proporcionado no es un parámetro válido, ingrese un número entero >:('
                    );
                })()
    )
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