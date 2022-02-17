const express = require("express");
const router = express.Router();

const users = require("../controllers/Users");
const almacen = require("../controllers/almacen");
const productos = require("../controllers/productos");

module.exports = function(){

    router.get('/', users.holaMundo);

    // almacenes
    router.get('/almacenes', almacen.obtenerAlmacenes);
    router.get('/almacen/:id', almacen.obtenerAlmacene);
    router.put('/actualizar-almacen/:id', almacen.actualizarAlmacen);
    router.delete('/eliminar-almacen/:id', almacen.eliminarAlmacen);
    router.post('/agregar-almacen', almacen.agregarAlmacen);

    // productos
    router.post('/agregar-producto', productos.agregarProducto);


    return router;
}