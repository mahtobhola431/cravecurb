import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://bholamahto255:bhola1234@cluster0.ohgqmio.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
