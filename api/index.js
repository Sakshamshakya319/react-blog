import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.Mongo_URL)
.then(() =>
{
    console.log("Connected to MongoDB successfully!!");
})
.catch((err) =>
{
    console.error(err);
});

const app= express();

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});