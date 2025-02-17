import mongoose from "mongoose";

const useerSchema = new mongoose.Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  photo: { type: String, require: true },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", useerSchema);

export default userModel;
