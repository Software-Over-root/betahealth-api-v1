const { Schema, model } = require("mongoose");

const GastosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        id_factura: {
            type: String,
            required: true
        },
        remitente: {
            type: String,
            required: true
        },
        id_subcategoria: {
            type: String,
            required: true
        },
        id_usuario: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("gastos", GastosSchema);