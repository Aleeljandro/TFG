class BizumService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async submitBizum(data) {
      return await this.repository.create(data);
    }
  
    async listBizums() {
      return await this.repository.findAll();
    }
  
    async getBizumById(id) {
      return await this.repository.findById(id);
    }
  }
  
  export default BizumService;