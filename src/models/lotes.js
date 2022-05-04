// NOTE: el id_producto puede ser tanto de un producto global como de un producto externo.
const { Schema, model } = require("mongoose");

const AlmacenesSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_almacen: {
            type: Schema.ObjectId,
            ref: "almacenes",
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        },
        fecha:{
            type: Date,
            required: true
        }  
    }
)

// NOTE: es una copia del producto al que se le asigna el lote pero cuenta tambien con su identificador de producto.
// NOTE: el id_producto puede ser de un producto global o de un producto externo.
const ProductoSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_producto: {
            type: String,
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
        }  
    }
)

// NOTE: es una copia de la categoria del producto al que se le asigna el lote pero cuenta tambien con su identificador de categoria.
// NOTE: el id_categoria puede ser de una categoria global o de una categoria externa.
const CategoriaSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_categoria: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        }
    }
)

// NOTE: es una copia del proveedor del producto del loper, pero cuenta con el identificador del proveedor.
// NOTE: si es un producto externo la informacion del proveedor no contara con identificadro y posiblemente sin otros datos.
const ProveedorSchema = new Schema(
    {
        _id: {
            require: false
        },
        id_proveedor:{
            type: String,
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
)

const LotesSchema = new Schema(
    {
        id_lote: {
            type: String,
            required: true
        },
        fecha:{
            type: Date,
            required: true
        },
        categoria: [CategoriaSchema],
        producto: [ProductoSchema],
        proveedor: [ProveedorSchema],
        almacenes: [AlmacenesSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("lotes", LotesSchema);