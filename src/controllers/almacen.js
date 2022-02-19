const almacenSchema = require("../models/almacen");


// agregar almacen
exports.agregarAlmacen = (req, res, next) => {
    const { nombre, ciudad, domicilio, telefono, correo } = req.body;
    const nuevoAlmacen = almacenSchema({ nombre, ciudad, domicilio, telefono, correo });
    nuevoAlmacen.save()
    .then(result => {
        res.send({success: true, message:"El alamacen fue agregado correctamente", type: result});
    }).catch(err => {
        res.send({success: false, message:"No se logro guardar el almacen", type: err});
    });
}


// obtener todos los almacenes
exports.obtenerAlmacenes = (req, res, next) => {
    almacenSchema.find()
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener los almacenes", type: err});
    });
}


// obtener un almacen
exports.obtenerAlmacene = async (req, res, next) => {
    const { id } = req.params;
    almacenSchema.findById(id)
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener el almacen", type: err});
    });  
}


// eliminar almacen
exports.eliminarAlmacen = async (req, res, next) => {
    const { id } = req.params;
    almacenSchema.remove({ _id: id })
    .then(data => {
        res.send({success: true, message:"Almacen eliminado correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro eliminar el almacen", type: err});
    }); 
}


// actualizar almacen
exports.actualizarAlmacen = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, ciudad, domicilio, telefono, correo } = req.body;
    almacenSchema.updateOne({ _id: id }, { $set: { nombre, ciudad, domicilio, telefono, correo } })
    .then(data => {
        res.send({success: true, message:"Almacen actualizado correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro actualizar el almacen", type: err});
    });
}