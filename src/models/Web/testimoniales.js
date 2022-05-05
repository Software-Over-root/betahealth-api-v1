const { Schema, model } = require("mongoose");

const TestimonialesSchema = new Schema(
    {
        calificacion: {
            type: Number,
            required: true
        },
        opinion: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = model("testimoniales", TestimonialesSchema);