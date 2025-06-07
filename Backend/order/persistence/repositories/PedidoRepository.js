import Pedido from "../mongoose-models/pedido-models.js";


class PedidoRepository {

  async create(data) {
    const pedido = new Pedido(data);

    return await pedido.save();
  }

  async findAll() {

    return await Pedido.find();
  }

  async findById(id) {
    
    return await Pedido.findOne({ id: id });
  }

  async updateById(id, updates) {

    return await Pedido.findOneAndUpdate({ id }, updates, { new: true });
  }

  async deleteById(id) {

    return await Pedido.findOneAndDelete({ id });
  }

}

export default PedidoRepository;