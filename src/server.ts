import express from "express";
import routes from './routes/index.routes';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
    console.log("Pojeto rodando");
});

export default app;
