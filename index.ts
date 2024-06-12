import 'dotenv/config';
import cors from 'cors';
import express, { json } from 'express';
import { photoRouter } from './routers/photo.router';

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('', photoRouter);

app.listen(Number(process.env.PORT), '0.0.0.0', () => {
	console.log('Listening on port http://localhost:3001');
});
