import express from "express";

import { createUser } from "../controllers/user.js";
import fileUpload from "../middleware/file-upload.js";

const userRoute = express.Router();

userRoute.get('/', (req, res)=>{
    res.json({message: "all users"});
});
userRoute.post('/', fileUpload.single("image"), createUser);

export default userRoute;