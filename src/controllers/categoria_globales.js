// NOTE: Estos son las categorias globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estas categorias.
// Errores 10.0.0
const categoriaGlobalesSchema = require("../models/categoria_globales");


//Agregar categoria global
exports.agregarCategoriaGlobal = (req, res, next) => {
    const {nombre} = req.body;
    const nuevaCategoria = categoriaGlobalesSchema({nombre});
    nuevaCategoria.save()
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar la categoria", err, code:"10.0.0"});
    });
}

//Obtener todas las categorias globales
exports.obtenerCategoriasGlobales = async (req, res, next)=>{
    categoriaGlobalesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"10.1.0"});
    });
}

//Obtener una categoria global
exports.obtenerCategoriaGlobal = async (req, res, next)=>{
    const {id} = req.params;
    categoriaGlobalesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"10.2.0"});
    });
}


//Eliminar categoria global
exports.eliminarCategoriaGlobal = async (req, res, next) =>{
    const {id} = req.params;
    categoriaGlobalesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar la categoria", err, code:"10.3.0"});
    });
}