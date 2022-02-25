const { Schema, model } = require("mongoose");

const AlmacenesSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_almacen: {
            type: String,
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        }    
    }
)

const LotesSchema = new Schema(
    {
        id_producto: {
            type: String,
            required: true
        },
        id_proveedor: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        almacenes: [AlmacenesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("lotes", LotesSchema);