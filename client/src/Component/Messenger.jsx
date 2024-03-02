import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog.jsx'
import {AppBar , Box, Toolbar ,styled} from '@mui/material'
import { AccountContext } from './Context/GoogleAccountDetails.js'
import ChatComponent from './Chat/ChatComponent.jsx'
function Messenger() {
  const{account} = useContext(AccountContext)
    const Header = styled(AppBar)`
    height : 125px;
    background : #00A884;
    box-shadow : none;
    `
    const LoginHeader = styled(AppBar)`
    height : 215px;
    background : #00bfa5;
    box-shadow : none;
    `
    const Component = styled(Box)`
    height : 100vh;
    background : #dcdcdc;
    `
  return (
    <Component>
      {
        account ?
        <>
         <Header>
            <Toolbar>

            </Toolbar>
          </Header>
         <ChatComponent/>
        </>
        
        :
     
        <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
       

      <LoginDialog/>
      </>
}
    </Component>
  )
}

export default Messenger
