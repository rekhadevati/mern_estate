import express from  "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import e from "express";
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
console.log("MongoDB connected");
}).catch((err) => {
    console.log(err)
});

const app = express();

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

// parse incoming requests data (https://github.com/expressjs/body-parser