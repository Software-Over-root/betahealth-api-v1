const ArchivosSchema = require("../models/archivos");


//Agregar archivo
exports.agregarArchivo = (req, res, next) => {
    const { nombre, archivo, tipo_archivo, id_ubicacion, modificaciones } = req.body;
    const nuevoArchivo = ArchivosSchema({ nombre, archivo, tipo_archivo, id_ubicacion, modificaciones });
    nuevoArchivo.save()
    .then(data => {
        res.status(200).send({success: true, message:"El archivo fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar el archivo", err, code:"20.1.0"});
    });
}

//Obtener todos los archivos
exports.obtenerArchivos = async (req, res, next)=>{
    ArchivosSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se lograron obtener los archivos", err, code:"20.2.0"});
    });
}

//Obtener un archivo
exports.obtenerArchivo = async (req, res, next)=>{
    const {id} = req.params;
    ArchivosSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El archivo fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro el archivo", err, code:"20.3.0"});
    });
}

//Eliminar archivo
exports.eliminarArchivo = async (req, res, next) =>{
    const {id} = req.params;
    ArchivosSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El archivo fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar el archivo", err, code:"20.4.0"});
    });
}

//Actualizar archivo
exports.actualizarArchivo = async (req, res, next) =>{
    const {id} = req.params;
    const { nombre, archivo, tipo_archivo, id_ubicacion, modificaciones }= req.body;
    ArchivosSchema.updateOne({_id:id}, {$set:{ nombre, archivo, tipo_archivo, id_ubicacion, modificaciones }})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizo el archivo correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logro actualizar el archivo", err, code:"20.5.0"});
    });

}

// Obtener archicos por ruta
exports.obtenerArchivoRuta = async (req, res, next) => {
    const {id} = req.params;
    ArchivosSchema.find({"id_ubicacion": id})
    .then( data => {
        res.status(200).send({success: true, message:"Archivo obtenido correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontro archivo", err, code:"19.5.0"});
    })
}

