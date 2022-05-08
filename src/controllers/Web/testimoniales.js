const testimonialesSchema = require("../../models/Web/testimoniales");


//Agregar contacto
exports.agregarTestimonial = (req, res, next) => {
    const {calificacion, opinion, imagen, nombre, tipo} = req.body;
    const nuevaUbicacion = testimonialesSchema({calificacion, opinion, imagen, nombre, tipo});
    nuevaUbicacion.save()
    .then(data => {
        res.status(200).send({success: true, message:"El testimonial fue agregado correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logró guardar el testimonial", err, code:"29.0.0"});
    });
}

//Obtener todos los contactos
exports.obtenerTestimoniales = async (req, res, next)=>{
    testimonialesSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"El testimonial fue encontrado", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se encontró el testimonial", err, code:"29.1.0"});
    });
}

//Obtener un contacto
exports.obtenerUnTestimonial = async (req, res, next)=>{
    const {id} = req.params;
    testimonialesSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"El testimonial fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontró el testimonial", err, code:"29.2.0"});
    });
}

//Eliminar contacto
exports.eliminarTestimonial = async (req, res, next) =>{
    const {id} = req.params;
    testimonialesSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"El testimonial fue eliminado correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logró eliminar el testimonial", err, code:"29.3.0"});
    });
}

//Actualizar contactos
exports.actualizarTestimonial = async (req, res, next) =>{
    const {id} = req.params;
    const {calificacion, opinion, imagen, nombre, tipo}= req.body;
    testimonialesSchema.updateOne({_id:id}, {$set:{calificacion, opinion, imagen, nombre, tipo}})
    .then(data =>{
        res.status(200).send({success:true , message:"Se actualizó el testimonial correctamente", data});
    }).catch(err=>{
        res.status(400).send({success:false, message:"No se logró actualizar el testimonial", err, code:"29.4.0"});
    });

}
