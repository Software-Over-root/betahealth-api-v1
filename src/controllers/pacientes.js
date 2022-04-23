// Errores: 15.0.0
const pacientesSchema = require("../models/pacientes");


// agregar paciente
exports.agregarPaciente = (req, res, next) => {
    const { 
        nombre,
        apellido,
        domicilio,
        ciudad, 
        telefono, 
        correo, 
        id_medico,
        enlace_grupo,
        edad,
        tipo_sangre,
        peso,
        estatura,
        sexo,
        estado_paciente,
        fecha_registro,
        padecimientos,
        medicamentos,
        elodium,
        diagnostico,
        tratamiento,
        sistematologia,
        observaciones,
        vacuna,
        reacciones_adversas,
        oxigenacion,
        fecha_vacunacion,
        pruevas_covit,
        examenes_previos,
        cartas_consentimiento
     } = req.body;
     var data = { 
        nombre,
        apellido,
        domicilio,
        ciudad, 
        telefono, 
        correo, 
        id_medico,
        enlace_grupo,
        edad,
        tipo_sangre,
        peso,
        estatura,
        sexo,
        estado_paciente,
        fecha_registro,
        padecimientos,
        medicamentos,
        elodium,
        diagnostico,
        tratamiento,
        sistematologia,
        observaciones,
        vacuna,
        reacciones_adversas,
        oxigenacion,
        fecha_vacunacion,
        pruevas_covit,
        examenes_previos,
        cartas_consentimiento
     }
    if (oxigenacion) {
        const { litros_oxigenacion, tipo_oxigenacion } = req.body;
        data.litros_oxigenacion = litros_oxigenacion;
        data.tipo_oxigenacion = tipo_oxigenacion;
    }
    const nuevoPaciente = pacientesSchema(data);
    nuevoPaciente.save()
    .then(data => {
        res.status(200).send({success: true, message:"El paciente fue agregado correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro guardar el paciente", err, code:"15.0.0"});
    });
}


// obtener todos los pacientes
exports.obtenerPacientes = (req, res, next) => {
    pacientesSchema.find()
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener los pacientes", err, code:"15.1.0"});
    });
}


// obtener un paciente
exports.obtenerPaciente = async (req, res, next) => {
    const { id } = req.params;
    pacientesSchema.findById(id)
    .then(data => {
        res.status(200).send({success: true, message:"Informacion obtenida correctamentee", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se logro obtener el paciente", err, code:"15.2.0"});
    });  
}


// eliminar paciente
exports.eliminarPaciente = async (req, res, next) => {
    const { id } = req.params;
    pacientesSchema.remove({ _id: id })
    .then(data => {
        res.status(200).send({success: true, message:"Paciente eliminado correctamente", data});
    })
    .catch(err => {
        res.status(400).send({success: false, message:"No se logro eliminar el paciente", err, code:"15.3.0"});
    }); 
}


// actualizar almacen
exports.actualizarPaciente = async (req, res, next) => {
    const { id } = req.params;
    const { 
        nombre,
        apellido,
        domicilio,
        ciudad, 
        telefono, 
        correo, 
        id_medico,
        enlace_grupo,
        edad,
        tipo_sangre,
        peso,
        estatura,
        sexo,
        estado_paciente,
        fecha_registro,
        padecimientos,
        medicamentos,
        elodium,
        diagnostico,
        tratamiento,
        sistematologia,
        observaciones,
        vacuna,
        reacciones_adversas,
        oxigenacion,
        fecha_vacunacion,
        pruevas_covit,
        examenes_previos,
        cartas_consentimiento
     } = req.body;
    var data = { 
        nombre,
        apellido,
        domicilio,
        ciudad, 
        telefono, 
        correo, 
        id_medico,
        enlace_grupo,
        edad,
        tipo_sangre,
        peso,
        estatura,
        sexo,
        estado_paciente,
        fecha_registro,
        padecimientos,
        medicamentos,
        elodium,
        diagnostico,
        tratamiento,
        sistematologia,
        observaciones,
        vacuna,
        reacciones_adversas,
        oxigenacion,
        fecha_vacunacion,
        pruevas_covit,
        examenes_previos,
        cartas_consentimiento
     }
    if (oxigenacion) {
        const { litros_oxigenacion, fecha_vacunacion } = req.body;
        data.litros_oxigenacion = litros_oxigenacion;
        data.fecha_vacunacion = fecha_vacunacion;
    }
    pacientesSchema.updateOne({ _id: id }, { $set: data})
    .then(data => {
        res.status(200).send({success: true, message:"Paciente actualizado correctamente", data});
    })
    .catch(error => {
        res.status(400).send({success: false, message:"No se logro actualizar el paciente", err, code:"15.4.0"});
    });
}