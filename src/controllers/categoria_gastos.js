const catGastosSchema = require("../models/categoria_gastos");


//Agregar categoria
exports.agregarCatGastos = (req, res, next) => {
    const {nombre} = req.body;
    const nuevaCategoriaG = catGastosSchema({nombre});
    nuevaCategoriaG.save()
    .then(data => {
        res.send({success: true, message:"La categoria gastos fue agregada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar la categoria gastos", err});
    });
}

//Obtener todas las categorias
exports.obtenerCatGastos = async (req, res, next)=>{
    catGastosSchema.find()
    .then(data =>{
        res.send({success: true, message:"La categoria gastos fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro la categoria gastos", err});
    });
}

//Obtener una categoria
exports.obtenerUnaCatGastos = async (req, res, next)=>{
    const {id} = req.params;
    catGastosSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"Se encontro la categoria gastos", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro la categoria gastos", err});
    });
}

//Eliminar categoria
exports.eliminarCatGastos = async (req, res, next) =>{
    const {id} = req.params;
    catGastosSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La categoria gastos fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar la categoria gastos", err});
    });
}

//Actualizar categoria
exports.actualizarCatGastos = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre}= req.body;
    catGastosSchema.updateOne({_id:id}, {$set:{nombre}})
    .then(data =>{
        res.send({success:true , message:"Se actualizo la categoria gastos correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar la categoria gastos", err});
    });

}
