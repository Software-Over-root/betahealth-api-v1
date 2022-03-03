const { Schema, model } = require("mongoose");

const categoriaProveedoresSchema = new Schema(
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

module.exports = model("categorias_proveedores", categoriaProveedoresSchema);