const preguntasSchema = require("../../models/Web/preguntas_frecuentes");


//Agregar contacto
exports.agregarPregunta = (req, res, next) => {
    const {pregunta, respuesta} = req.body;
    const nuevaUbicacion = preguntasSchema({pregunta, respuesta});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"La pregunta fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar la pregunta", err, code:"27.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerPregunta = async (req, res, next)=>{
    preguntasSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La pregunta fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró la pregunta", err, code:"27.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnaPregunta = async (req, res, next)=>{
    const {id} = req.params;
    preguntasSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"La pregunta fue encontrada", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró la pregunta", err, code:"27.2.0"});
    });
}

//Eliminar contacto
exports.eliminarPregunta = async (req, res, next) =>{
    const {id} = req.params;
    preguntasSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La pregunta fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar la pregunta", err, code:"27.3.0"});
    });
}

//Actualizar contactos
exports.actualizarPregunta = async (req, res, next) =>{
    const {id} = req.params;
    const {pregunta, respuesta}= req.body;
    preguntasSchema.updateOne({_id:id}, {$set:{pregunta, respuesta}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó la pregunta correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar la pregunta", err, code:"27.4.0"});
    });

}
