import User from "../mongoose-models/user-model.js";


class UserRepository {

  async create(data) {
    console.log("presave: ", data);
    const user = new User(data);
    return await user.save();
  }

  async findAll() {
    return await User.find();
  }

  async findById(id) {
    return await User.findOne({ id: id });
  }

  async findByName(name) {
    return await User.findOne({ username: name });
  }

  async updateById(id, updates) {
    return await User.findOneAndUpdate({ id }, updates, { new: true });
  }

  async deleteById(id) {
    return await User.findOneAndDelete({ id });
  }

}

export default UserRepository;