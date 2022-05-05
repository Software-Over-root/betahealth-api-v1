const { Schema, model } = require("mongoose");

const ProductosSchema = new Schema(
    {
        tipo: {
            type: String,
            required: true
        },
        descripcion_breve: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        descripcion_completa: {
            type: String,
            required: true
        },
        titulo_secundario: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("productos", ProductosSchema);