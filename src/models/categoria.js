const { Schema, model } = require("mongoose");

const categoriaSchema = new Schema(
    {
        
        id_almacen: {
            type: Schema.ObjectId,
            ref: "almacenes",
            required: true
        },   
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