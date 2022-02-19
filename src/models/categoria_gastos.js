const { Schema, model } = require("mongoose");

const catGastosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },   
    },
    {
        timestamps: true
    }
);

module.exports = model("categoria_gastos", catGastosSchema);