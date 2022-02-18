const express = require("express");
const router = express.Router();

const users = require("../controllers/Users");
const almacen = require("../controllers/almacen");
const productos = require("../controllers/productos");
const proveedores = require("../controllers/proveedor");
const gastos = require("../controllers/gastos");

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

    // proveedores
    router.get('/proveedores', proveedores.obtenerProveedores);
    router.get('/proveedor/:id', proveedores.obtenerProveedor);
    router.put('/actualizar-proveedor/:id', proveedores.actualizarProveedor);
    router.delete('/eliminar-proveedor/:id', proveedores.eliminarProveedor);
    router.post('/agregar-proveedor', proveedores.agregarProveedor);

    // gastos
    router.get('/gastos', gastos.obtenerGastos);
    router.get('/gasto/:id', gastos.obtenerGasto);
    router.put('/actualizar-gasto/:id', gastos.actualizarGasto);
    router.delete('/eliminar-gasto/:id', gastos.eliminarGasto);
    router.post('/agregar-gasto', gastos.agregarGasto);


    return router;
}