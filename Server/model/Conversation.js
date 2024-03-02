import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type : String
    },
    conversation:{
        type : String
    }
},
{
    timestamps : true
}
);

const conversation =  mongoose.model('conversation', ConversationSchema);

export default conversation