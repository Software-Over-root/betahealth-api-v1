// Errores 7.0.0
const ProveedorSchema = require("../models/proveedor");
const conexionProductoSchema = require("../models/conexion_producto");


// agregar proveedor 7.0.0
exports.agregarProveedor = (req, res, next) => {
    const { 
        nombre_proveedor, 
        tipo_proveedor, 
        especificacion, 
        rfc, 
        domicilio, 
        contacto, 
        telefono, 
        correo, 
        numero_cuenta, 
        banco, 
        divisa, 
        encargado 
    } = req.body;
    const nuevoProveedor = ProveedorSchema({ 
        nombre_proveedor, 
        tipo_proveedor, 
        especificacion, 
        rfc, 
        domicilio, 
        contacto, 
        telefono, 
        correo, 
        numero_cuenta, 
        banco, 
        divisa, 
        encargado 
    });
    nuevoProveedor.save()
    .then(result => {
        res.status(200).send({success: true, message:"El proveedor fue agregado correctamente", type: result});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro guardar el proveedor", type: err, code:"7.0.0"});
    });
}

// obtener todos los proveedores 7.1.0
exports.obtenerProveedores = (req, res, next) => {
    ProveedorSchema.find()
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener los proveedores", type: err, code:"7.1.0"});
    });
}

// obtener un proveedor 7.2.0
exports.obtenerProveedor = async (req, res, next) => {
    const { id } = req.params;
    ProveedorSchema.findById(id)
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener el proveedor", type: err, code:"7.2.0"});
    });  
}

// eliminar proveedor 7.3.0
exports.eliminarProveedor = async (req, res, next) => {
    const { id } = req.params;
    ProveedorSchema.remove({ _id: id })
    .then(data => {
        res.status(200).send({success: true, message:"Proveedor eliminado correctamente", data});
    })
    .catch(err => {
        res.status(400).send({success: false, message:"No se logro eliminar el proveedor", type: err, code:"7.3.0"});
    }); 
}

// actualizar proveedor 7.4.0
exports.actualizarProveedor = async (req, res, next) => {
    const { id } = req.params;
    const { 
        descripcion_cuenta, 
        tipo_proveedor, 
        especificacion, 
        rfc, 
        domicilio, 
        contacto, 
        telefono, 
        correo, 
        numero_cuenta, 
        banco, 
        divisa,
        encargado
    } = req.body;
    ProveedorSchema.updateOne({ _id: id }, { $set: { 
        descripcion_cuenta, 
        tipo_proveedor, 
        especificacion, 
        rfc, 
        domicilio, 
        contacto, 
        telefono, 
        correo, 
        numero_cuenta, 
        banco, 
        divisa,
        encargado
    } })
    .then(data => {
        res.status(200).send({success: true, message:"Proveedor actualizado correctamente", data});
    })
    .catch(error => {
        res.status(400).send({success: false, message:"No se logro actualizar el proveedor", type: err, code:"7.4.0"});
    });
}

// obtener provedores por lista de ids 7.5.0
exports.obtenerProveedoresPorId = async (req, res, next) => {
    ProveedorSchema.find({
        _id: {$in: req.body.proveedores}
    })
    .then(data => {
        res.status(200).send({success: true, message:"Proveedores obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener los proveedores", type: err, code:"7.5.0"});
    });
}

// obtener provedores por id de producto 7.6.0
exports.obtenrProvedoresIdProducto = async (req, res, next) => {
    const {id} = req.params;
    conexionProductoSchema.find({"id_producto_global": id})
    .then( data => {
        let idsProveedores = [];
        data.map(conexion => {
            if (conexion.id_proveedor) {
                idsProveedores.push(conexion.id_proveedor);
            }
        });
        ProveedorSchema.find({
            _id: {$in: idsProveedores}
        })
        .then( data => {
            res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
        }).catch(err =>{
            res.status(400).send({success: false, message:"No se encontro el producto", err, code:"7.6.0"});
        })
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"7.6.1"});
    })
}