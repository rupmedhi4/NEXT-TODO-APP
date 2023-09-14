import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: String,
  completed : String
});

const todoCollections = mongoose.models.addtodos || mongoose.model("addtodos", todoSchema);

export default todoCollections;
