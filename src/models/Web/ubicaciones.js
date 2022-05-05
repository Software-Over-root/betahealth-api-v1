const { Schema, model } = require("mongoose");

const ImagenesSchema = new Schema(
    {
        _id: {
            required: false
        },
        nombre: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        }
    }
);


const UbicacionesSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        locacion: {
            type: String,
            required: true
        },
        latitud: {
            type: Number,
            required: true
        },
        longitud: {
            type: Number,
            required: true
        },
        imagenes: [ImagenesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("ubicaciones", UbicacionesSchema);