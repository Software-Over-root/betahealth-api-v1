const productosSchema = require("../models/productos_proveedores");

//Agregar producto
exports.agregarProductoProveedores = async (req, res, next) => {
    const { id_categoria, nombre, descripcion, unidad_medida, precio, cantidad } = req.body;
    const nuevoProducto = productosSchema({
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
exports.obtenerProductoProveedores = async (req, res, next) => {
    productosSchema.find()
    .then( data =>{
        res.send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el producto", err});
    })
}

//Obtener productos
exports.obtenerProductosCategoriaProveedores = async (req, res, next) => {
    const {id} = req.params;
    productosSchema.find({"id_categoria": id})
    .then( data =>{
        res.send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el producto", err});
    })
}

//Obtener un producto 
exports.obtenerUnProductoProveedores = async (req, res, next)=>{
    const {id} = req.params;
    productosSchema.findById(id)
    .then (data =>{
        res.send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.send({success: false, message:"Producto no encontrado", err});
    });
}

//Eliminar producto 
exports.eliminarProductoProveedores = async (req, res, next)=>{
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
exports.actualizarProductoProveedores = async (req, res, next)=>{
    const {id} = req.params;
    const {id_categoria, nombre, descripcion, unidad_medida, precio, cantidad } = req.body
    productosSchema.updateMany({_id:id}, { $set:{
        id_categoria, 
        nombre, 
        descripcion, 
        unidad_medida, 
        precio, 
        cantidad
    }})
    .then(data =>{
        res.send({success:true , message:"Producto acutalizado correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro actualizar el producto", err})
    });
} 