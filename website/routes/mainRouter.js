// ************ Require's ************

const express = require("express");
const router = express.Router();
const main = require("../controllers/mainController");

// ************ Rutas ************

router.get("/", main.index);

module.exports = router;