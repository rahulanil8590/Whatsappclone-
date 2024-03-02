//Material ui component Initialization
import { Box } from '@mui/material'
//end Initialization

// Hooks initialization
  import React, { useContext, useEffect, useState } from 'react'
// Hooks End

// Component import
import ChatTop from './ChatTop'
import ChatCenter from './ChatCenter'
//End Component
// Context
     import { AccountContext } from '../../Context/GoogleAccountDetails' 
import { getConversation } from '../../../Service/Api'
//End
function ChatBox() {
  const { person , account} = useContext(AccountContext)
  const[ conversation , setconversation] = useState({})
  useEffect(() => {
    const getConversationDetails = async() =>{
      let data = await getConversation({senderId : account.sub , receiverId: person.sub })
      console.log(data, " ==data");
      setconversation(data)
    }
    getConversationDetails()
  },[])
  return (
        <Box>
           <ChatTop person={person}/>
           <ChatCenter person={person}
          conversation={conversation}/>
        </Box>
  )
}

export default ChatBox
