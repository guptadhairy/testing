import express from "express";
import {config} from "dotenv";
const app = express();

config({
    path: "./config/config.env"
});
app.listen(process.env.PORT, ()=>{
    console.log(`Server is successfully connected on Port ${process.env.PORT}`)
})

app.get("/", (req,res)=>{
    res.json({
        message: "Server is connected"
    })
})