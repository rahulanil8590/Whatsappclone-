//Material ui component Initialization
import { Box , styled} from '@mui/material'
//end Initialization

// Hooks initialization
   import React, { useContext , useEffect, useRef, useState} from 'react'
// Hooks End

// Component import
import ChatBottom from './ChatBottom';
import { AccountContext } from '../../Context/GoogleAccountDetails';
import { getMessages, newMessages } from '../../../Service/Api';
import Msg from './Msg';
//End Component
function ChatCenter({person ,conversation}) {
  const [value , setvalue] = useState('')
  const[ message , setmessage] = useState([])
  const[newmessageFlag , SetmessageFlag] = useState(false)
  const[file , setfile] = useState()
  const [image , setImage] = useState('')
  const{account} = useContext(AccountContext)
  console.log(conversation._id , " error ==");
  const getMessageDetails = async() =>{
    const data = await getMessages(conversation?._id)
    setmessage(data)
    console.log(data , "==getmessages");
  }
  useEffect(()=>{
    conversation?._id && getMessageDetails()
   }, [conversation?._id , person._id , newmessageFlag])
   const scrollref = useRef()
   useEffect(() =>{
   scrollref.current?.scrollIntoView({transition: 'smooth'})
   },[message])
  const Wrapper = styled(Box)`
  background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size: 50%;
  `
  const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;
  const Container = styled(Box)`
     padding: 10px 80px;
  `
const SendText = async(e) => {
  let code = e.keyCode || e.which;
  console.log(code, "===code");
  if (code === 13) {
    let messages ={}
    if(!file){
      messages = {
        senderId: account.sub,
        receiverId: person.sub,
        Conversation: conversation._id,
        type: 'text',
        text: value
      }
    }else{
      console.log(image, "===imAGE");
      messages = {
        senderId: account.sub,
        receiverId: person.sub,
        Conversation: conversation._id,
        type: 'image',
        text: image
      }

    }
  
    console.log(messages, "==message");
    await newMessages(messages);
    SetmessageFlag(prev => !prev)
    setvalue('')
    setfile()
    setImage('')
  }
}


  return (
    < Wrapper>
        <Component>
            {
              message && message?.map(Messages => {
              return(
                <Container ref={scrollref}>
                  <Msg Messages={Messages}/>
                </Container>
                
              )
              })
            }
        </Component>
        <ChatBottom 
          sendText={SendText}
          setvalue={setvalue}
          value={value}
          file={file}
          setfile={setfile}
          setImage={setImage}
        />
    </ Wrapper>
  )
}

export default ChatCenter
