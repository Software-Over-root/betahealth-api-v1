const { Schema, model } = require("mongoose");

const ExamenesPreviosSchema = new Schema(
    {
        _id: {
            require: false
        },
        url_documento: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        }
    }
)

const PruevasCovitSchema = new Schema(
    {
        _id: {
            require: false
        },
        url_documento: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        }
    }
)

const FechaVacunacionSchema = new Schema(
    {
        _id: {
            require: false
        },
        fecha: {
            type: Date,
            required: true
        }
    }
)

const CartaConsentimientoSchema = new Schema(
    {
        _id: {
            require: false
        },
        url_documento: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        }
    }
)

const PacientesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        domicilio: {
            type: String,
            required: true
        },
        ciudad: {
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
        id_medico: {
            type: String,
            required: true
        },
        enlace_grupo: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },
        tipo_sangre: {
            type: String,
            required: true
        },
        peso: {
            type: Number,
            required: true
        },
        estatura: {
            type: Number,
            required: true
        },
        sexo: {
            type: Boolean,
            required: true
        },
        estado_paciente: {
            type: Boolean,
            required: true
        },
        fecha_registro: {
            type: Date,
            required: true
        },
        padecimientos: {
            type: String,
            required: true
        },
        medicamentos: {
            type: String,
            require: true
        },
        elodium: {
            type: String,
            required: true
        },
        diagnostico: {
            type: String,
            required: true
        },
        tratamiento: {
            type: String,
            required: true
        },
        sistematologia: {
            type: String,
            required: true
        },
        observaciones: {
            type: String,
            required: true
        },
        vacuna: {
            type: Boolean,
            required: true
        },
        reacciones_adversas: {
            type: String,
            required: true
        },
        oxigenacion: {
            type: Boolean,
            required: true
        },
        tipo_oxigenacion: {
            type: String
        },
        litros_oxigenacion: {
            type: String,
        },
        fecha_vacunacion: [FechaVacunacionSchema],
        pruevas_covit: [PruevasCovitSchema],
        examenes_previos: [ExamenesPreviosSchema],
        cartas_consentimiento: [CartaConsentimientoSchema]
    },
    {
        timestamps: true
    }
);

module.exports = model("pacientes", PacientesSchema);