import conversation from "../model/Conversation.js";
import Messagemodel from "../model/Message.js"



export const Addmessage = async(req, res) =>{
    try {
        const newMessage =  await new Messagemodel(req.body);
        newMessage.save();
        const conversationmessage = await conversation.findByIdAndUpdate(req.body.Conversation, {message: req.body.text})

       return res.status(200).json("message successfuly enter the database")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getmessage = async(req, res) =>{
    try {
       
        const getmsg = await Messagemodel.find({Conversation : req.params.id})
        return res.status(200).json(getmsg)
    } catch (error) {
        res.status(500).json(error.message)
    }
}