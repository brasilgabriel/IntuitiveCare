import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import getSanitzedConfig from "../config";
const app = express();

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

const rotasOperadoras = require('./routes/rotasOperadoras')

app.use('/operadoras', rotasOperadoras)

const DB_PASSWORD = encodeURIComponent(getSanitzedConfig.DB_PASSWORD);

mongoose
    .connect(`mongodb+srv://relatorio-cadop:${DB_PASSWORD}@cluster0.fo6n9.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectou!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))
