import React, { useContext } from 'react'
import { Box, Typography ,styled } from '@mui/material'
import { formatDate } from '../../../util/commonutil'
import { AccountContext } from '../../Context/GoogleAccountDetails';
import {GetApp } from '@mui/icons-material'
const Text = styled(Typography)`
font-size: 14px;
padding: 0  25px 0 5px;
`

const Time = styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 6px;
word-break: keep-all;
margin-top: auto;
align-self: flex-end;
`

function Msg({Messages}) {
    const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 80%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    word-break: break-word;
`;
    const Own = styled(Box)`
        background : #dcf8c6;
        padding: 5px;
        max-width: 80%;
        margin-left: auto;
        width: fit-content;
        display: flex;
        flex-direction: column;
        word-break: break-word;
        border-radius: 10px;
    `
  
    const {account} = useContext(AccountContext)
  return (
    <>
    
    {
            account.sub === Messages.senderId ? 
            <Own>
              {
                Messages.type === 'image' ? <ImageMessage Messages={Messages}/> : <TextMessage Messages={Messages} />
              }
           </Own>
           : 
           <Wrapper>
            <Text>{Messages.text}</Text>
            <Time>{ formatDate(Messages.createdAt)}</Time>
         </Wrapper>

    }
    
    </>
       

    
  )
}

const TextMessage = ({Messages}) =>{
  return(
    <>
      <Text>{Messages?.text}</Text>
      <Time>{ formatDate(Messages?.createdAt)}</Time>
    </>
  )
}

const ImageMessage =({Messages}) =>{
  return (
    <Box style={{position: 'relative'}}>
    {
      Messages?.text?.includes('.pdf') ? 
      <Box>

      </Box>
      : 
      <img style={{width: 300 , height: 300 , objectFit: 'cover'}} src={Messages?.text} alt={Messages?.text.split('/').pop()}/>
    }
     <Time style={{position: 'absolute', right: 2 , bottom: 2 , color: '#000'}}>
      <GetApp
      style={{marginRight: 10 , border: ' 1px solid #000' , borderRadius: '50%', color: '#000'}}
      fontSize='small'
      
      />
      { formatDate(Messages.createdAt)}</Time>
    </Box>
  )
}

export default Msg
