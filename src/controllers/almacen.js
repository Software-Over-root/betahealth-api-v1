const almacenSchema = require("../models/almacen");

exports.agregarAlmacen = async (req, res, next) => {
    const { nombre, ciudad, domicilio, telefono, correo } = req.body;
    const nuevoAlmacen = almacenSchema({ nombre, ciudad, domicilio, telefono, correo });
    await nuevoAlmacen.save()
    .then((result) => {
        res.send({success: true, message:"El alamacen fue agregado correctamente", type: result});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el almacen", type: err});
    });
}


exports.obtenerAlmacenes = async (req, res, next) => {
    await almacenSchema.find()
    .then((data) => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch((err) => {
        console.log(err);
        res.send({success: false, message:"No se logro obtener los almacenes", type: err});
    });
}