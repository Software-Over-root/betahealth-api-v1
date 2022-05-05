const { Schema, model } = require("mongoose");

const ContadoresSchema = new Schema(
    {
        calificacion: {
            type: Number,
            required: true
        },
        total_calificado: {
            type: Number,
            required: true
        },
        casos_exito: {
            type: Number,
            required: true
        },
        dosis_adquirida: {
            type: Number,
            required: true
        },
        pacientes_satisfechos: {
            type: Number,
            required: true
        },
        eventos_realizados:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("contadores", ContadoresSchema);