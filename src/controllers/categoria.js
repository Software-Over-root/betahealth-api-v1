const categoriaSchema = require("../models/categoria");


//Agregar categoria
exports.agregarCategoria = (req, res, next) => {
    const {nombre} = req.body;
    const nuevaCategoria = categoriaSchema({nombre});
    nuevaCategoria.save()
    .then(data => {
        res.send({success: true, message:"La categoria fue agregada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar la categoria", err});
    });
}

//Obtener todas las categorias
exports.obtenerCategorias = async (req, res, next)=>{
    categoriaSchema.find()
    .then(data =>{
        res.send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro la categoria", err});
    });
}

//Obtener una categoria
exports.obtenerUnaCategoria = async (req, res, next)=>{
    const {id} = req.params;
    categoriaSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"Se encontro la categoria", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro la categoria", err});
    });
}

//Eliminar categoria
exports.eliminarCategoria = async (req, res, next) =>{
    const {id} = req.params;
    categoriaSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La categoria fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar la categoria", err});
    });
}

//Actualizar categoria
exports.actualizarCategoria = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre}= req.body;
    categoriaSchema.updateOne({_id:id}, {$set:{nombre}})
    .then(data =>{
        res.send({success:true , message:"Se actualizo la categoria correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar la categoria", err});
    });

}
