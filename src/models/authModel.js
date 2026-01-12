import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, default: "Invitado" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export { User }