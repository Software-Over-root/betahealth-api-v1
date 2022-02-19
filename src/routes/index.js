const express = require("express");
const router = express.Router();

const users = require("../controllers/Users");
const almacen = require("../controllers/almacen");
const productos = require("../controllers/productos");
const categoria = require("../controllers/categoria");
const categoria_gastos = require("../controllers/categoria_gastos");
const sub_categoria_gastos = require("../controllers/sub_categoria_gastos");
const usuarios = require("../controllers/usuarios");
const campanias = require("../controllers/campanias");
const paquetes = require("../controllers/paquetes");

module.exports = function(){

    router.get('/', users.holaMundo);

    //campañas
    router.get('/campanias', campanias.obtenerCampanias);
    router.get('/campania/:id', campanias.obtenerCampania);
    router.put('/actualizar-campania/:id', campanias.actualizarCampaña);
    router.delete('/eliminar-campania/:id', campanias.eliminarCampania);
    router.post('/agregar-campania', campanias.agregarCampania);

    // almacenes
    router.get('/almacenes', almacen.obtenerAlmacenes);
    router.get('/almacen/:id', almacen.obtenerAlmacene);
    router.put('/actualizar-almacen/:id', almacen.actualizarAlmacen);
    router.delete('/eliminar-almacen/:id', almacen.eliminarAlmacen);
    router.post('/agregar-almacen', almacen.agregarAlmacen);

    // productos
    router.get('/productos', productos.obtenerProducto);
    router.get('/producto/:id', productos.obtenerUnProducto);
    router.put('/actualizar-producto/:id',productos.actualizarProducto);
    router.delete('/eliminar-producto/:id', productos.eliminarProducto);
    router.post('/agregar-productos', productos.agregarProducto);

    //categoria
    router.get('/categorias', categoria.obtenerCategorias);
    router.get('/categoria/:id', categoria.obtenerUnaCategoria);
    router.put('/actualizar-categoria/:id', categoria.actualizarCategoria);
    router.delete('/eliminar-categoria/:id', categoria.eliminarCategoria);
    router.post('/agregar-categoria', categoria.agregarCategoria);

    //categoria gastos
    router.get('/categorias-gastos', categoria_gastos.obtenerCatGastos);
    router.get('/categorias-gastos/:id', categoria_gastos.obtenerUnaCatGastos);
    router.put('/actualizar-categorias-gastos/:id', categoria_gastos.actualizarCatGastos);
    router.delete('/eliminar-categorias-gastos/:id', categoria_gastos.eliminarCatGastos);
    router.post('/agregar-categoria-gastos', categoria_gastos.agregarCatGastos);

    //sub categoria gastos
    router.get('/sub-categorias-gastos', sub_categoria_gastos.obtenerSubCatGas);
    router.get('/sub-categorias-gastos/:id', sub_categoria_gastos.obtenerUnaSubCatGas);
    router.put('/actualizar-sub-categorias-gastos/:id', sub_categoria_gastos.actualizarSubCatGas);
    router.delete('/eliminar-sub-categorias-gastos/:id', sub_categoria_gastos.eliminarSubCatGas);
    router.post('/agregar-sub-categoria-gastos', sub_categoria_gastos.agregarSubCatGas);

    //usuarios
    router.get('/usuarios', usuarios.obtenerUsuario);
    router.get('/usuario/:id', usuarios.obtenerUnUsuario);
    router.put('/actualizar-usuario/:id',usuarios.actualizarUsuario);
    router.delete('/eliminar-usuario/:id', usuarios.eliminarUsuario);
    router.post('/agregar-usuario', usuarios.agregarUsuario);

    //paquetes
    router.get('/paquetes', paquetes.obtenerPaquete);
    router.get('/paquete/:id', paquetes.obtenerUnPaquete);
    router.put('/actualizar-paquete/:id',paquetes.actualizarPaquete);
    router.delete('/eliminar-paquete/:id', paquetes.eliminarPaquete);
    router.post('/agregar-paquete', paquetes.agregarPaquete);




    return router;
}
