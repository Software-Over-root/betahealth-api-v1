// NOTE: en la creacion de paqutes si modificamos algun producto si afecta a el paquete, el paquete no tiene costo, su costo es segun el precio del lote
// Errores 12.0.0
const paquetesSchema = require("../models/paquetes");


//Agregar paquete
exports.agregarPaquete = (req, res, next) => {
    const {nombre, productos} = req.body;
    const nuevoPaquete = paquetesSchema({nombre, productos});
    nuevoPaquete.save()
    .then(data => {
        res.status(200).send({success: true, message:"El paquete fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el paquete", err, code:"12.0.0"});
    });
}

//Obtener todas las paquete
exports.obtenerPaquete = async (req, res, next)=>{
    paquetesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El paquete fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro el paquete", err, code:"12.1.0"});
    });
}

//Obtener una paquete
exports.obtenerUnPaquete = async (req, res, next)=>{
    const {id} = req.params;
    paquetesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El paquete fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el paquete", err, code:"12.2.0"});
    });
}

//Eliminar paquete
exports.eliminarPaquete = async (req, res, next) =>{
    const {id} = req.params;
    paquetesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El paquete fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar el paquete", err, code:"12.3.0"});
    });
}

//Actualizar paquete
exports.actualizarPaquete = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, productos}= req.body;
    paquetesSchema.updateOne({_id:id}, {$set:{nombre, productos}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo el paquete correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar el paquete", err, code:"12.4.0"});
    });

}
