import Product from "../mongoose-models/product-model.js";

class ProductRepository {
  
  async create(data) {
    const product = new Product(data);
    return await product.save();
  }

  async findAll() {
    return await Product.find();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async findAllByTipo(tipo) {
    return await Product.find({ tipo });
  }

  async updateById(id, updates) {
    return await Product.findByIdAndUpdate(id, updates, { new: true });
  }

  async deleteById(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default ProductRepository;
