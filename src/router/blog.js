import express from "express";
import Auth from "../common/auth.js"
import BlogController from "../controller/blogcontroller.js"

const router=express.Router();


router.post("/create",Auth.validate,BlogController.createblog);
router.get("/get",Auth.validate,BlogController.getblog);
router.get("/:id",Auth.validate,BlogController.getBlogById)
router.put("/edit/:id",Auth.validate,BlogController.editblog);
router.delete("/:id",Auth.validate,BlogController.deletedBlog);
router.put("/:id",Auth.validate,BlogController.commentBlog)

export default router