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

const PedidosSchema = new Schema(
    {
        id_almacen: {
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

module.exports = model("pedidos", PedidosSchema);