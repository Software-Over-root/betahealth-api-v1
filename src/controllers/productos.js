const productosSchema = require("../models/productos");

//Agregar producto
exports.agregarProducto = async (req, res, next) => {
    const { id_categoria, nombre, descripcion, unidad_medida, precio, cantidad, id_almacen } = req.body;
    const nuevoProducto = productosSchema({ 
        id_almacen,
        id_categoria, 
        nombre, 
        descripcion, 
        unidad_medida, 
        precio, 
        cantidad 
    });
    await nuevoProducto.save()
    .then((data) => {
        res.send({success: true, message:"El producto fue agregado correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el producto", err});
    });
}

//Obtener productos
exports.obtenerProducto = async (req, res, next) => {
    productosSchema.find()
    .then( data =>{
        res.send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el producto", err});
    })
}

//Obtener productos por ids
exports.obtenerProductoIDs = async (req, res, next) => {
    productosSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data =>{
        res.send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el producto", err});
    })
}

//Obtener productos
exports.obtenerProductosCategoria = async (req, res, next) => {
    const {id} = req.params;
    productosSchema.find({"id_categoria": id})
    .then( data =>{
        res.send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el producto", err});
    })
}

//Obtener un producto 
exports.obtenerUnProducto = async (req, res, next)=>{
    const {id} = req.params;
    productosSchema.findById(id)
    .then (data =>{
        res.send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"Producto no encontrado", err});
    });
}

//Eliminar producto 
exports.eliminarProducto = async (req, res, next)=>{
    const {id} = req.params;
    productosSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"Producto eliminado correctamente", data});
    })
    .catch(err=>{
        res.send({success: true, message:"No se logro eliminar el producto", err});
    });
}

//actualizar producto
exports.actualizarProducto = async (req, res, next)=>{
    const {id} = req.params;
    const {id_categoria, nombre, descripcion, unidad_medida, precio, cantidad, id_almacen } = req.body
    productosSchema.updateMany({_id:id}, { $set:{
        id_categoria, 
        nombre, 
        descripcion, 
        unidad_medida, 
        precio, 
        cantidad, 
        id_almacen 
    }})
    .then(data =>{
        res.send({success:true , message:"Producto acutalizado correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro actualizar el producto", err})
    });
} 