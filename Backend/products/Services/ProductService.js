class ProductService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async getByTipo(tipo) {
      return await this.repository.findAllByTipo(tipo);
    }
  
    async create(product) {
      return await this.repository.create(product);
    }
  
    async getAll() {
      return await this.repository.findAll();
    }
  
    async getById(id) {
      return await this.repository.findById(id);
    }
  
    async updateById(id, updates) {
      return await this.repository.updateById(id, updates);
    }
  
    async deleteById(id) {
      return await this.repository.deleteById(id);
    }
  }
  
  export default ProductService;
  