import 'dotenv/config';
import express from "express";
import routes from './modules/common/routes/index.routes';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log("Projeto rodando");
});

export default app;
