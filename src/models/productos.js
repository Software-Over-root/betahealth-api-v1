const { Schema, model } = require("mongoose");

const ProductosSchema = new Schema(
    {
        id_categoria: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        unidad_medida: {
            type: String,
            required: true
        },
        precio: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("productos", ProductosSchema);