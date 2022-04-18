const { Schema, model } = require("mongoose");

const conexionProducto = new Schema(
    {
        id_producto: {
            type: Schema.ObjectId,
            ref: "productos_proveedores",
            required: true
        },
        id_proveedor: {
            type: Schema.ObjectId,
            ref: "proveedores",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("conexion_producto", conexionProducto);