const { Schema, model } = require("mongoose");

const ModificacionesSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_usuario: {
            type: Schema.ObjectId,
            ref: "usuarios",
            required: true
        },
        fecha:{
            type: Date,
            required: true
        }    
    }
)

const CarpetasSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        id_ubicacion: {
            type: String,
            required: true
        },
        modificaciones: [ModificacionesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("carpetas", CarpetasSchema);