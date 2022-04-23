// NOTE: Estos son los productos globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estos productos.
// Errores 4.0.0
const productosGlobalesSchema = require("../models/productos_globales");

//Agregar producto global
exports.agregarProductoGlobal = async (req, res, next) => {
    const { id_categoria_global, nombre, descripcion, unidad_medida } = req.body;
    const nuevoProducto = productosGlobalesSchema({
        id_categoria_global, 
        nombre, 
        descripcion, 
        unidad_medida
    });
    await nuevoProducto.save()
    .then((data) => {
        res.status(200).send({success: true, message:"El producto fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el producto", err, code:"4.0.0"});
    });
}

//Obtener productos globales
exports.obtenerProductosGlobales = async (req, res, next) => {
    productosGlobalesSchema.find()
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.1.0"});
    })
}

//Obtener productos globales por categoria global
exports.obtenerProductosGlobalesCategoria = async (req, res, next) => {
    const {id} = req.params;
    productosGlobalesSchema.find({"id_categoria_global": id})
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.2.0"});
    })
}

//Obtener productos globales por ids
exports.obtenerProductosGlobalesIDs = async (req, res, next) => {
    productosGlobalesSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.3.0"});
    })
}

//Obtener un producto global
exports.obtenerUnProductoGlobal = async (req, res, next)=>{
    const {id} = req.params;
    productosGlobalesSchema.findById(id)
    .then (data =>{
        res.status(200).send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"Producto no encontrado", err, code:"4.4.0"});
    });
}

//Eliminar producto global
exports.eliminarProductoGlobal = async (req, res, next)=>{
    const {id} = req.params;
    productosGlobalesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"Producto eliminado correctamente", data});
    })
    .catch(err=>{
        res.status(400).send({success: true, message:"No se logro eliminar el producto", err, code:"4.5.0"});
    });
}

//actualizar producto global
exports.actualizarProductoGlobal = async (req, res, next)=>{
    const {id} = req.params;
    const {id_categoria_global, nombre, descripcion, unidad_medida } = req.body
    productosGlobalesSchema.updateMany({_id:id}, { $set:{
        id_categoria_global, 
        nombre, 
        descripcion, 
        unidad_medida
    }})
    .then(data =>{
        res.status(200).send({success:true , message:"Producto acutalizado correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro actualizar el producto", err, code:"4.6.0"})
    });
} 