// NOTE: Estos son las categorias globales que se encuentran solo en almacen general, todos los almacenes tienen relacion con estas categorias.
const { Schema, model } = require("mongoose");

const categoriaGlobalesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("categoria_globales", categoriaGlobalesSchema);