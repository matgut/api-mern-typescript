import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors'

import videosRoutes from './routes/videoRoute';

const app = express();

app.set('port', config.port);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/videos', videosRoutes);

export default app;