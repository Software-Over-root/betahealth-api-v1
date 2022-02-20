const { Schema, model } = require("mongoose");


const productosSchema = new Schema(
    {
        _id:{
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

const paquetesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        productos: [productosSchema]  
    },
    {
        timestamps: true
    }
);

module.exports = model("paquetes", paquetesSchema);