import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/database/config.js";
import blogRouter from "./src/router/blog.js";
import UserRouter from "./src/router/user.js"

dotenv.config();


const app=express();
app.use(express.json());
app.use(cors());

connectDB();
  

const port = process.env.PORT || 4000;



app.get("/",(req,res)=>{
  res.send("welcome to our BLOG APP")
})


app.use("/blog",blogRouter);
app.use("/user",UserRouter);



app.listen(port,()=>{
    console.log("app start listen");
    
})