const GastosSchema = require("../models/gastos");


// agregar gastos
exports.agregarGasto = (req, res, next) => {
    const { nombre, cantidad, descripcion, id_factura, remitente, id_subcategoria, id_usuario } = req.body;
    const nuevoGasto = GastosSchema({ nombre, cantidad, descripcion, id_factura, remitente, id_subcategoria, id_usuario });
    nuevoGasto.save()
    .then(result => {
        res.send({success: true, message:"El gasto fue agregado correctamente", type: result});
    }).catch(err => {
        res.send({success: false, message:"No se logro guardar el gasto", type: err});
    });
}


// obtener todos los gastos
exports.obtenerGastos = (req, res, next) => {
    GastosSchema.find()
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener los gastos", type: err});
    });
}


// obtener un gasto
exports.obtenerGasto = async (req, res, next) => {
    const { id } = req.params;
    GastosSchema.findById(id)
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener el gasto", type: err});
    });  
}


// eliminar gasto
exports.eliminarGasto = async (req, res, next) => {
    const { id } = req.params;
    GastosSchema.remove({ _id: id })
    .then(data => {
        res.send({success: true, message:"Gasto eliminado correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro eliminar el gasto", type: err});
    }); 
}


// actualizar gasto
exports.actualizarGasto = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, cantidad, descripcion, id_factura, remitente, id_subcategoria, id_usuario } = req.body;
    GastosSchema.updateOne({ _id: id }, { $set: { nombre, cantidad, descripcion, id_factura, remitente, id_subcategoria, id_usuario } })
    .then(data => {
        res.send({success: true, message:"Gasto actualizado correctamente", data});
    })
    .catch(error => {
        res.send({success: false, message:"No se logro actualizar el gasto", type: err});
    });
}