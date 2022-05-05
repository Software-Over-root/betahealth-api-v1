// Errores 13.0.0
const LotesSchema = require("../models/lotes");


//Agregar lote
// NOTE: al crear el lote se guarda la informacion actual del producto y del proveedor, al actualizar el producto no debe de modificar el lote
exports.agregarLote = (req, res, next) => {
    const { id_lote, fecha, categoria, producto, proveedor, almacenes } = req.body;
    const nuevoLote = LotesSchema({ id_lote, fecha, categoria, producto, proveedor, almacenes });
    nuevoLote.save()
    .then(data => {
        res.status(200).send({success: true, message:"El lote fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el lote", err, code:"13.1.0"});
    });
}

//Obtener todos los lotes
exports.obtenerLotes = async (req, res, next) => {
    LotesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se lograron obtener los lotes", err, code:"13.2.0"});
    });
}

//Obtener un lote
exports.obtenerLote = async (req, res, next) => {
    const {id} = req.params;
    LotesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El lote fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el lote", err, code:"13.3.0"});
    });
}

//Eliminar lote
exports.eliminarLote = async (req, res, next) => {
    const {id} = req.params;
    LotesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El lote fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar el lote", err, code:"13.4.0"});
    });
}

//Actualizar lote
exports.actualizarLote = async (req, res, next) => {
    const {id} = req.params;
    const { id_lote, fecha, categoria, producto, proveedor, almacenes }= req.body;
    LotesSchema.updateOne({_id:id}, {$set:{ id_lote, fecha, categoria, producto, proveedor, almacenes }})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo el lote correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar el lote", err, code:"13.5.0"});
    });

}

// Agregar multiples lotes
exports.agregarMultiplesLotes = async (req, res, next) => {
    LotesSchema.insertMany(
        req.body.lotes
    )
    .then(data => {
        res.status(200).send({success: true, message:"Los lotes fueron agregados correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar los lotes", err, code:"13.6.0"});
    });
}

exports.obtenerLotesPorAlmacenProducto = async (req, res, next) => {
    const {id_almacen, id_producto} = req.params;
    LotesSchema.find({
        'almacenes.id_almacen': id_almacen,
        'producto.id_producto': id_producto
    })
    .then(data =>{
        res.status(200).send({success: true , message:"El lote fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el lote", err, code:"13.7.0"});
    });
}
