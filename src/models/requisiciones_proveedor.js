const { Schema, model } = require("mongoose");

// NOTE: es una copia del producto al que se le asigna el lote pero cuenta tambien con su identificador de producto
const ProductoSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_producto: {
            type: Schema.ObjectId,
            ref: "productos_globales",
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        unidad_medida: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        }
    }
);

// NOTE: es una copia del proveedor del producto del loper, pero cuenta con el identificador del proveedor
const ProveedorSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_proveedor:{
            type: Schema.ObjectId,
            ref: "proveedores",
            required: true
        },
        nombre_proveedor: {
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
    }
);

// NOTE: Se genera un arreglo de datos de cada uno de los productos de cada provedor y categoria
const DatosRequisicionSchema = new Schema(
    {
        _id: {
            require: false
        },
        proveedor: [ProveedorSchema],
        producto: [ProductoSchema]
    }
);

const RequisicionesSchema = new Schema(
    {
        id_usuario: {
            type: String,
            required: true
        },
        estado: {
            type: Number,
            required: true
        },
        productos: [DatosRequisicionSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("requisiciones_proveedor", RequisicionesSchema);