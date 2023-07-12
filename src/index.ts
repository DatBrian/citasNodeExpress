import App from './app';
import { citasRoutes } from './routes/CitasRoutes';

const app = new App([
    citasRoutes
]);

app.listen();