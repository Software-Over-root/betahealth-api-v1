const { Schema, model } = require("mongoose");

const EventosSchema = new Schema(
    {
        fecha: {
            type: Date,
            required: true
        },
        nombre_evento: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("eventos", EventosSchema);