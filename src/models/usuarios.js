const { Schema, model } = require("mongoose");

const usuariosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        }, 
        password: {
            type: String,
            required: true
        }, 
        tipo: {
            type: Number,
            required: true
        }, 
        cargo: {
            type: Number,
            required: true
        }, 
        id_sucursal: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = model("usuarios", usuariosSchema);