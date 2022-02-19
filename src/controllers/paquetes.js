const paquetesSchema = require("../models/paquetes");


//Agregar paquete
exports.agregarPaquete = (req, res, next) => {
    const {nombre, productos} = req.body;
    const nuevoPaquete = paquetesSchema({nombre, productos});
    nuevoPaquete.save()
    .then(data => {
        res.send({success: true, message:"El paquete fue agregada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el paquete", err});
    });
}

//Obtener todas las paquete
exports.obtenerPaquete = async (req, res, next)=>{
    paquetesSchema.find()
    .then(data =>{
        res.send({success: true, message:"El paquete fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro el paquete", err});
    });
}

//Obtener una paquete
exports.obtenerUnPaquete = async (req, res, next)=>{
    const {id} = req.params;
    paquetesSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"El paquete fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el paquete", err});
    });
}

//Eliminar paquete
exports.eliminarPaquete = async (req, res, next) =>{
    const {id} = req.params;
    paquetesSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"El paquete fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar el paquete", err});
    });
}

//Actualizar paquete
exports.actualizarPaquete = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, productos}= req.body;
    paquetesSchema.updateOne({_id:id}, {$set:{nombre, productos}})
    .then(data =>{
        res.send({success:true , message:"Se actualizo el paquete correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar el paquete", err});
    });

}
