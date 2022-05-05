const { Schema, model } = require("mongoose");

const subCategoriaGSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        id_categoria_gasto: {
            type: Schema.ObjectId,
            ref: "categoria_gastos",
            required: true
        }   
    },
    {
        timestamps: true
    }
);

module.exports = model("sub_categoria_gastos", subCategoriaGSchema);