const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// middelwares:
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asignar puerto dinámicamente por la máquina que ejecute el script
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});
