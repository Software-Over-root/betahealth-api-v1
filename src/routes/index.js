const express = require("express");
const router = express.Router();

const users = require("../controllers/Users");
const almacen = require("../controllers/almacen");
const productos = require("../controllers/productos");
const proveedores = require("../controllers/proveedor");
const gastos = require("../controllers/gastos");
const categoria = require("../controllers/categoria");
const categoria_gastos = require("../controllers/categoria_gastos");
const sub_categoria_gastos = require("../controllers/sub_categoria_gastos");
const usuarios = require("../controllers/usuarios");
const campanias = require("../controllers/campanias");
const paquetes = require("../controllers/paquetes");
const pacientes = require("../controllers/pacientes");
const ventas = require("../controllers/ventas");
const lotes = require("../controllers/lotes");
const ordenes = require("../controllers/ordenes_proveedor");
const archivos = require("../controllers/archivos");
const carpetas = require("../controllers/carpetas");
const pedidos = require("../controllers/pedidos");

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
    router.get('/productos-categoria/:id', productos.obtenerProductosCategoria);
    router.get('/producto/:id', productos.obtenerUnProducto);
    router.put('/actualizar-producto/:id',productos.actualizarProducto);
    router.delete('/eliminar-producto/:id', productos.eliminarProducto);
    router.post('/agregar-productos', productos.agregarProducto);

    //categoria
    router.get('/categorias', categoria.obtenerCategorias);
    router.get('/categorias-almacen/:id', categoria.obtenerConAlmacenes);
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

    //pacientes
    router.get('/pacientes', pacientes.obtenerPacientes);
    router.get('/paciente/:id', pacientes.obtenerPaciente);
    router.put('/actualizar-paciente/:id',pacientes.actualizarPaciente);
    router.delete('/eliminar-paciente/:id', pacientes.eliminarPaciente);
    router.post('/agregar-paciente', pacientes.agregarPaciente);

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

    // ventas
    router.get('/ventas', ventas.obtenerVentas);
    router.get('/venta/:id', ventas.obtenerVenta);
    router.put('/actualizar-venta/:id', ventas.actualizarVenta);
    router.delete('/eliminar-venta/:id', ventas.eliminarVenta);
    router.post('/agregar-venta', ventas.agregarVenta);

    // lotes
    router.get('/lotes', lotes.obtenerLotes);
    router.get('/lote/:id', lotes.obtenerLote);
    router.put('/actualizar-lote/:id', lotes.actualizarLote);
    router.delete('/eliminar-lote/:id', lotes.eliminarLote);
    router.post('/agregar-lote', lotes.agregarLote);

    // ordenes proveedor
    router.get('/ordenes', ordenes.obtenerOrdenes);
    router.get('/orden/:id', ordenes.obtenerOrden);
    router.put('/actualizar-orden/:id', ordenes.actualizarOrden);
    router.delete('/eliminar-orden/:id', ordenes.eliminarOrden);
    router.post('/agregar-orden', ordenes.agregarOrden);

    // archivos
    router.get('/archivos', archivos.obtenerArchivos);
    router.get('/archivo/:id', archivos.obtenerArchivo);
    router.put('/actualizar-archivo/:id', archivos.actualizarArchivo);
    router.delete('/eliminar-archivo/:id', archivos.eliminarArchivo);
    router.post('/agregar-archivo', archivos.agregarArchivo);

    // carpetas
    router.get('/carpetas', carpetas.obtenerCarpetas);
    router.get('/carpeta/:id', carpetas.obtenerCarpeta);
    router.put('/actualizar-carpeta/:id', carpetas.actualizarCarpeta);
    router.delete('/eliminar-carpeta/:id', carpetas.eliminarCarpeta);
    router.post('/agregar-carpeta', carpetas.agregarCarpeta);

    // pedidos
    router.get('/pedidos', pedidos.obtenerPedidos);
    router.get('/pedido/:id', pedidos.obtenerPedido);
    router.put('/actualizar-pedido/:id', pedidos.actualizarPedido);
    router.delete('/eliminar-pedido/:id', pedidos.eliminarPedido);
    router.post('/agregar-pedido', pedidos.agregarPedido);

    return router;
}
