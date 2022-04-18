const productoSchema = require("../models/conexion_proveedor_producto");
const productosSchema = require("../models/productos_proveedores");


//Agregar producto
exports.agregarProductoProveedor = (req, res, next) => {
    const { id_producto, id_proveedor } = req.body;
    const nuevaCategoria = productoSchema({ id_producto, id_proveedor });
    nuevaCategoria.save()
    .then(data => {
        res.send({success: true, message:"El producto fue enlazada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro enlazar la categoria", err});
    });
}

//Obtener todos los productos
exports.obtenerProductos = async (req, res, next)=>{
    productoSchema.find()
    .then(data => {
        res.send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro la categoria", err});
    });
}

//Obtener todos los productos de un proveedor
exports.obtenerProductoProveedores = async (req, res, next)=>{
    const {id} = req.params;
    let id_productos = [];
    productoSchema.find({"id_proveedor": id})
    .then(data => {
        data.map(proveedor => {
            id_productos.push(proveedor.id_producto);
        })
        console.log(id_productos);
        productosSchema.find({
            '_id': { $in: id_productos}
        }, (err, docs) => {
            if (err) {
                res.send({success: false, message:"Error en encontrar los proveedores", err});
            } else {
                res.send({success: true, message:"Los porveedores fueron encontrados", data: docs});
            }
        })
    }).catch(err => {
        res.send({success: false, message:"No se encontraron proveedores", err});
    });
}


//Eliminar producto
exports.eliminarProductoProveedor = async (req, res, next) =>{
    const {id} = req.params;
    productoSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La categoria fue desenlazada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro desenlazar la categoria", err});
    });
}