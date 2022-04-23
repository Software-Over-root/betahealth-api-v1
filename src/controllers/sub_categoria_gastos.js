// Errores: 16.0.0
const subCategoriaGSchema = require("../models/sub_categoria_gastos");


//Agregar sub_categoria
exports.agregarSubCatGas = (req, res, next) => {
    const {nombre,id_categoria} = req.body;
    const nuevaSubCatGas = subCategoriaGSchema({nombre,id_categoria});
    nuevaSubCatGas.save()
    .then(data => {
        res.status(200).send({success: true, message:"La sub categoria gastos fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar la sub categoria gastos", err, code:"16.0.0"});
    });
}

//Obtener todas las sub_categorias
exports.obtenerSubCatGas = async (req, res, next)=>{
    subCategoriaGSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La sub categoria gastos fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la sub categoria gastos", err, code:"16.1.0"});
    });
}

//Obtener una sub_categoria
exports.obtenerUnaSubCatGas = async (req, res, next)=>{
    const {id} = req.params;
    subCategoriaGSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"Se encontro la sub categoria gastos", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro la sub categoria gastos", err, code:"16.2.0"});
    });
}

//Eliminar sub_categoria
exports.eliminarSubCatGas = async (req, res, next) =>{
    const {id} = req.params;
    subCategoriaGSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La sub categoria gastos fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar la sub categoria gastos", err, code:"16.3.0"});
    });
}

//Actualizar sub_categoria
exports.actualizarSubCatGas = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre, id_categoria}= req.body;
    subCategoriaGSchema.updateOne({_id:id}, {$set:{nombre, id_categoria}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo la sub categoria gastos correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar la sub categoria gastos", err, code:"16.4.0"});
    });

}
