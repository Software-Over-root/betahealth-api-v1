const { Schema, model } = require("mongoose");

const ContactoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        e_mail: {
            type: String,
            required: true
        },
        mensaje: {
            type: String,
            required: true
        },
        asunto: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = model("contacto", ContactoSchema);