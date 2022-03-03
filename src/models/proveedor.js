const { Schema, model } = require("mongoose");

const ProveedorSchema = new Schema(
    {
        descripcion_cuenta: {
            type: String,
            required: true
        },
        tipo_proveedor: {
            type: String,
            required: true
        },
        especificacion: {
            type: String,
            required: true
        },
        rfc: {
            type: String,
            required: true
        },
        domicilio: {
            type: String,
            required: true
        },
        contacto: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        numero_cuenta: {
            type: String,
            required: true
        },
        banco: {
            type: String,
            required: true
        },
        divisa: {
            type: String,
            required: true
        },
        encargado: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("proveedores", ProveedorSchema);