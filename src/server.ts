import express from "express";
import { Request, Response } from 'express';
import routes from './routes/index.routes';

const app = express();

app.use(routes);

app.listen(3000, () => {
    console.log("Pojeto rodando");
});

export default app;
