
class PedidoService {


    constructor(repository){
        this.repository = repository;
    }

    async getPedidoOne(){
        // There go the bussines logic
        const pedido = await this.repository.findById(1);

        return pedido
    }

}

export default PedidoService;