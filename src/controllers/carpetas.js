// Errores 19.0.0
const CarpetasSchema = require("../models/carpetas");


//Agregar carpeta
exports.agregarCarpeta = (req, res, next) => {
    const { nombre, id_ubicacion, modificaciones } = req.body;
    const nuevaCarpeta = CarpetasSchema({ nombre, id_ubicacion, modificaciones });
    nuevaCarpeta.save()
    .then(data => {
        res.status(200).send({success: true, message:"La carpeta fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar la carpeta", err, code:"19.0.0"});
    });
}

//Obtener todas las carpetas
exports.obtenerCarpetas = async (req, res, next)=>{
    CarpetasSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se lograron obtener las carpetas", err, code:"19.1.0"});
    });
}

//Obtener una carpeta
exports.obtenerCarpeta = async (req, res, next)=>{
    const {id} = req.params;
    CarpetasSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"La carpeta fue encontrada", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro la carpeta", err, code:"19.2.0"});
    });
}

//Eliminar carpeta
exports.eliminarCarpeta = async (req, res, next) =>{
    const {id} = req.params;
    CarpetasSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La carpeta fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar la carpeta", err, code:"19.3.0"});
    });
}

//Actualizar carpeta
exports.actualizarCarpeta = async (req, res, next) =>{
    const {id} = req.params;
    const { nombre, id_ubicacion, modificaciones }= req.body;
    CarpetasSchema.updateOne({_id:id}, {$set:{ nombre, id_ubicacion, modificaciones }})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo la carpeta correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar la carpeta", err, code:"19.4.0"});
    });

}
