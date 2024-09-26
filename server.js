import express from "express";
import Approute from "./routes/app.routes.js";
import apiRoute from "./api/routes/projects.route.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(()=>{
        console.log("Db conectada correctamente")
        app.listen(PORT, () => console.log("Servidor funcionando"))
    })
    .catch((err)=>{
        console.log(`Ha ocurrido un error al conectar la base de datos: ${err}`)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoute)
app.use(Approute)