import bcrypt from 'bcrypt';

class PedidoService {


    constructor(repository){
        this.repository = repository;
    }

    async login(user){
        // There go the bussines logic
        const userDB = await this.repository.findByName(user.email);
        let isCorrectPassword = false;
        if (userDB){
            isCorrectPassword = await bcrypt.compare(user.password, userDB.password);
        }
    
        if (isCorrectPassword) {
            return {
                "status": "ok",
                "message": "Login successful",
                "user": userDB
            }
        } else {
            return {
                "status": "error",
                "message": "Invalid username or password"
            }
        }
    }

    async register(user){
        // There go the bussines logic
        const userDB = await this.repository.create(user);
        userDB.password = undefined; // Remove password from the response for security
        return userDB

    }

}

export default PedidoService;