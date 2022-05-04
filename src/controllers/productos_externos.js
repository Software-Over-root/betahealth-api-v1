// NOTE: Estos son los productos externos que se encuentran solo en los almacenes foraneos.
// Errores 3.0.0
const productosExternosSchema = require("../models/productos_externos");

//Agregar producto externo
exports.agregarProductoExterno = async (req, res, next) => {
    const { id_categoria_externa, nombre, descripcion, unidad_medida, id_almacen } = req.body;
    const nuevoProducto = productosExternosSchema({ 
        id_almacen,
        id_categoria_externa, 
        nombre, 
        descripcion, 
        unidad_medida 
    });
    await nuevoProducto.save()
    .then((data) => {
        res.status(200).send({success: true, message:"El producto fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el producto", err, code:"3.0.0"});
    });
}

//Obtener productos externos
exports.obtenerProductosExterno = async (req, res, next) => {
    productosExternosSchema.find()
    .then( data => {
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"3.1.0"});
    })
}

//Obtener productos externos por ids
exports.obtenerProductosExternosIDs = async (req, res, next) => {
    productosExternosSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"3.2.0"});
    })
}

//Obtener productos externos por id de categoria externa
exports.obtenerProductosExternosCategoria = async (req, res, next) => {
    const {id} = req.params;
    productosExternosSchema.find({"id_categoria_externa": id})
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});

    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"3.3.0"});
    })

}

//Obtener un producto externo
exports.obtenerUnProductoExterno = async (req, res, next)=>{
    const {id} = req.params;
    productosExternosSchema.findById(id)
    .then (data =>{
        res.status(200).send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"Producto no encontrado", err, code:"3.4.0"});
    });
}

//Eliminar producto 
exports.eliminarProductoExterno = async (req, res, next)=>{
    const {id} = req.params;
    productosExternosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"Producto eliminado correctamente", data});
    })
    .catch(err=>{
        res.status(400).send({success: true, message:"No se logro eliminar el producto", err, code:"3.5.0"});
    });
}

//actualizar producto
exports.actualizarProductoExterno = async (req, res, next)=>{
    const {id} = req.params;
    const {id_categoria_externa, nombre, descripcion, unidad_medida, id_almacen } = req.body
    productosExternosSchema.updateMany({_id:id}, { $set:{
        id_categoria_externa, 
        nombre, 
        descripcion, 
        unidad_medida,
        id_almacen 
    }})
    .then(data =>{
        res.status(200).send({success:true , message:"Producto acutalizado correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro actualizar el producto", err, code:"3.6.0"})
    });
} 