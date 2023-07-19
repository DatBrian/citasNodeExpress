class UsuarioEntity {
    constructor(
        public name: string,
        public secondName: string,
        public lastName: string,
        public secondLastName: string,
        public phone: string,//* formato de teléfonos con prefijo
        public address: string,
        public mail: string, //*Email
        public doc: number,
        public genero: number,
        public acudiente: number
    ) { }
}

export default UsuarioEntity;