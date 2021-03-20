import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import router from "./routes/index";

// Conexión a la bbdd:
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/dbmedia";
mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((mongoose) => console.log("Conectando a la BBDD en el puerto 27017"))
  .catch(console.log((err) => console.log(err)));

const app = express();

// middelwares:
app.use(morgan("dev"));
app.use(cors());
// middelware incorporados en express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use("/api", router);

// Esta ruta permite saber dónde está la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Asignar puerto dinámicamente por la máquina que ejecute el script
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});
