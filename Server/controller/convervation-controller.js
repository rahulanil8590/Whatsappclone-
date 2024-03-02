import conversation from "../model/Conversation.js";

export const newConversation = async(req, res) =>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId

        const exit = await conversation.findOne({members:{$all : [senderId , receiverId]}})
        if(exit){
          return  res.status(200).json('Conversation already exit')
        }
        const newConversation = new conversation({
            members : [senderId ,receiverId]
        })
        await newConversation.save()
       return res.status(200).json( 'Conversation  saved successfully')
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getConversation = async(req, res) =>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId
        const Conversation = await conversation.findOne({members:{$all : [senderId , receiverId]}})
       return res.status(200).json( Conversation)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
