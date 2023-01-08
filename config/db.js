const mongoose = require("mongoose");


const connectDB = () =>{
    try {
    
    const conn = mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected`)        
    } catch (error) {
        console.log(error)
    }
}