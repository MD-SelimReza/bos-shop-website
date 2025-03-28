import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  image?: string;
  location?: string;
  password?: string;
}

const UserSchema = new Schema<IUser>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    image: { type: String },
    location: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
