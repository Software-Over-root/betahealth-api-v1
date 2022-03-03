const CarpetasSchema = require("../models/carpetas");


//Agregar carpeta
exports.agregarCarpeta = (req, res, next) => {
    const { nombre, id_ubicacion, modificaciones } = req.body;
    const nuevaCarpeta = CarpetasSchema({ nombre, id_ubicacion, modificaciones });
    nuevaCarpeta.save()
    .then(data => {
        res.send({success: true, message:"La carpeta fue agregado correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar la carpeta", err});
    });
}

//Obtener todas las carpetas
exports.obtenerCarpetas = async (req, res, next)=>{
    CarpetasSchema.find()
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener las carpetas", err});
    });
}

//Obtener todas las carpetas de una ubicacion
exports.obtenerCarpetasUbicacion = async (req, res, next)=>{
    const {id} = req.params;
    CarpetasSchema.find({"id_ubicacion": id})
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener las carpetas", err});
    });
}

//Obtener una carpeta
exports.obtenerCarpeta = async (req, res, next)=>{
    const {id} = req.params;
    CarpetasSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"La carpeta fue encontrada", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro la carpeta", err});
    });
}

//Eliminar carpeta
exports.eliminarCarpeta = async (req, res, next) =>{
    const {id} = req.params;
    CarpetasSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La carpeta fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar la carpeta", err});
    });
}

//Actualizar carpeta
exports.actualizarCarpeta = async (req, res, next) =>{
    const {id} = req.params;
    const { nombre, id_ubicacion, modificaciones }= req.body;
    CarpetasSchema.updateOne({_id:id}, {$set:{ nombre, id_ubicacion, modificaciones }})
    .then(data =>{
        res.send({success:true , message:"Se actualizo la carpeta correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar la carpeta", err});
    });

}
