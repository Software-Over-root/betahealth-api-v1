// Errores 1.0.0
const usuariosSchema = require("../models/usuarios");


//Agregar usuarios
exports.agregarUsuario = (req, res, next) => {
    const {nombre, correo, password, tipo, cargo, id_sucursal} = req.body;
    const nuevoUsuario = usuariosSchema({nombre, correo, password, tipo, cargo, id_sucursal});
    nuevoUsuario.save()
    .then(data => {
        res.status(200).send({success: true, message:"El usuarios fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el usuarios", err, code:"1.0.0"});
    });
}

//Obtener todas las usuarios
exports.obtenerUsuario = async (req, res, next)=>{
    usuariosSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El usuarios fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro el usuarios", err, code:"1.1.0"});
    });
}

//Obtener una usuarios
exports.obtenerUnUsuario = async (req, res, next)=>{
    const {id} = req.params;
    usuariosSchema.findById(id)
    .then(data => {
        res.status(200).send({success: true , message:"El usuarios fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el usuarios", err, code:"1.2.0"});
    });
}

//Eliminar usuarios
exports.eliminarUsuario = async (req, res, next) =>{
    const {id} = req.params;
    usuariosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El usuarios fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar el usuarios", err, code:"1.3.0"});
    });
}

//Actualizar usuarios
exports.actualizarUsuario = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, correo, password, tipo, cargo, id_sucursal}= req.body;
    usuariosSchema.updateOne({_id:id}, {$set:{nombre, correo, password, tipo, cargo, id_sucursal}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo el usuarios correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar el usuarios", err, code:"1.4.0"});
    });

}

// Login de usuario
exports.loginUsiario = (req, res, next) => {
    const {correo, password} = req.body;
    usuariosSchema.find({
        correo: {$in: correo},
        password: {$in: password},
    })
    .then(data =>{
        res.status(200).send({success: true , message:"El usuarios fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el usuarios", err, code:"1.5.0"});
    });
}
