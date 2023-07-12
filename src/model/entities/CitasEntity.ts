class CitasEntity {
    constructor(
        public codigo: number,
        public fecha: string,
        public estado: number,
        public medico: number,
        public datosUser: number
    ) { }
}

export default CitasEntity;