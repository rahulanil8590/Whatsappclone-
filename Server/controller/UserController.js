import User from "../model/Users.js"
 export const addUser = async(req ,res) =>{
  try {
    const exit = await User.findOne({sub : req.body.sub})
    if(exit){
        res.status(200).json({msg : 'User alredy exits'})
        return ;
    }
    const newUser = new User(req.body)
    await newUser.save()
     return res.status(200).json(newUser)

  } catch (error) {
   return res.status(500).json(error.message)
  }
}

export const getUser = async(req , res) =>{
    try {
        const users =  await User.find({})
       return res.status(200).json(users)
    } catch (error) {
       return res.status(500).json(error.message)
    }
}