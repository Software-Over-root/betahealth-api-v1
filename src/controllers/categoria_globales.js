// NOTE: Estos son las categorias globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estas categorias.
// Errores 10.0.0
const categoriaGlobalesSchema = require("../models/categoria_globales");


//Agregar categoria global error: 10.0.0
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

//Obtener todas las categorias globales error: 10.1.0
exports.obtenerCategoriasGlobales = async (req, res, next)=>{
    categoriaGlobalesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"10.1.0"});
    });
}

//Obtener todas las categorias globales error: 10.4.0
exports.obtenerCategoriasGlobalesIDs = async (req, res, next) => {
    let ids = [];
    let categorias = req.body.categorias;
    let resultadoCategorias = [];

    // obteneos los id que haremos la consulta
    categorias.map(categoria => {
        ids.push(categoria.id_categoria_globales);
    })

    // hacemos la consulta
    categoriaGlobalesSchema.find({
        _id: {$in: ids}
    })
    .then(data =>{

        // mapeamos la informacion de la consulta
        data.map((categoria) => {
            // mapeamos la informacion de la consulta anterior, de los enlazes de categora
            categorias.map( (categoriaBody, index) => {

                // evaluamos si el id de la categoria global del enlaze es igual a el id de la categoria global para indexarle su nombre a el enlaze
                if (categoriaBody.id_categoria_globales.toString() === categoria._id.toString()) {
                    
                    // acomodamos los datos para mostrar a almacen
                    resultadoCategorias.push({
                        _id: categoriaBody._id,
                        id_categoria_globales: categoriaBody.id_categoria_globales,
                        id_almacen: categoriaBody.id_almacen,
                        nombre: categoria.nombre
                    });
                }
            });
        })
        res.status(200).send({success: true, message:"La categoria fue encontrada", data: resultadoCategorias});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"10.1.0"});
    });
}

//Obtener una categoria global error: 10.2.0
exports.obtenerCategoriaGlobal = async (req, res, next)=>{
    const {id} = req.params;
    categoriaGlobalesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"10.2.0"});
    });
}


//Eliminar categoria global error: 10.3.0
exports.eliminarCategoriaGlobal = async (req, res, next) =>{
    const {id} = req.params;
    categoriaGlobalesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar la categoria", err, code:"10.3.0"});
    });
}