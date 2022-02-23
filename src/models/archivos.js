const { Schema, model } = require("mongoose");

const ModificacionesSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_usuario: {
            type: String,
            required: true
        },
        fecha:{
            type: Date,
            required: true
        }    
    }
)

const ArchivosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        url_archivo: {
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

module.exports = model("archivos", ArchivosSchema);