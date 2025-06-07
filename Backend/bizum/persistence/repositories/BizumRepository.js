import Bizum from "../mongoose-models/bizum-model.js";

class BizumRepository {
  async create(data) {
    const newBizum = new Bizum(data);
    return await newBizum.save();
  }

  async findAll() {
    return await Bizum.find();
  }

  async findById(id) {
    return await Bizum.findById(id);
  }
}

export default BizumRepository;