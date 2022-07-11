// NOTE: Estos son los productos globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estos productos.
// Errores 4.0.0
const conexionProductoSchema = require("../models/conexion_producto");
const productosGlobalesSchema = require("../models/productos_globales");
const categoriaGlobalesSchema = require("../models/categoria_globales");


//Agregar producto global 4.0.0
exports.agregarProductoGlobal = async (req, res, next) => {
    const { id_categoria_global, nombre, descripcion, unidad_medida } = req.body;
    const nuevoProducto = productosGlobalesSchema({
        id_categoria_global, 
        nombre, 
        descripcion, 
        unidad_medida
    });
    await nuevoProducto.save()
    .then((data) => {
        res.status(200).send({success: true, message:"El producto fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el producto", err, code:"4.0.0"});
    });
}

//Obtener productos globales 4.1.0
exports.obtenerProductosGlobales = async (req, res, next) => {
    productosGlobalesSchema.find()
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.1.0"});
    })
}

//Obtener productos globales por categoria global 4.2.0
exports.obtenerProductosGlobalesCategoria = async (req, res, next) => {
    const {id} = req.params;
    productosGlobalesSchema.find({"id_categoria_global": id})
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.2.0"});
    })
}

//Obtener productos globales por ids 4.3.0
exports.obtenerProductosGlobalesIDs = async (req, res, next) => {
    productosGlobalesSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data =>{
        res.status(200).send({success: true, message:"Productos obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.3.0"});
    })
}

//Obtener un producto global 4.4.0
exports.obtenerUnProductoGlobal = async (req, res, next) => {
    const {id} = req.params;
    productosGlobalesSchema.findById(id)
    .then (data =>{
        res.status(200).send({success: true, message:"Producto obtenido correctamente", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"Producto no encontrado", err, code:"4.4.0"});
    });
}

//Eliminar producto global 4.5.0
exports.eliminarProductoGlobal = async (req, res, next) => {
    const {id} = req.params;
    conexionProductoSchema.find({"id_producto_global": id})
    .then(data => {
        console.log(data);
        if (data.length <= 0) {
            productosGlobalesSchema.remove({_id : id})
            .then(data => {
                res.status(200).send({success: true, message:"Producto eliminado correctamente", data});
            })
            .catch(err => {
                res.status(400).send({success: false, message:"No se logro eliminar el producto", err, code:"4.5.0"});
            });
        } else {
            res.status(200).send({success: false, message:"No se puede eliminar el producto porque tiene enlaces"});
        }
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro eliminar el producto", err, code:"4.5.1"});
    })
}

//actualizar producto global 4.6.0
exports.actualizarProductoGlobal = async (req, res, next) => {
    const {id} = req.params;
    const {id_categoria_global, nombre, descripcion, unidad_medida } = req.body
    productosGlobalesSchema.updateMany({_id:id}, { $set:{
        id_categoria_global, 
        nombre, 
        descripcion, 
        unidad_medida
    }})
    .then(data =>{
        res.status(200).send({success:true , message:"Producto acutalizado correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro actualizar el producto", err, code:"4.6.0"})
    });
} 

// obtener categorias por ids de producto 4.7.0
exports.obtenerCategoriasIdsProductos = async (req, res, next) => {
    let ids_categorias = [];
    let categorias = [];
    productosGlobalesSchema.find({
        _id: {$in: req.body.productos}
    })
    .then( data => {
        data.map(producto => {
            ids_categorias.push(producto.id_categoria_global);
        });

        categoriaGlobalesSchema.find({
            _id: {$in: ids_categorias}
        })
        .then(dataCategoria => {
            data.map(producto => {
                var categoriaBusqueda = dataCategoria.find(categoria => categoria._id + "" === producto.id_categoria_global + "");
                categorias.push({
                    _id: categoriaBusqueda._id,
                    nombre: categoriaBusqueda.nombre,
                    id_producto: producto._id
                })
            })
            res.status(200).send({success: true, message:"Categorias obtenido correctamente", data: categorias});
        }).catch(err => {
            res.status(400).send({success: false, message:"No se encontraron la categoria", err, code:"10.1.0"});
        });
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el producto", err, code:"4.3.0"});
    })
}
