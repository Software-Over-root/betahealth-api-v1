const categoriaSchema = require("../models/conexion_proveedor_categoria");
const proveedoresSchema = require("../models/proveedor");


//Agregar categoria
exports.agregarCategoriaProveedor = (req, res, next) => {
    const { id_categoria, id_proveedor } = req.body;
    const nuevaCategoria = categoriaSchema({ id_categoria, id_proveedor });
    nuevaCategoria.save()
    .then(data => {
        res.send({success: true, message:"La categoria fue enlazada correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro enlazar la categoria", err});
    });
}

//Obtener todas las categorias
exports.obtenerCategorias = async (req, res, next)=>{
    categoriaSchema.find()
    .then(data => {
        res.send({success: true, message:"La categoria fue encontrada", data});
    }).catch(err => {
        res.send({success: false, message:"No se encontro la categoria", err});
    });
}

//Obtener todas las categorias
exports.obtenerProveedoresCategoria = async (req, res, next)=>{
    const {id} = req.params;
    let id_proveedores = [];
    categoriaSchema.find({"id_categoria": id})
    .then(data => {
        data.map(proveedor => {
            id_proveedores.push(proveedor.id_proveedor);
        })
        proveedoresSchema.find({
            '_id': { $in: id_proveedores}
        }, (err, docs) => {
            if (err) {
                res.send({success: false, message:"Error en encontrar los proveedores", err});
            } else {
                res.send({success: true, message:"Los porveedores fueron encontrados", data: docs});
            }
        })
    }).catch(err => {
        res.send({success: false, message:"No se encontraron proveedores", err});
    });
}


//Eliminar categoria
exports.eliminarCategoriaProveedor = async (req, res, next) =>{
    const {id} = req.params;
    categoriaSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"La categoria fue desenlazada correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro desenlazar la categoria", err});
    });
}