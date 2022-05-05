// NOTE: en la creacion de paqutes si modificamos algun producto si afecta a el paquete, el paquete no tiene costo, su costo es segun el precio del lote
const { Schema, model } = require("mongoose");


const productosSchema = new Schema(
    {
        _id:{
            require: false
        },
        id_producto_global: {
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