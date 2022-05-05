const { Schema, model } = require("mongoose");

const PreguntasSchema = new Schema(
    {
        pregunta: {
            type: String,
            required: true
        },
        respuesta: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("preguntas_frecuentes", PreguntasSchema); 