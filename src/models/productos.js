const { Schema, model } = require("mongoose");
//FIXME: parametro de precio debe ser float

const productosSchema = new Schema(
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
        unidad_de_medida: {
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

module.exports = model("productos", productosSchema);