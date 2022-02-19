const { Schema, model } = require("mongoose");

const PacientesSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_venta: {
            type: String,
            required: true
        }
    }
)

const CampaniasSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        codigo_postal: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        estado_campania: {
            type: Number,
            required: true
        },
        id_usuario: {
            type: String,
            required: true
        },
        pacientes: [PacientesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("campanias", CampaniasSchema);