// NOTE: Estos son los productos globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estos productos.
const { Schema, model } = require("mongoose");

const productosGlobalesSchema = new Schema(
    {
        id_categoria_global: {
            type: Schema.ObjectId,
            ref: "categoria_globales",
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

module.exports = model("productos_globales", productosGlobalesSchema);