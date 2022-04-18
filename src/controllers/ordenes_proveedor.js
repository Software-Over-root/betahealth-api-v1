const OrdenesSchema = require("../models/ordenes_proveedor");


//Agregar orden
exports.agregarOrden = (req, res, next) => {
    const { id_usuario, id_proveedor, productos, estado } = req.body;
    const nuevaOrden = OrdenesSchema({ id_usuario, id_proveedor, productos, estado });
    nuevaOrden.save()
    .then(data => {
        res.send({success: true, message:"La orden fue agregada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar la orden", err});
    });
}

//Obtener todas las ordenes
exports.obtenerOrdenes = async (req, res, next)=>{
    OrdenesSchema.find()
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener las ordenes", err});
    });
}

//Obtener una orden
exports.obtenerOrden = async (req, res, next)=>{
    const {id} = req.params;
    OrdenesSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"La orden fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro la orden", err});
    });
}

//Eliminar orden
exports.eliminarOrden = async (req, res, next) =>{
    const {id} = req.params;
    OrdenesSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La orden fue eliminada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar la orden", err});
    });
}

//Actualizar orden
exports.actualizarOrden = async (req, res, next) =>{
    const {id} = req.params;
    const { id_proveedor, id_usuario, productos }= req.body;
    OrdenesSchema.updateOne({_id:id}, {$set:{ id_proveedor, id_usuario, productos }})
    .then(data =>{
        res.send({success:true , message:"Se actualizo la orden correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar la orden", err});
    });

}

//Obtener todas las ordenes
exports.obtenerOrdenesPorEstatus = async (req, res, next)=>{
    let estatus = req.params.estatus;
    OrdenesSchema.find({
        "estado": estatus
    })
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener las ordenes", err});
    });
}
