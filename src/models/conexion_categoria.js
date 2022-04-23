// NOTE: Estas son las conexiones de las categorias globales con los proveedores y almacenes.
const { Schema, model } = require("mongoose");

const conexionCategria = new Schema(
    {
        id_categoria_globales: {
            type: Schema.ObjectId,
            ref: "categoria_globales",
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

module.exports = model("conexion_categoria", conexionCategria);