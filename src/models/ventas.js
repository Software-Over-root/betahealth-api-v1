const { Schema, model } = require("mongoose");

const NotasSchema = new Schema(
    {
        _id: {
            require: false
        },
        nota: {
            type: String,
            required: true
        },
        fecha:{
            type: Date,
            required: true
        },
        id_usuario:{
            type: String,
            required: true
        }
    }
)

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
        },
        precio:{
            type: Number,
            required: true
        },
        nombre_producto:{
            type: String,
            required: true
        }
    }
)

const AbonosSchema = new Schema(
    {
        _id: {
            require: false
        },
        fecha: {
            type: Date,
            required: true
        },
        cantidad_abono:{
            type: Number,
            required: true
        },
        id_usuario:{
            type: String,
            required: true
        }       
    }
)

const VentasSchema = new Schema(
    {
        tratamiento: {
            type: String,
            required: true
        },
        metodo_pago: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        id_paciente:{
            type: String,
            required: true
        },
        id_usuario:{
            type: String,
            required: true
        },
        notas: [NotasSchema],
        productos: [ProductosSchema],
        abonos: [AbonosSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("ventas", VentasSchema);