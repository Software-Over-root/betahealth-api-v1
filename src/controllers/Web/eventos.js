const eventosSchema = require("../../models/Web/eventos");


//Agregar contacto
exports.agregarEvento = (req, res, next) => {
    const {fecha, nombre_evento} = req.body;
    const nuevaUbicacion = eventosSchema({fecha, nombre_evento});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El evento fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el evento", err, code:"25.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerEventos = async (req, res, next)=>{
    eventosSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El evento fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el evento", err, code:"25.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnEvento = async (req, res, next)=>{
    const {id} = req.params;
    eventosSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El evento fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el evento", err, code:"25.2.0"});
    });
}

//Eliminar contacto
exports.eliminarEvento = async (req, res, next) =>{
    const {id} = req.params;
    eventosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El evento fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el evento", err, code:"25.3.0"});
    });
}

//Actualizar contactos
exports.actualizarEvento = async (req, res, next) =>{
    const {id} = req.params;
    const {fecha, nombre_evento}= req.body;
    eventosSchema.updateOne({_id:id}, {$set:{fecha, nombre_evento}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el evento correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el evento", err, code:"25.4.0"});
    });

}
