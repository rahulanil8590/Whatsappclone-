import multer from 'multer';
import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from 'dotenv'
dotenv.config()
const userName = process.env.DB_UserName;
const Password = process.env.DB_Password;
const storage = new GridFsStorage({ 
    url : `mongodb://${userName}:${Password}@ac-u6loj55-shard-00-00.pelhhbk.mongodb.net:27017,ac-u6loj55-shard-00-01.pelhhbk.mongodb.net:27017,ac-u6loj55-shard-00-02.pelhhbk.mongodb.net:27017/?ssl=true&replicaSet=atlas-w5rm3g-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memetype) === -1)  {
            return`${Date.now()}-blog-${file.originalname}`;
        }
           

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 
