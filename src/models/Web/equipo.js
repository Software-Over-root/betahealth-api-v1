const { Schema, model } = require("mongoose");

const EquipoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        puesto: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        educacion: {
            type: String,
            required: true
        },
        habilidades: {
            type: String
        },
        referencias: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("equipo", EquipoSchema);