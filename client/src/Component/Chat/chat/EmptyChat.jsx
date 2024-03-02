//Material ui component Initialization
import { Box, Typography ,Divider } from '@mui/material'
//end Initialization
//Data Using Link
import{emptyChatImage } from '../../Data'
//End
// Hooks initialization
import React from 'react'
import styled from '@emotion/styled'
// Hooks End

// Component import

//End Component

function EmptyChat() {
  
//Hooks logic


//end


//functions


//end


// component Styling
 const Component  = styled(Box)`
    height: 100%;
    background: #f8f9fa;
    padding: 30px 0;
    text-align : center;
 `
  const Container = styled(Box)`
    padding: 0 40px;
  `
const Image = styled('img')({
  width : 400,
  objectFit : 'cover',
  marginTop: 100, 
})

const Title = styled(Typography)`
      width: 400px;
      font-size: 32px;
      margin: 25px auto;
      font-weight: 300;
      font-family: inherit;
      color: #41525d;     
`
const Subtitle = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    font-family: inherit;
    color: #667781;
`
const NewBtn = styled('span')({
  width: '15px',
  borderRadius: '8px',
  fontSize:  '12px',
  background: '#ededed',
  padding: '.1rem',    
  textAlign: 'center'
})
   const StyledDivider = styled(Divider)`
      margin: 40px 0;
      opcity: 0.4;
   `
// end
  return (
    <>
     <Component>
          <Container>
            <Image src={emptyChatImage} alt="" />
            <Title>WhatsApp Web <NewBtn>New</NewBtn></Title>
            <Subtitle>Now send and receive message without keeping your phone online</Subtitle>
            <Subtitle>Use WhatsApp on up to 4 deveice and 1 phone at the same time</Subtitle>
            <StyledDivider/>
          </Container>
     </Component>
    </>
  )
}

export default EmptyChat
