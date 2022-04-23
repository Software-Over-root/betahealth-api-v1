const { Schema, model } = require("mongoose");

const conexionProducto = new Schema(
    {
        id_categoria_global: {
            type: Schema.ObjectId,
            ref: "categoria_globales",
            required: true
        },
        id_producto_global: {
            type: Schema.ObjectId,
            ref: "productos_globales",
            required: true
        },
        id_proveedor: {
            type: Schema.ObjectId,
            ref: "proveedores"
        },
        id_almacen: {
            type: Schema.ObjectId,
            ref: "almacenes"
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("conexion_producto", conexionProducto);