const campaniasSchema = require("../models/campanias");

// agregar almacen
exports.agregarCampania = (req, res, next) => {
    const { 
        nombre, 
        fecha, 
        direccion, 
        codigo_postal, 
        estado, 
        pais, 
        ciudad, 
        id_usuario, 
        estado_campania, 
        pacientes 
    } = req.body;
    const nuevaCampania = campaniasSchema({ 
        nombre, fecha, 
        direccion, 
        codigo_postal, 
        estado, 
        pais, 
        ciudad, 
        id_usuario, 
        estado_campania, 
        pacientes 
    });
    nuevaCampania.save()
    .then(result => {
        res.send({success: true, message:"La campaña fue creada exitosamente", type: result});
    }).catch(err => {
        res.send({success: false, message:"No se logro crear la campaña", type: err});
    });
}

// obtener todos los almacenes
exports.obtenerCampanias = (req, res, next) => {
    campaniasSchema.find()
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener los campañas", type: err});
    });
}


// obtener un almacen
exports.obtenerCampania = async (req, res, next) => {
    const { id } = req.params;
    campaniasSchema.findById(id)
    .then(data => {
        res.send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.send({success: false, message:"No se logro obtener la campaña", type: err});
    });  
}


// eliminar almacen
exports.eliminarCampania = async (req, res, next) => {
    const { id } = req.params;
    campaniasSchema.remove({ _id: id })
    .then(data => {
        res.send({success: true, message:"Campaña eliminado correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro eliminar la campaña", type: err});
    }); 
}


// actualizar almacen
exports.actualizarCampaña = async (req, res, next) => {
    const { id } = req.params;
    const { 
        nombre, 
        fecha, 
        direccion, 
        codigo_postal, 
        estado, 
        pais, 
        ciudad, 
        id_usuario, 
        estado_campania, 
        pacientes 
     } = req.body;
     campaniasSchema.updateOne({ _id: id }, { $set: { 
        nombre, 
        fecha, 
        direccion, 
        codigo_postal, 
        estado, 
        pais, 
        ciudad, 
        id_usuario, 
        estado_campania, 
        pacientes 
     } })
    .then(data => {
        res.send({success: true, message:"Campaña actualizada correctamente", data});
    })
    .catch(err => {
        res.send({success: false, message:"No se logro actualizar la campaña", type: err});
    });
}