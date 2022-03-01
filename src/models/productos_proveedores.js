const { Schema, model } = require("mongoose");

const productosProveedoresSchema = new Schema(
    {
        id_categoria: {
            type: Schema.ObjectId,
            ref: "categorias_proveedores",
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
        },
        cantidad: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("productos_proveedores", productosProveedoresSchema);