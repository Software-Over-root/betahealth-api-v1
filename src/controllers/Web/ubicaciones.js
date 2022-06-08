const ubicacionesSchema = require("../../models/Web/ubicaciones");


//Agregar ubicacion
exports.agregarUbicacion = (req, res, next) => {
    const {titulo, locacion, latitud, longitud, imagenes} = req.body;
    const nuevaUbicacion = ubicacionesSchema({titulo, locacion, latitud, longitud, imagenes});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"La ubicación fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar la ubicación", err, code:"21.0.0"});
    });
}

//Obtener todas las ubicaciones
exports.obtenerUbicaciones = async (req, res, next)=>{
    ubicacionesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La ubicación fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró la ubicación", err, code:"21.1.0"});
    });
}

//Obtener una ubicación
exports.obtenerUnaUbicacion = async (req, res, next)=>{
    const {id} = req.params;
    ubicacionesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"La ubicación fue encontrada", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró la ubicación", err, code:"21.2.0"});
    });
}

//Eliminar usuarios
exports.eliminarUbicacion = async (req, res, next) =>{
    const {id} = req.params;
    ubicacionesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La ubicación fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar la ubicación", err, code:"21.3.0"});
    });
}

//Actualizar usuarios
exports.actualizarUbicacion = async (req, res, next) =>{
    const {id} = req.params;
    const {titulo, locacion, latitud, longitud, imagenes}= req.body;
    ubicacionesSchema.updateOne({_id:id}, {$set:{titulo, locacion, latitud, longitud, imagenes}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó la ubicación correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar la ubicación", err, code:"21.4.0"});
    });

}
