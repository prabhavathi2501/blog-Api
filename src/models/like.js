import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  createdAt: { type: Date, default: Date.now },
});

const likeModel = mongoose.model('Like', likeSchema);

export default likeModel