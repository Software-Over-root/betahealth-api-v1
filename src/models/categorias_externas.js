// NOTE: Estos son las categorias externas que se encuentran solo en los almacenes foraneos.
const { Schema, model } = require("mongoose");

const categoriasExternasSchema = new Schema(
    {
        
        id_almacen: {
            type: Schema.ObjectId,
            ref: "almacenes",
            required: true
        },   
        nombre: {
            type: String,
            required: true
        }  
    },
    {
        timestamps: true
    }
);

module.exports = model("categorias_externas", categoriasExternasSchema);