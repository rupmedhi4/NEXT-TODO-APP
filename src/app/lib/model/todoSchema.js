import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: String
});

const todoCollections = mongoose.models.Todos || mongoose.model("Todos", todoSchema);

export default todoCollections;
