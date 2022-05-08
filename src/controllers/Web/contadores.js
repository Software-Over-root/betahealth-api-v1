const contadoresSchema = require("../../models/Web/contadores");


//Agregar contacto
exports.agregarContador = (req, res, next) => {
    const {calificacion, total_calificado, casos_exito, dosis_adquirida, pacientes_satisfechos, eventos_realizados} = req.body;
    const nuevaUbicacion = contadoresSchema({calificacion, total_calificado, casos_exito, dosis_adquirida, pacientes_satisfechos, eventos_realizados});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El contador fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el contador", err, code:"23.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerContadores = async (req, res, next)=>{
    contadoresSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El contador fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el contador", err, code:"23.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnContador = async (req, res, next)=>{
    const {id} = req.params;
    contadoresSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El contador fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el contador", err, code:"23.2.0"});
    });
}

//Eliminar contacto
exports.eliminarContador = async (req, res, next) =>{
    const {id} = req.params;
    contadoresSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El contador fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el contador", err, code:"23.3.0"});
    });
}

//Actualizar contactos
exports.actualizarContador = async (req, res, next) =>{
    const {id} = req.params;
    const {calificacion, total_calificado, casos_exito, dosis_adquirida, pacientes_satisfechos, eventos_realizados}= req.body;
    contadoresSchema.updateOne({_id:id}, {$set:{calificacion, total_calificado, casos_exito, dosis_adquirida, pacientes_satisfechos, eventos_realizados}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el contador correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el contador", err, code:"23.4.0"});
    });

}
