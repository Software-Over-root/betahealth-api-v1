const express = require("express");
const router = express.Router();

const users = require("../controllers/Users");
const almacen = require("../controllers/almacen");

module.exports = function(){

    router.get('/', users.holaMundo);

    router.get('/almacenes', almacen.obtenerAlmacenes);
    router.post('/agregar-almacen', almacen.agregarAlmacen);


    return router;
}