import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title:{type:String},
    imageUrl:{type:String},
    content: { type: String},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    createdAt: { type: Date, default: Date.now },

},{
    collection:'blogs',
    versionKey:false
})

const blogModel = mongoose.model("blogs",blogSchema);

export  default blogModel
