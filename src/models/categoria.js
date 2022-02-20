const { Schema, model } = require("mongoose");

const categoriaSchema = new Schema(
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

module.exports = model("categorias", categoriaSchema);