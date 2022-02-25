const { Schema, model } = require("mongoose");

const ProductosSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_producto: {
            type: String,
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        }    
    }
)

const OrdenesSchema = new Schema(
    {
        id_proveedor: {
            type: String,
            required: true
        },
        id_usuario: {
            type: String,
            required: true
        },
        productos: [ProductosSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("ordenes_proveedor", OrdenesSchema);