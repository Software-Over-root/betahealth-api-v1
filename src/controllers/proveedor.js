const ProveedorSchema = require("../models/proveedor");


// agregar proveedor
exports.agregarProveedor = (req, res, next) => {
    const { descripcion_cuenta, tipo_proveedor, especificacion, rfc, domicilio, contacto, telefono, correo, numero_cuenta, banco, divisa } = req.body;
    const nuevoProveedor = ProveedorSchema({ descripcion_cuenta, tipo_proveedor, especificacion, rfc, domicilio, contacto, telefono, correo, numero_cuenta, banco, divisa });
    nuevoProveedor.save()
    .then(result => {
        res.send({success: true, message:"El proveedor fue agregado correctamente", type: result});
    }).catch(err => {
        res.send({success: false, message:"No se logro guardar el proveedor", type: err});
    });
}


// obtener todos los proveedores
exports.obtenerProveedores = (req, res, next) => {
    ProveedorSchema.find()
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener los proveedores", type: err});
    });
}


// obtener un proveedor
exports.obtenerProveedor = async (req, res, next) => {
    const { id } = req.params;
    ProveedorSchema.findById(id)
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener el proveedor", type: err});
    });  
}


// eliminar proveedor
exports.eliminarProveedor = async (req, res, next) => {
    const { id } = req.params;
    ProveedorSchema.remove({ _id: id })
    .then(data => {
        res.send({success: true, message:"Proveedor eliminado correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro eliminar el proveedor", type: err});
    }); 
}


// actualizar proveedor
exports.actualizarProveedor = async (req, res, next) => {
    const { id } = req.params;
    const { descripcion_cuenta, tipo_proveedor, especificacion, rfc, domicilio, contacto, telefono, correo, numero_cuenta, banco, divisa } = req.body;
    ProveedorSchema.updateOne({ _id: id }, { $set: { descripcion_cuenta, tipo_proveedor, especificacion, rfc, domicilio, contacto, telefono, correo, numero_cuenta, banco, divisa } })
    .then(data => {
        res.send({success: true, message:"Proveedor actualizado correctamente", data});
    })
    .catch(error => {
        res.send({success: false, message:"No se logro actualizar el proveedor", type: err});
    });
}