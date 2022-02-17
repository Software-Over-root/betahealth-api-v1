const productosSchema = require("../models/productos");

exports.agregarProducto = async (req, res, next) => {
    const { id_categoria, nombre, descripcion, unidad_medida, precio } = req.body;
    const nuevoProducto = productosSchema({ id_categoria, nombre, descripcion, unidad_medida, precio });
    await nuevoProducto.save()
    .then((result) => {
        res.send({success: true, message:"El producto fue agregado correctamente", type: result});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el producto", type: err});
    });
}