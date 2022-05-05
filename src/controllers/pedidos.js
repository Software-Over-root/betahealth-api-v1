// NOTE: Pedisdos es lo mismo que requisiciones, no se usa este controlador
const PedidosSchema = require("../models/pedidos");


//Agregar pedido
exports.agregarPedido = (req, res, next) => {
    const { id_almacen, id_usuario, productos } = req.body;
    const nuevoPedido = PedidosSchema({ id_almacen, id_usuario, productos });
    nuevoPedido.save()
    .then(data => {
        res.send({success: true, message:"El pedido fue agregado correctamente", data});
    }).catch((err) => {
        res.send({success: false, message:"No se logro guardar el pedido", err});
    });
}

//Obtener todos los pedidos
exports.obtenerPedidos = async (req, res, next)=>{
    PedidosSchema.find()
    .then(data =>{
        res.send({success: true, message:"Informacion obtenida correctamente", data});
    }).catch(err => {
        res.send({success: false, message:"No se lograron obtener los pedidos", err});
    });
}

//Obtener un pedido
exports.obtenerPedido = async (req, res, next)=>{
    const {id} = req.params;
    PedidosSchema.findById(id)
    .then(data =>{
        res.send({success: true , message:"El pedido fue encontrado", data});
    }).catch(err =>{
        res.send({success: false, message:"No se encontro el pedido", err});
    });
}

//Eliminar pedido
exports.eliminarPedido = async (req, res, next) =>{
    const {id} = req.params;
    PedidosSchema.remove({_id : id})
    .then(data => {
        res.send({success: true, message:"El pedido fue eliminado correctamente", data});
    }).catch(err =>{
        res.send({success:false , message:"No se logro eliminar el pedido", err});
    });
}

//Actualizar pedido
exports.actualizarPedido = async (req, res, next) =>{
    const {id} = req.params;
    const { id_almacen, id_usuario, productos }= req.body;
    PedidosSchema.updateOne({_id:id}, {$set:{ id_almacen, id_usuario, productos }})
    .then(data =>{
        res.send({success:true , message:"Se actualizo el pedido correctamente", data});
    }).catch(err=>{
        res.send({success:false, message:"No se logro actualizar el pedido", err});
    });

}
