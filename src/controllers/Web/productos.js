const productosSchema = require("../../models/Web/productos");


//Agregar contacto
exports.agregarProducto = (req, res, next) => {
    const {tipo, descripcion_breve, titulo, imagen, descripcion_completa, titulo_secundario} = req.body;
    const nuevaUbicacion = productosSchema({tipo, descripcion_breve, titulo, imagen, descripcion_completa, titulo_secundario});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El producto fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el producto", err, code:"28.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerProductos = async (req, res, next)=>{
    productosSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El producto fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el producto", err, code:"28.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnProducto = async (req, res, next)=>{
    const {id} = req.params;
    productosSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El producto fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el producto", err, code:"28.2.0"});
    });
}

//Eliminar contacto
exports.eliminarProducto = async (req, res, next) =>{
    const {id} = req.params;
    productosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El producto fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el producto", err, code:"28.3.0"});
    });
}

//Actualizar contactos
exports.actualizarProducto = async (req, res, next) =>{
    const {id} = req.params;
    const {tipo, descripcion_breve, titulo, imagen, descripcion_completa, titulo_secundario}= req.body;
    productosSchema.updateOne({_id:id}, {$set:{tipo, descripcion_breve, titulo, imagen, descripcion_completa, titulo_secundario}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el producto correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el producto", err, code:"28.4.0"});
    });

}
