// NOTE: estas son las requisiciones para surtir los almacenes foraneos o el almacen principal.
// NOTE: el pago de la requisicion puede diferirse a mese, pago unico o cortesia.
// NOTE: pasps de una requisicion de productos:
// 1.- el almacen levanta la requisicion sin asinar un proveedor
// 2.- finanzas cotiza con diferentes proveedores hasta asignarle uno
// 3.- llega el paquete y se verifica que todo venga bien si es asi se termino la requisicion
    //3.1.- si el producto llego incompleto se levanta una orden y se insertan los productos que llegaron bien
    //      y los faltantes por medio de algoritmo se genera una requisicion especial sin costo
    //      esta requisicion especial "sin costo", esta puede solucionarce cuando el proveedor envie los productos 
    //      o si el proveedor regresa el dinero, si lo regresa se tiene que generar un rembolso (nueva vista).
// Errores: 14.0.0
const RequisicionesProveedorSchema = require("../models/requisiciones_proveedor");


//Agregar requisicion
exports.agregarRequisicion = (req, res, next) => {
    const { id_usuario, productos, estado } = req.body;
    console.log(productos);
    const nuevaOrden = RequisicionesProveedorSchema({ id_usuario, productos, estado });
    nuevaOrden.save()
    .then(data => {
        res.status(200).send({success: true, message:"La orden fue agregada correctamente", data});
    }).catch((err) => {
        res.status(400).send({success: false, message:"No se logro guardar la orden", err, code:"14.0.0"});
    });
}

//Obtener todas las requisiciones
exports.obtenerRequisiciones = async (req, res, next)=>{
    RequisicionesProveedorSchema.find()
    .then(data =>{
        res.status(200).send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se lograron obtener las ordenes", err, code:"14.1.0"});
    });
}

//Obtener una requisicion
exports.obtenerRequisicion = async (req, res, next)=>{
    const {id} = req.params;
    RequisicionesProveedorSchema.findById(id)
    .then(data =>{
        res.status(200).send({success: true , message:"La orden fue encontrado", data});
    }).catch(err =>{
        res.status(400).send({success: false, message:"No se encontro la orden", err, code:"14.2.0"});
    });
}

//Eliminar requisicion
exports.eliminarRequisicion = async (req, res, next) =>{
    const {id} = req.params;
    RequisicionesProveedorSchema.remove({_id : id})
    .then(data => {
        res.status(200).send({success: true, message:"La orden fue eliminada correctamente", data});
    }).catch(err =>{
        res.status(400).send({success:false , message:"No se logro eliminar la orden", err, code:"14.3.0"});
    });
}

//Actualizar requisicion
exports.actualizarRequisicion = async (req, res, next) =>{
    const {id} = req.params;
    const { id_usuario, productos, estado } = req.body;
    RequisicionesProveedorSchema.updateOne({_id:id}, {$set:{ id_usuario, productos, estado }})
    .then(data =>{
        res.status(200).send({success: true , message:"Se actualizo la orden correctamente", data});
    }).catch(err=>{
        res.status(400).send({success: false, message:"No se logro actualizar la orden", err, code:"14.4.0"});
    });

}

//Obtener todas las requisiciones
exports.obtenerRequisicionesPorEstatus = async (req, res, next)=>{
    let estatus = req.params.estatus;
    RequisicionesProveedorSchema.find({
        "estado": estatus
    })
    .then(data =>{
        res.status(200).send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.status(400).send({success: false, message:"No se lograron obtener las ordenes", err, code:"14.5.0"});
    });
}
