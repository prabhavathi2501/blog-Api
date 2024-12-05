import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel