import App from './app';
import { citasRoutes } from './routes/CitasRoutes';
import { usuarioRoutes } from './routes/UsuarioRoutes';

const app = new App([
    citasRoutes,
    usuarioRoutes
]);

app.listen();