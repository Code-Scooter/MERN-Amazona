import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true },
    isAdmin: { type: Boolean, default: false, requried: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
