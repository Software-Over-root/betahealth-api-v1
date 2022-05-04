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

const ArchivosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        archivo: {
            type: String,
            required: true
        },
        tipo_archivo: {
            type: String,
            required: true
        },
        id_ubicacion: {
            type: Schema.ObjectId,
            ref: "carpetas",
            required: true
        },
        modificaciones: [ModificacionesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("archivos", ArchivosSchema);