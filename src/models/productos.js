const { Schema, model } = require("mongoose");

const productosSchema = new Schema(
    {
        id_categoria: {
            type: Schema.ObjectId,
            ref: "categorias",
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
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("productos", productosSchema);