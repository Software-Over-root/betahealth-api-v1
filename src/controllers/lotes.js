const LotesSchema = require("../models/lotes");


//Agregar lote
exports.agregarLote = (req, res, next) => {
    const { id_producto, id_proveedor, cantidad, almacenes } = req.body;
    const nuevoLote = LotesSchema({ id_producto, id_proveedor, cantidad, almacenes });
    nuevoLote.save()
    .then(data => {
        res.send({success: true, message:"El lote fue agregado correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el lote", err});
    });
}

//Obtener todos los lotes
exports.obtenerLotes = async (req, res, next) => {
    LotesSchema.find()
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener los lotes", err});
    });
}

//Obtener un lote
exports.obtenerLote = async (req, res, next) => {
    const {id} = req.params;
    LotesSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"El lote fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el lote", err});
    });
}

//Eliminar lote
exports.eliminarLote = async (req, res, next) => {
    const {id} = req.params;
    LotesSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"El lote fue eliminado correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar el lote", err});
    });
}

//Actualizar lote
exports.actualizarLote = async (req, res, next) => {
    const {id} = req.params;
    const { id_producto, id_proveedor, cantidad, almacenes }= req.body;
    LotesSchema.updateOne({_id:id}, {$set:{ id_producto, id_proveedor, cantidad, almacenes }})
    .then(data =>{
        res.send({success:true , message:"Se actualizo el lote correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar el lote", err});
    });

}

exports.agregarMultiplesLotes = async (req, res, next) => {
    LotesSchema.insertMany(
        req.body.lotes
    )
    .then(data => {
        res.send({success: true, message:"Los lotes fueron agregados correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar los lotes", err});
    });
}

exports.obtenerLotesPorAlmacenProducto = async (req, res, next) => {
    const {id_almacen, id_producto} = req.params;
    LotesSchema.find({
        'almacenes.id_almacen': id_almacen,
        'id_producto': id_producto
    })
    .then(data =>{
        res.send({success: true , message:"El lote fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el lote", err});
    });
}
