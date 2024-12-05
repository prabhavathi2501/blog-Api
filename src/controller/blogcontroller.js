import blogModel from "../models/blog.js";
import Auth from "../common/auth.js";
import commentModel from "../models/comment.js";
import likeModel from "../models/like.js";


const createblog =async(req,res)=>{
    try {
        const { title, content, author } = req.body;
        const blog = new blogModel({ title, content, author });
        await blog.save();
        res.status(201).json(blog);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
const getblog =async(req,res)=>{
try {

    let blogs = await blogModel.find({},{_id:1,title:1,content:1,imageUrl:1,createdAt:1,comments:1,likes:1}).sort({createdAt:1})
    res.status(200).send({
        message:"Blogs Fetched Successfully",
        blogs
    })
    
    
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

const editblog =async(req,res)=>{

   try {
    const bolgId=req.params.id;
    if(bolgId){
        const{title,content,comments,likes,imageUrl}=req.body;
        let blog = await blogModel.findById(bolgId)
            blog.title= title,
            blog.content = content,
            blog.imageUrl=imageUrl,
            blog.comments=comments,
            blog.likes=likes,
            blog.modifiedAt = Date.now()

            await blog.save();
            res.status(201).send({
                message:"edit sucessfully"
            })
        }
        else{
            res.send({
                message:"id not found"
            })
        }
    
   } catch (error) {
       res.status(500).send({
        message:"internal server error",
        error:error.message
       }
      
       )
   }

    }

    const getBlogById =async(req,res)=>{
        try {
            const blogId = req.params.id
            if(blogId)
            {
                let blog = await blogModel.findById(req.params.id)
                res.status(200).send({
                    message:"Blog Data Fetched Successfully",
                    blog
                })
            }
            else
            {
                res.status(400).send({message:"Blog Id Not found"})
            }   
        } catch (error) {
           res.status(500).send({
            message:"Internal Server Error",
            error:error.message
           }) 
        }
    }

    const deletedBlog= async(req,res)=>{
        try {
            const blogId=req.params.id;
            if(blogId){
                await blogModel.findByIdAndDelete(blogId);
                res.status(200).send({
                    message:"dataled sucess"
                })
            }
            else{
                res.status(400).send({message:"id not found"})
            }
        } catch (error) {
            res.status(500).send({
                message:"internal server error",
                error:error.message
            })
        }

    }

const commentBlog=async(req,res)=>{
try {
    const blogId=req.params.id;
    const{comments,likes}=req.body;

    const comment=new comment({blog:blogId,comments,likes});
    
    await comment.save();
    

    await blogModel.findByIdAndUpdate(blogId,{$push:{comments:comment._id}});
    res.status(200).send({
        message:"comment added",
        comment
    })

} catch (error) {
    res.status(500).send({
        message:"internal sever error",
        error:error.message
    })
    
}

}
  


export default{
    createblog,
    getblog,
    editblog,
    getBlogById,
    deletedBlog,
    commentBlog
}