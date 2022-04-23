// NOTE: Estas son las conexiones de los productos globales con los proveedores y almacenes.
// Errores 6.0.0
const conexionProductoSchema = require("../models/conexion_producto");
const productosGlobalesSchema = require("../models/productos_globales");


//Obtener todas las conexiones de productos
exports.obtenerConexionesProductos = async (req, res, next)=>{
    conexionProductoSchema.find()
    .then(data => {
        res.status(200).send({success: true, message:"Los productos fueron encontrados", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro ningun producto", err, code:"6.0.0"});
    });
}

//Eliminar conexion producto
exports.eliminarConexionProductoProveedor = async (req, res, next) =>{
    const {id} = req.params;
    conexionProductoSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue desenlazada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro desenlazar la categoria", err, code:"6.1.0"});
    });
}

//Obtener conexion productos por ids
exports.obtenerConexionProductosIDs = async (req, res, next) => {
    conexionProductoSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"6.2.0"});
    })
}

//Obtener una conexion de producto global
exports.obtenerConexionProductoGlobal = async (req, res, next)=>{
    const {id} = req.params;
    conexionProductoSchema.findById(id)
    .then (data =>{
        res.status(200).send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"Producto no encontrado", err, code:"6.3.0"});
    });
}




// ------------ consultas proveedores
//Obtener todas las conexiones de productos de un proveedor
exports.obtenerConexionProductoProveedores = async (req, res, next)=>{
    const {id} = req.params;
    let id_productos = [];
    conexionProductoSchema.find({"id_proveedor": id})
    .then(data => {
        data.map(proveedor => {
            id_productos.push(proveedor.id_producto_global);
        })
        productosGlobalesSchema.find({
            '_id': { $in: id_productos}
        }, (err, docs) => {
            if (err) {
                res.status(400).send({success: false, message:"Error en encontrar los proveedores", err, code:"6.4.0"});
            } else {
                res.status(200).send({success: true, message:"Los porveedores fueron encontrados", data: docs});
            }
        })
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontraron proveedores", err, code:"6.4.1"});
    });
}

//Agregar conexion de producto a proveedor
exports.agregarConexionProductoProveedor = (req, res, next) => {
    const { id_producto_global, id_categoria_global, id_proveedor } = req.body;
    const nuevoProducto = conexionProductoSchema({ id_producto_global, id_categoria_global, id_proveedor });
    nuevoProducto.save()
    .then(data => {
        res.status(200).send({success: true, message:"El producto fue enlazada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro enlazar el producto", err, code:"6.5.0"});
    });
}



// ------------ consultas almacenes
//Agregar conexion de producto a almacen
exports.agregarConexionProductoAlmacen = (req, res, next) => {
    const { id_producto_global, id_categoria_global, id_almacen } = req.body;
    const nuevoProducto = conexionProductoSchema({ id_producto_global, id_categoria_global, id_almacen });
    nuevoProducto.save()
    .then(data => {
        res.status(200).send({success: true, message:"El producto fue enlazada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro enlazar el producto", err, code:"6.6.0"});
    });
}

//Obtener conexion de productos de almacen
exports.obtenerConexionProductosAlmacen = async (req, res, next) => {
    const {id} = req.params;
    conexionProductoSchema.find({"id_almacen": id})
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"6.7.0"});
    })
}

//Obtener conexion de productos globales por id de categoria global
exports.obtenerProductosGlobalesCategoria = async (req, res, next) => {
    const {id} = req.params;
    conexionProductoSchema.find({"id_categoria_global": id})
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"6.8.0"});
    })
}