// Errores 2.0.0
const almacenSchema = require("../models/almacen");


// agregar almacen
exports.agregarAlmacen = (req, res, next) => {
    const { nombre, ciudad, domicilio, telefono, correo } = req.body;
    const nuevoAlmacen = almacenSchema({ nombre, ciudad, domicilio, telefono, correo });
    nuevoAlmacen.save()
    .then(data => {
        res.status(200).send({success: true, message:"El alamacen fue agregado correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro guardar el almacen", err, code:"2.0.0"});
    });
}


// obtener todos los almacenes
exports.obtenerAlmacenes = (req, res, next) => {
    almacenSchema.find().sort("nombre")
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener los almacenes", err, code:"2.1.0"});
    });
}


// obtener un almacen
exports.obtenerAlmacene = async (req, res, next) => {
    const { id } = req.params;
    almacenSchema.findById(id)
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener el almacen", err, code:"2.2.0"});
    });  
}


// eliminar almacen
exports.eliminarAlmacen = async (req, res, next) => {
    const { id } = req.params;
    almacenSchema.remove({ _id: id })
    .then(data => {
        res.status(200).send({success: true, message:"Almacen eliminado correctamente", data});
    })
    .catch(err => {
        res.status(400).send({success: false, message:"No se logro eliminar el almacen", err, code:"2.3.0"});
    }); 
}


// actualizar almacen
exports.actualizarAlmacen = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, ciudad, domicilio, telefono, correo } = req.body;
    almacenSchema.updateOne({ _id: id }, { $set: { nombre, ciudad, domicilio, telefono, correo } })
    .then(data => {
        res.status(200).send({success: true, message:"Almacen actualizado correctamente", data});
    })
    .catch(error => {
        res.status(400).send({success: false, message:"No se logro actualizar el almacen", err, code:"2.4.0"});
    });
}