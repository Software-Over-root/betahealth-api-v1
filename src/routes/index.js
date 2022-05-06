// IDEA: Pedisdos es lo mismo que requisiciones, no se usa este controlador
// TODO: Controlador y Modal de vitacora del cliente
// TODO: Accesos a los archivos que sea restringido
const express = require("express");
const router = express.Router();


//      
// administrador general
const usuarios = require("../controllers/usuarios"); //(errores 1.0.0)

// almacen general y secundario
const almacen = require("../controllers/almacen"); //(errores 2.0.0)
const productos_externos = require("../controllers/productos_externos"); //(errores 3.0.0)
const productos_globales = require("../controllers/productos_globales"); //(errores 4.0.0)
const conexion_categoria = require("../controllers/conexion_categoria"); //(errores 5.0.0)
const conexion_producto = require("../controllers/conexion_producto"); //(errores 6.0.0)
const proveedores = require("../controllers/proveedor"); //(errores 7.0.0)
const categorias_externas = require("../controllers/categorias_externas"); //(errores 8.0.0)
const categoria_globales = require("../controllers/categoria_globales"); //(errores 10.0.0)
const campanias = require("../controllers/campanias"); //(errores 11.0.0)
const paquetes = require("../controllers/paquetes"); //(errores 12.0.0)
const lotes = require("../controllers/lotes"); //(errores 13.0.0)
const requisiciones_proveedor = require("../controllers/requisiciones_proveedor"); //(errores 14.0.0)
const pedidos = require("../controllers/pedidos"); // IDEA: no se usa

// finanzas
const categoria_gastos = require("../controllers/categoria_gastos"); //(errores 9.0.0)
const sub_categoria_gastos = require("../controllers/sub_categoria_gastos"); //(errores 16.0.0)
const gastos = require("../controllers/gastos"); //(errores 17.0.0)
    // Estatus de las ventas (historial, aprobadas, pendientes, canceladas)
    // Estatus de requisiciones (pabrobacion, pendientes, canceladas)
    // proveedores (pago a proveedores, estatus de los pedidos a proveedores)

// logistica
    // ventas (estado del envio de la venta )
    // campañas (estado del envio de la campaña)
    // lotes (seguimiento)
    
// auxiliar
const pacientes = require("../controllers/pacientes"); //(errores 15.0.0)
    // Estatus de las ventas (historial, aprobadas, pendientes, canceladas)
    // vitacora (graficas de pacientes).
    // campañas (creacion de campañas para solicitar)
    // ventas (creacion de ventas, estados de las ventas)
    // productcos, categorias, proveedores, lotes (cotizacion y creacion de ventas) 
  

// ventas
const ventas = require("../controllers/ventas"); //(errores 18.0.0)
    // pacientes (registro de pacientes)
    // campañas (creacion de campañas para solicitar)
    // productcos, categorias, proveedores, lotes (cotizacion y creacion de ventas) 

// area medica
    // pacientes (visualizacion, creacion).
    // vitacora (graficas de pacientes).


// todos pueden ver arcivos y usuarios
const carpetas = require("../controllers/carpetas"); //(errores 19.0.0)
const archivos = require("../controllers/archivos"); //(errores 20.0.0)
const users = require("../controllers/Users"); //IDEA: solo se usa para el inicio



// inicio de controladores pagina web
const ubicaciones = require("../controllers/Web/ubicaciones"); //(errores 21.0.0)
const contactos = require("../controllers/Web/contacto"); //(errores 22.0.0)

