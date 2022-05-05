// NOTE: Estos son los productos externos que se encuentran solo en los almacenes foraneos.
const { Schema, model } = require("mongoose");

const productosExternosSchema = new Schema(
    {
        id_categoria_externa: {
            type: Schema.ObjectId,
            ref: "categorias_externas",
            required: true
        },
        id_almacen: {
            type: Schema.ObjectId,
            ref: "almacenes",
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
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("productos_externos", productosExternosSchema);