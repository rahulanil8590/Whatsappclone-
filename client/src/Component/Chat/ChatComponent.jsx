import { Dialog , Box} from '@mui/material'
import React, { useContext } from 'react'
//component
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import styled from '@emotion/styled'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../Context/GoogleAccountDetails'
function ChatComponent() {

  const{person} = useContext(AccountContext)
  //css styling 
  const DialogStyle = {
    height : '95%',
    width: '100%',
    margin: '20px',
    boxShadow : 'none',
    overflow : 'hidden',
    borderRadius : '0'
    
  }
  const Compoment = styled(Box)`
       display : flex;`
  const Leftcomponent = styled(Box)`
            min-width : 425px;`
  const Rightcomponent = styled(Box)`
            width : 73%;
            min-width: 300px;
            border-left : 1px solid rgba(0 ,0 ,0 , 0.14);
            height : 100%;
            
            `
            
  // css styling end
  return (
    <Dialog
    open={true}
    fullWidth ={true}
    fullScreen ={true}
    PaperProps={{sx : DialogStyle}}>
      <Compoment>
        <Leftcomponent>
              <Menu/>
        </Leftcomponent>
        <Rightcomponent>
             { Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
        </Rightcomponent>
      </Compoment>
    </Dialog>
  )
}

export default ChatComponent
