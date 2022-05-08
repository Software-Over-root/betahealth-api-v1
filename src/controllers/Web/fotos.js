const fotosSchema = require("../../models/Web/fotos");


//Agregar contacto
exports.agregarFoto = (req, res, next) => {
    const {nombre, imagen, vista} = req.body;
    const nuevaUbicacion = fotosSchema({nombre, imagen, vista});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"La foto fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar la foto", err, code:"26.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerFotos = async (req, res, next)=>{
    fotosSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La foto fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró la foto", err, code:"26.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnaFoto = async (req, res, next)=>{
    const {id} = req.params;
    fotosSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"La foto fue encontrada", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró la foto", err, code:"26.2.0"});
    });
}

//Eliminar contacto
exports.eliminarFoto = async (req, res, next) =>{
    const {id} = req.params;
    fotosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La foto fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar la foto", err, code:"26.3.0"});
    });
}

//Actualizar contactos
exports.actualizarFoto = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, imagen, vista}= req.body;
    fotosSchema.updateOne({_id:id}, {$set:{nombre, imagen, vista}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó la foto correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar la foto", err, code:"26.4.0"});
    });

}
