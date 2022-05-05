const { Schema, model } = require("mongoose");

const GastosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
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
            type: Schema.ObjectId,
            ref: "sub_categoria_gastos",
            required: true
        },
        id_usuario: {
            type: Schema.ObjectId,
            ref: "usuarios",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("gastos", GastosSchema);