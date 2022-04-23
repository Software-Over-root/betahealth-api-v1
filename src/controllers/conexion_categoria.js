// NOTE: Estas son las conexiones de las categorias globales con los proveedores y almacenes.
// Errores 5.0.0
const conexionCategriaSchema = require("../models/conexion_categoria");
const categoriaGlobalesSchema = require("../models/categoria_globales");
const proveedoresSchema = require("../models/proveedor");


//Obtener todas las categorias
exports.obtenerConexionCategorias = async (req, res, next)=>{
    conexionCategriaSchema.find()
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"5.0.0"});
    });
}

//Eliminar categoria
exports.eliminarCategoriaConexion = async (req, res, next) =>{
    const {id} = req.params;
    conexionCategriaSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue desenlazada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro desenlazar la categoria", err, code:"5.1.0"});
    });
}


// ------------ consultas proveedores
//Obtener todas las categorias de un proveedor
exports.obtenerCategoriasProveedorConexion = async (req, res, next)=>{
    const {id} = req.params;
    let id_categorias = [];
    conexionCategriaSchema.find({"id_proveedor": id})
    .then(data => {
        data.map(categoria => {
            id_categorias.push(categoria.id_categoria_globales);
        })
        categoriaGlobalesSchema.find({
            '_id': { $in: id_categorias}
        }, (err, docs) => {
            if (err) {
                res.status(400).send({success: false, message:"Error en encontrar los proveedores", err, code:"5.2.0"});
            } else {
                res.status(200).send({success: true, message:"Los porveedores fueron encontrados", data: docs});
            }
        })
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontraron proveedores", err, code:"5.2.1"});
    });
}

//Obtener todas los proveedores de una categoria
exports.obtenerProveedoresCategoriaConexion = async (req, res, next) => {
    const {id} = req.params;
    let id_proveedores = [];
    conexionCategriaSchema.find({"id_categoria_globales": id})
    .then(data => {
        data.map(proveedor => {
            id_proveedores.push(proveedor.id_proveedor);
        })
        proveedoresSchema.find({
            '_id': { $in: id_proveedores}
        }, (err, docs) => {
            if (err) {
                res.status(400).send({success: false, message:"Error en encontrar los proveedores", err, code:"5.3.0"});
            } else {
                res.status(200).send({success: true, message:"Los porveedores fueron encontrados", data: docs});
            }
        })
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontraron proveedores", err, code:"5.3.1"});
    });
}

//Agregar conexion de categoria con un proveedor
exports.agregarCategoriaConexionProveedor = (req, res, next) => {
    const { id_categoria_globales, id_proveedor } = req.body;
    const nuevaCategoria = conexionCategriaSchema({ id_categoria_globales, id_proveedor });
    nuevaCategoria.save()
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue enlazada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro enlazar la categoria", err, code:"5.4.0"});
    });
}



// ------------ consultas almacenes
//Agregar conexion de categoria con un almacen
exports.agregarConexionCategoriaAlmacen = (req, res, next) => {
    const { id_categoria_globales, id_almacen } = req.body;
    const nuevaCategoria = conexionCategriaSchema({ id_categoria_globales, id_almacen });
    nuevaCategoria.save()
    .then(data => {
        res.status(200).send({success: true, message:"La categoria fue enlazada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro enlazar la categoria", err, code:"5.5.0"});
    });
}

//Obtener todas las categorias de un almacen
exports.obtenerConexionCategoriasAlmacen = async (req, res, next) => {
    const {id} = req.params;
    conexionCategriaSchema.find({"id_almacen": id})
    .then(data =>{
        res.status(200).send({success: true, message:"Las categorias furon encontradas", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontraron las categorias", err, code:"5.6.0"});
    });
}

//Obtener una categoria de un almacen
exports.obtenerConexionCategoriaAlmacen = async (req, res, next)=>{
    const {id} = req.params;
    conexionCategriaSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro la categoria", err, code:"5.7.0"});
    });
}