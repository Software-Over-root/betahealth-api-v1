const { Schema, model } = require("mongoose");

const conexionCategria = new Schema(
    {
        id_categoria: {
            type: Schema.ObjectId,
            ref: "categorias_proveedores",
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

module.exports = model("conexion_categoria", conexionCategria);