const { Schema, model } = require("mongoose");

const AlmacenSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        domicilio: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("almacenes", AlmacenSchema);