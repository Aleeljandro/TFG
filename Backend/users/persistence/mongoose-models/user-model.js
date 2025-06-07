import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
},
);
UserSchema.pre('save', async function(next) {
    try {
      // Check if the password has been modified
      if (!this.isModified('password')) return next();
      
      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      
      next(); // Proceed to save
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  });


const User = mongoose.model('user', UserSchema);

export default User;