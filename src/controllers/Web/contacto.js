const contactoSchema = require("../../models/Web/contacto");


//Agregar contacto
exports.agregarContacto = (req, res, next) => {
    const {nombre, telefono, e_mail, mensaje, asunto} = req.body;
    const nuevaUbicacion = contactoSchema({nombre, telefono, e_mail, mensaje, asunto});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El contacto fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el contacto", err, code:"22.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerContactos = async (req, res, next)=>{
    contactoSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El contacto fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el contacto", err, code:"22.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnContacto = async (req, res, next)=>{
    const {id} = req.params;
    contactoSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El contacto fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el contacto", err, code:"22.2.0"});
    });
}

//Eliminar contacto
exports.eliminarContacto = async (req, res, next) =>{
    const {id} = req.params;
    contactoSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El contacto fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el contacto", err, code:"22.3.0"});
    });
}

//Actualizar contactos
exports.actualizarContacto = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, telefono, e_mail, mensaje, asunto}= req.body;
    contactoSchema.updateOne({_id:id}, {$set:{nombre, telefono, e_mail, mensaje, asunto}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el contacto correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el contacto", err, code:"22.4.0"});
    });

}