module.exports = function(){
    // inicio de rutas pagina web
    // ubicaciones
    router.get('/ubicaciones', ubicaciones.obtenerUbicaciones);
    router.get('/ubicacion/:id', ubicaciones.obtenerUnaUbicacion);
    router.put('/actualizar-ubicacion/:id',ubicaciones.actualizarUbicacion);
    router.delete('/eliminar-ubicacion/:id', ubicaciones.eliminarUbicacion);
    router.post('/agregar-ubicacion', ubicaciones.agregarUbicacion);

    // contacto
    router.get('/contactos', contactos.obtenerContactos);
    router.get('/contacto/:id', contactos.obtenerUnContacto);
    router.put('/actualizar-contacto/:id',contactos.actualizarContacto);
    router.delete('/eliminar-contacto/:id', contactos.eliminarContacto);
    router.post('/agregar-contacto', contactos.agregarContacto);


    router.get('/', users.holaMundo);

    //usuarios
    router.get('/usuarios', usuarios.obtenerUsuario);
    router.get('/usuario/:id', usuarios.obtenerUnUsuario);
    router.put('/actualizar-usuario/:id',usuarios.actualizarUsuario);
    router.delete('/eliminar-usuario/:id', usuarios.eliminarUsuario);
    router.post('/agregar-usuario', usuarios.agregarUsuario);

    // almacenes
    router.get('/almacenes', almacen.obtenerAlmacenes);
    router.get('/almacen/:id', almacen.obtenerAlmacene);
    router.put('/actualizar-almacen/:id', almacen.actualizarAlmacen);
    router.delete('/eliminar-almacen/:id', almacen.eliminarAlmacen);
    router.post('/agregar-almacen', almacen.agregarAlmacen);

    //categorias externas (para almacenes foraneso solamente)
    router.get('/categorias-externas', categorias_externas.obtenerCategoriasExternas);
    router.get('/categorias-almacen-externas/:id', categorias_externas.obtenerConAlmacenes);
    router.get('/categoria-externa/:id', categorias_externas.obtenerUnaCategoriaExterna);
    router.put('/actualizar-categoria-externa/:id', categorias_externas.actualizarCategoriaExterna);
    router.delete('/eliminar-categoria-externa/:id', categorias_externas.eliminarCategoriaExterna);
    router.post('/agregar-categoria-externa', categorias_externas.agregarCategoriaExterna);

    // productos externos (para almacenes foraneos solamente)
    router.get('/productos-externos', productos_externos.obtenerProductosExterno);
    router.post('/productos-externos-id', productos_externos.obtenerProductosExternosIDs);
    router.get('/productos-externos-categoria/:id', productos_externos.obtenerProductosExternosCategoria);
    router.get('/producto-externo/:id', productos_externos.obtenerUnProductoExterno);
    router.put('/actualizar-producto-externo/:id',productos_externos.actualizarProductoExterno);
    router.delete('/eliminar-producto-externo/:id', productos_externos.eliminarProductoExterno);
    router.post('/agregar-producto-externo', productos_externos.agregarProductoExterno);

    //categoria globales
    router.get('/categorias-globales', categoria_globales.obtenerCategoriasGlobales);
    router.get('/categoria-global/:id', categoria_globales.obtenerCategoriaGlobal);
    router.delete('/eliminar-categorias-global/:id', categoria_globales.eliminarCategoriaGlobal);
    router.post('/agregar-categoria-global', categoria_globales.agregarCategoriaGlobal);

    // productos globales
    router.get('/productos-globales', productos_globales.obtenerProductosGlobales);
    router.post('/productos-globales-id', productos_globales.obtenerProductosGlobalesIDs);
    router.get('/productos-globales-categoria/:id', productos_globales.obtenerProductosGlobalesCategoria);
    router.get('/producto-global/:id', productos_globales.obtenerUnProductoGlobal);
    router.put('/actualizar-producto-global/:id',productos_globales.actualizarProductoGlobal);
    router.delete('/eliminar-producto-global/:id', productos_globales.eliminarProductoGlobal);
    router.post('/agregar-producto-global', productos_globales.agregarProductoGlobal);

    //conexion categoria (con proveedores y almacenes)
    router.get('/categorias-conexion', conexion_categoria.obtenerConexionCategorias);
    router.delete('/eliminar-categorias-conexion/:id', conexion_categoria.eliminarCategoriaConexion);
        // conexion categoria proveedores
        router.post('/agregar-categoria-conexion-proveedor', conexion_categoria.agregarCategoriaConexionProveedor);
        router.get('/categorias-conexion-provedores/:id', conexion_categoria.obtenerProveedoresCategoriaConexion);
        router.get('/provedores-categorias-conexion/:id', conexion_categoria.obtenerCategoriasProveedorConexion);
        // conexion categoria almacen
        router.post('/agregar-categoria-conexion-almacen', conexion_categoria.agregarConexionCategoriaAlmacen);
        router.get('/categorias-conexion-almacenes/:id', 
            conexion_categoria.obtenerConexionCategoriasAlmacen, 
            categoria_globales.obtenerCategoriasGlobalesIDs
        );
        router.get('/categoria-conexion-almacen/:id', conexion_categoria.obtenerConexionCategoriaAlmacen);

    //conexion productos con proveedores
    router.get('/productos-conexion', conexion_producto.obtenerConexionesProductos);
    router.delete('/eliminar-producto-conexion/:id', conexion_producto.eliminarConexionProductoProveedor);
    router.post('/conexion-productos-id', conexion_producto.obtenerConexionProductosIDs);
    router.get('/conexion-producto/:id', conexion_producto.obtenerConexionProductoGlobal);
        // conexion producto proveedor
        router.get('/productos-conexion-proveedor/:id', conexion_producto.obtenerConexionProductoProveedores);
        router.post('/agregar-producto-conexion-proveedor', conexion_producto.agregarConexionProductoProveedor);
        // conexion producto almacen
        router.post('/agregar-producto-conexion-almacen', conexion_producto.agregarConexionProductoAlmacen);
        router.get('/productos-conexion-almacen/:id', conexion_producto.obtenerConexionProductosAlmacen);
        router.get('/conexion-productos-categoria/:id', conexion_producto.obtenerProductosGlobalesCategoria);
    
    // proveedores
    router.get('/proveedores', proveedores.obtenerProveedores);
    router.post('/proveedores-ids', proveedores.obtenerProveedoresPorId);
    router.get('/proveedor/:id', proveedores.obtenerProveedor);
    router.put('/actualizar-proveedor/:id', proveedores.actualizarProveedor);
    router.delete('/eliminar-proveedor/:id', proveedores.eliminarProveedor);
    router.post('/agregar-proveedor', proveedores.agregarProveedor);

    // lotes
    router.get('/lotes', lotes.obtenerLotes);
    router.get('/lote/:id', lotes.obtenerLote);
    router.get('/lote-almacen/:id_almacen/:id_producto', lotes.obtenerLotesPorAlmacenProducto);
    router.put('/actualizar-lote/:id', lotes.actualizarLote);
    router.delete('/eliminar-lote/:id', lotes.eliminarLote);
    router.post('/agregar-lote', lotes.agregarLote);
    router.post('/agregar-multiples-lotes', lotes.agregarMultiplesLotes);

    // requisiciones a proveedor
    router.get('/requisiciones', requisiciones_proveedor.obtenerRequisiciones);
    router.get('/requisiciones-estatus/:estatus', requisiciones_proveedor.obtenerRequisicionesPorEstatus);
    router.get('/requisicion/:id', requisiciones_proveedor.obtenerRequisicion);
    router.put('/actualizar-requisicion/:id', requisiciones_proveedor.actualizarRequisicion);
    router.delete('/eliminar-requisicion/:id', requisiciones_proveedor.eliminarRequisicion);
    router.post('/agregar-requisicion', requisiciones_proveedor.agregarRequisicion);

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

    // gastos
    router.get('/gastos', gastos.obtenerGastos);
    router.get('/gasto/:id', gastos.obtenerGasto);
    router.put('/actualizar-gasto/:id', gastos.actualizarGasto);
    router.delete('/eliminar-gasto/:id', gastos.eliminarGasto);
    router.post('/agregar-gasto', gastos.agregarGasto);

    //paquetes
    router.get('/paquetes', paquetes.obtenerPaquete);
    router.get('/paquete/:id', paquetes.obtenerUnPaquete);
    router.put('/actualizar-paquete/:id',paquetes.actualizarPaquete);
    router.delete('/eliminar-paquete/:id', paquetes.eliminarPaquete);
    router.post('/agregar-paquete', paquetes.agregarPaquete);

    //campañas
    router.get('/campanias', campanias.obtenerCampanias);
    router.get('/campania/:id', campanias.obtenerCampania);
    router.put('/actualizar-campania/:id', campanias.actualizarCampaña);
    router.delete('/eliminar-campania/:id', campanias.eliminarCampania);
    router.post('/agregar-campania', campanias.agregarCampania);

    //pacientes
    router.get('/pacientes', pacientes.obtenerPacientes);
    router.get('/paciente/:id', pacientes.obtenerPaciente);
    router.put('/actualizar-paciente/:id',pacientes.actualizarPaciente);
    router.delete('/eliminar-paciente/:id', pacientes.eliminarPaciente);
    router.post('/agregar-paciente', pacientes.agregarPaciente);

    // ventas
    router.get('/ventas', ventas.obtenerVentas);
    router.get('/venta/:id', ventas.obtenerVenta);
    router.put('/actualizar-venta/:id', ventas.actualizarVenta);
    router.delete('/eliminar-venta/:id', ventas.eliminarVenta);
    router.post('/agregar-venta', ventas.agregarVenta);

    // carpetas
    router.get('/carpetas', carpetas.obtenerCarpetas);
    router.get('/carpeta/:id', carpetas.obtenerCarpeta);
    router.put('/actualizar-carpeta/:id', carpetas.actualizarCarpeta);
    router.delete('/eliminar-carpeta/:id', carpetas.eliminarCarpeta);
    router.post('/agregar-carpeta', carpetas.agregarCarpeta);
    
    // archivos
    router.get('/archivos', archivos.obtenerArchivos);
    router.get('/archivo/:id', archivos.obtenerArchivo);
    router.put('/actualizar-archivo/:id', archivos.actualizarArchivo);
    router.delete('/eliminar-archivo/:id', archivos.eliminarArchivo);
    router.post('/agregar-archivo', archivos.agregarArchivo);





    // pedidos
    // router.get('/pedidos', pedidos.obtenerPedidos);
    // router.get('/pedido/:id', pedidos.obtenerPedido);
    // router.put('/actualizar-pedido/:id', pedidos.actualizarPedido);
    // router.delete('/eliminar-pedido/:id', pedidos.eliminarPedido);
    // router.post('/agregar-pedido', pedidos.agregarPedido);

    return router;
}
