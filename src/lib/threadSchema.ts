import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  content: { type: String, required: true },
  weather: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema, "threads");

export default Thread;