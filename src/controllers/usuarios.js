const usuariosSchema = require("../models/usuarios");


//Agregar usuarios
exports.agregarUsuario = (req, res, next) => {
    const {nombre, correo, password, tipo, id_sucursal} = req.body;
    const nuevoUsuario = usuariosSchema({nombre, correo, password, tipo, id_sucursal});
    nuevoUsuario.save()
    .then(data => {
        res.send({success: true, message:"El usuarios fue agregada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el usuarios", err});
    });
}

//Obtener todas las usuarios
exports.obtenerUsuario = async (req, res, next)=>{
    usuariosSchema.find()
    .then(data =>{
        res.send({success: true, message:"El usuarios fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro el usuarios", err});
    });
}

//Obtener una usuarios
exports.obtenerUnUsuario = async (req, res, next)=>{
    const {id} = req.params;
    usuariosSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"El usuarios fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el usuarios", err});
    });
}

//Eliminar usuarios
exports.eliminarUsuario = async (req, res, next) =>{
    const {id} = req.params;
    usuariosSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"El usuarios fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar el usuarios", err});
    });
}

//Actualizar usuarios
exports.actualizarUsuario = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, correo, password, tipo, id_sucursal}= req.body;
    usuariosSchema.updateOne({_id:id}, {$set:{nombre, correo, password, tipo, id_sucursal}})
    .then(data =>{
        res.send({success:true , message:"Se actualizo el usuarios correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar el usuarios", err});
    });

}
