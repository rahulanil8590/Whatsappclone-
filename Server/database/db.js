import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const userName = process.env.DB_UserName;
const Password = process.env.DB_Password;
const URL = `mongodb://${userName}:${Password}@ac-u6loj55-shard-00-00.pelhhbk.mongodb.net:27017,ac-u6loj55-shard-00-01.pelhhbk.mongodb.net:27017,ac-u6loj55-shard-00-02.pelhhbk.mongodb.net:27017/?ssl=true&replicaSet=atlas-w5rm3g-shard-0&authSource=admin&retryWrites=true&w=majority`
const Connection = async() =>{
    try {
        await mongoose.connect(URL , {useUnifiedTopology : true})
        console.log("DataBase Connected Successfully");
    } catch (error) {
        console.log(" DataBase Connection is failed", error.message);
    }
}

export default Connection;