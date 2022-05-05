const { Schema, model } = require("mongoose");

const FotosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        vista: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("fotos", FotosSchema);