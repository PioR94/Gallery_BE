import 'dotenv/config';
import cors from 'cors';
import express, {json} from "express";

const app = express();

app.use(
    cors({
        origin: process.env.BASE_URL,
    }),
);

app.use(json());

app.listen(Number(process.env.PORT), '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
});