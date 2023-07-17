import UsuarioDTO from "../model/dto/UsuarioDTO";
import UsuarioInsertDTO from "../model/dto/UsuarioInsert";
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
            const docVerified = await this.repository.verifyDoc(body.usu_tipodoc);
            const acudienteVerified = await this.repository.verifyAcudiente(body.usu_acudiente);
            return docVerified
                ? await this.repository.insertUsuario(body)
                : acudienteVerified
                    ? await this.repository.insertUsuario(body)
                    : 'Debe ingresar primero un acudiente';

        } catch (error) {
            throw error;
        }
    }
}
export default UsuarioService;
export const usuarioService = new UsuarioService();