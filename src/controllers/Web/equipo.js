const equipoSchema = require("../../models/Web/equipo");


//Agregar contacto
exports.agregarEquipo = (req, res, next) => {
    const {nombre, puesto, imagen, descripcion, educacion, habilidades, referencias} = req.body;
    const nuevaUbicacion = equipoSchema({nombre, puesto, imagen, descripcion, educacion, habilidades, referencias});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El equipo fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el equipo", err, code:"24.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerEquipos = async (req, res, next)=>{
    equipoSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El equipo fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el equipo", err, code:"24.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnEquipo = async (req, res, next)=>{
    const {id} = req.params;
    equipoSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El equipo fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el equipo", err, code:"24.2.0"});
    });
}

//Eliminar contacto
exports.eliminarEquipo = async (req, res, next) =>{
    const {id} = req.params;
    equipoSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El equipo fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el equipo", err, code:"24.3.0"});
    });
}

//Actualizar contactos
exports.actualizarEquipo = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, puesto, imagen, descripcion, educacion, habilidades, referencias}= req.body;
    equipoSchema.updateOne({_id:id}, {$set:{nombre, puesto, imagen, descripcion, educacion, habilidades, referencias}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el equipo correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el equipo", err, code:"24.4.0"});
    });

}
