const VentasSchema = require("../models/ventas");


// agregar venta
exports.agregarVenta = (req, res, next) => {
    const { notas, tratamiento, productos, metodo_pago, abonos, total, id_paciente, id_usuario } = req.body;
    const nuevaVenta = VentasSchema({ notas, tratamiento, productos, metodo_pago, abonos, total, id_paciente, id_usuario });
    nuevaVenta.save()
    .then(result => {
        res.send({success: true, message:"La venta fue agregada correctamente", type: result});
    }).catch(err => {
        res.send({success: false, message:"No se logro guardar la venta", type: err});
    });
}


// obtener todas las ventas
exports.obtenerVentas = (req, res, next) => {
    VentasSchema.find()
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener las ventas", type: err});
    });
}


// obtener una venta
exports.obtenerVenta = async (req, res, next) => {
    const { id } = req.params;
    VentasSchema.findById(id)
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener la venta", type: err});
    });  
}


// eliminar venta
exports.eliminarVenta = async (req, res, next) => {
    const { id } = req.params;
    VentasSchema.remove({ _id: id })
    .then(data => {
        res.send({success: true, message:"Venta eliminada correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro eliminar la venta", type: err});
    }); 
}


// actualizar venta
exports.actualizarVenta = async (req, res, next) => {
    const { id } = req.params;
    const { notas, tratamiento, productos, metodo_pago, abonos, total, id_paciente, id_usuario } = req.body;
    VentasSchema.updateOne({ _id: id }, { $set: { notas, tratamiento, productos, metodo_pago, abonos, total, id_paciente, id_usuario } })
    .then(data => {
        res.send({success: true, message:"Venta actualizada correctamente", data});
    })
    .catch(error => {
        res.send({success: false, message:"No se logro actualizar la venta", type: err});
    });
}