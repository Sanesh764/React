
require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();

(()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/megablog');
        console.log("database connetion successfully");
    }
    catch(error){
        console.log(error);
        
    }
})();

const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})