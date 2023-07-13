import UsuarioEntity from "../model/entities/UsuarioEntity";
import UsuarioRepository, { usuarioRepository } from "../repositories/UsuarioRepository";

class UsuarioService{
    private repository: UsuarioRepository;

    constructor() {
        this.repository = usuarioRepository;
    }

    public async getUsuarios(): Promise<UsuarioEntity[]>{
        try {
            const usuarios = await this.repository.getUsuarios();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }
}
export default UsuarioService;
export const usuarioService = new UsuarioService();