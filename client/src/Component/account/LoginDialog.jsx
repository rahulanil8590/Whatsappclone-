import React, { useContext } from 'react'
import './LoginDailog.css'
import { Box, Dialog, List, ListItem, Typography } from '@mui/material'
import { qrCodeImage } from '../Data'
import styled from '@emotion/styled'
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"
import { AccountContext } from '../Context/GoogleAccountDetails'
import { addUser } from '../../Service/Api'
function LoginDialog() {
  const{setAccount } = useContext(AccountContext)
 const onLoginSuccess = async (res) =>{
      const decoder = jwtDecode(res.credential)
      setAccount(decoder)
     await addUser(decoder)
 }
 const onLoginError = (res) =>{
  console.log("login failed", res);

 }
const DialogStyle = {
  height : '96%',
  marginTop: '10%',
  boxShadow : 'none',
  overflow : 'none'
  
}
 const Component = styled(Box)`
    display : flex;
    
    `
 const Container = styled(Box)`
    padding: 56px 0 56px 56px`
  const Qrcode = styled('img')({
    height : 256,
    width: 256,
    margin: '50px 0 0 50px'
  })
  const Title = styled(Typography)`
    font-size: 26px;
    font-weight: 300;
    color: #41525d;
    font-family: inherit;
    margin-bottom: 20px;
    `
   const styledList = styled(List)`
     & > li {
      padding: 0;
      margin-top: 15px;
      font-size: 18px;
      line-height: 12px;
      color: red;
     }`   
  return (
    <Dialog   
    open={true}
    fullWidth ={true}
    maxWidth ={'md'}
    PaperProps={{sx : DialogStyle}}
    hideBackdrop={true}
   >
      <Component>
        <Container>
            <Title> Use WhatsApp on your computer:</Title>
            <styledList>
              <ListItem> 1. Open WhatsApp on your phone</ListItem>
              <ListItem>2. Tap Menu : on Android or Setting on iPhone</ListItem>
              <ListItem>3. Tap linked device and then Link a device</ListItem>
              <ListItem>4. Point your phoneat this screen to capture the QR code</ListItem>
            </styledList>
        </Container>
        <Box style={{position : 'relative'}}>
            <Qrcode src={qrCodeImage} alt="" />
            <Box style={{position: ' absolute' , top : '50%' , transform : 'translate(40%)'}}>
              <GoogleLogin
                onSuccess={onLoginSuccess}
              onError={onLoginError}/>
            </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog
