import express from "express";
import userController from "../controller/userController.js";


const router=express.Router();

router.post("/register",userController.create);
router.post("/login",userController.login);
router.get('/getuser',userController.getUsers)



export default router;