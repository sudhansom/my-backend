import express from "express";
import chalk from "chalk";
import cors from "cors";
import fs from "fs";
import path from 'path';

import { dev } from './config/index.js';
import userRoute from "./routes/user.js";

const port = dev.app.port || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use("/api/user", userRoute);

app.use((req, res, next)=>{
    return res.status(404).json({message: "not found..."})
})

app.use((err, req, res, next) => {
    if(req.file){
        fs.unlink(req.file.path, (err)=>{
            console.log(err);
        })
    }
    return res.json({
        message: err.message,
        code: 500
    })
})

app.listen(port, () => {
    console.log(chalk.blueBright(`server running at http://localhost:${port}`));
})