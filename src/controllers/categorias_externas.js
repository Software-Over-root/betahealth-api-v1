// NOTE: Estos son las categorias externas que se encuentran solo en los almacenes foraneos.
// Errores 8.0.0
const categoriasExternasSchema = require("../models/categorias_externas");


//Agregar categoria externa
exports.agregarCategoriaExterna = (req, res, next) => {
    const {nombre, id_almacen} = req.body;
    const nuevaCategoria = categoriasExternasSchema({nombre, id_almacen});
    nuevaCategoria.save()
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar la categoria", err, code:"8.0.0"});
    });
}

//Obtener todas las categorias externas
exports.obtenerCategoriasExternas = async (req, res, next)=>{
    categoriasExternasSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"8.1.0"});
    });
}

//Obtener una categoria externa
exports.obtenerUnaCategoriaExterna = async (req, res, next)=>{
    const {id} = req.params;
    categoriasExternasSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"Se encontro la categoria", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"8.2.0"});
    });
}

//Obtener categorias externas por id de almacen
exports.obtenerConAlmacenes = async (req, res, next)=>{
    const {id} = req.params;
    categoriasExternasSchema.find({"id_almacen": id}).sort("nombre")
    .then(data =>{
        res.status(200).send({success: true , message:"Se encontro las categorias", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontraron las categorias", err, code:"8.3.0"});
    });
}

//Eliminar categoria externa
exports.eliminarCategoriaExterna = async (req, res, next) =>{
    const {id} = req.params;
    categoriasExternasSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false , message:"No se logro eliminar la categoria", err, code:"8.4.0"});
    });
}

//Actualizar categoria externa
exports.actualizarCategoriaExterna = async (req, res, next) =>{
    const {id} = req.params;
    const {nombre} = req.body;
    categoriasExternasSchema.updateOne({_id:id}, {$set:{nombre}})
    .then(data =>{
        res.status(200).send({success: true , message:"Se actualizo la categoria correctamente", data});
    }).catch(err=>{
        res.status(400).send({success: false, message:"No se logro actualizar la categoria", err, code:"8.5.0"});
    });

}
