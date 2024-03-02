import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
   Conversation : {
        type: String
   },
    senderId : {
        type: String
    },
    receiverId:{
        type : String
    },
    text:{
        type: String
    },
    type:{
        type: String
    }
},
{
    timestamps : true
}
);

const Messagemodel =  mongoose.model('Message', MessageSchema);

export default Messagemodel