import App from './app';
import { citasRoutes } from './routes/CitasRoutes';
import { medicosRoutes } from './routes/MedicoRoutes';
import { usuarioRoutes } from './routes/UsuarioRoutes';

const app = new App([
    citasRoutes,
    usuarioRoutes,
    medicosRoutes
]);

app.listen();