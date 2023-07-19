import UsuarioDTO from "../model/dto/UsuarioDTO";
import UsuarioInsertDTO from "../model/dto/UsuarioInsertDTO";
import UsuarioRepository, { usuarioRepository } from "../repositories/UsuarioRepository";

class UsuarioService {
    private repository: UsuarioRepository;

    constructor() {
        this.repository = usuarioRepository;
    }

    public async getUsuarios(): Promise<UsuarioDTO[]> {
        try {
            const usuarios = await this.repository.getUsuarios();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    public async insertUsuario(body: UsuarioInsertDTO): Promise<string> {
        try {
            const isAdult = await this.repository.verifyDoc(body.usu_tipodoc);
            return isAdult
                ? (await this.repository.insertUsuario(body))
                : (await this.repository.verifyAcudiente(body.usu_acudiente))
                    ? await this.repository.insertUsuario(body)
                    : 'Debe ingresar primero un acudiente';
        } catch (error) {
            throw error;
        }
    }

}
export default UsuarioService;
export const usuarioService = new UsuarioService();