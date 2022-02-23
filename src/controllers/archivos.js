const ArchivosSchema = require("../models/archivos");


//Agregar archivo
exports.agregarArchivo = (req, res, next) => {
    const { nombre, url_archivo, id_ubicacion, modificaciones } = req.body;
    const nuevoArchivo = ArchivosSchema({ nombre, url_archivo, id_ubicacion, modificaciones });
    nuevoArchivo.save()
    .then(data => {
        res.send({success: true, message:"El archivo fue agregado correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el archivo", err});
    });
}

//Obtener todos los archivos
exports.obtenerArchivos = async (req, res, next)=>{
    ArchivosSchema.find()
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener los archivos", err});
    });
}

//Obtener un archivo
exports.obtenerArchivo = async (req, res, next)=>{
    const {id} = req.params;
    ArchivosSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"El archivo fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el archivo", err});
    });
}

//Eliminar archivo
exports.eliminarArchivo = async (req, res, next) =>{
    const {id} = req.params;
    ArchivosSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"El archivo fue eliminado correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar el archivo", err});
    });
}

//Actualizar archivo
exports.actualizarArchivo = async (req, res, next) =>{
    const {id} = req.params;
    const { nombre, url_archivo, id_ubicacion, modificaciones }= req.body;
    ArchivosSchema.updateOne({_id:id}, {$set:{ nombre, url_archivo, id_ubicacion, modificaciones }})
    .then(data =>{
        res.send({success:true , message:"Se actualizo el archivo correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar el archivo", err});
    });

}
