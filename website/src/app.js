// ************ Require's ************

const express = require("express");
const path = require("path");
const app = express();

// ************ Require's Routes ************

const mainRouter = require("../routes/mainRouter");

// ************ Servidor ************

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

// ************ Acceso Publico ************

app.use(express.static(path.resolve(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public

// ************ Template Engine ************

app.set("views", path.resolve(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas
app.set("view engine", "ejs");

// ************ Routes ************

app.use(mainRouter);