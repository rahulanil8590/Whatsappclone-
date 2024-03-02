//Material ui component Initialization
 import { Box, Typography } from '@mui/material'
//end Initialization

// Hooks initialization
import React, { useContext } from 'react' 

// Hooks End
//context section
  import { AccountContext } from '../Context/GoogleAccountDetails'
import styled from '@emotion/styled'
//end

// Component import

//End Component
function Profile() {
    
//Hooks logic
const {account} = useContext(AccountContext)

//end


//functions


//end


// component Styling
const ImageContainer = styled(Box)`
    display: flex;
    justify-content : center;    
`
const Dp = styled('img')({
    height : '200px',
    width : '200px',
    borderRadius: '50%',
    padding : '25px 0'
})

const Borderappear = styled(Box)`
    background : #fff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0 ,0,0.12);
    & :first-child{
        font-size: 11px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child{
        margin: 14px 0;
        color: #4A4A4A;
    }
`
const Description = styled(Box)`
    padding: 15px 20px 20px 30px;
    & > p{
        font-size : 12px;
        color : #8696a0;
    }
`
 
// end
  return (
    <>
    <ImageContainer>
        <Dp src={account?.picture} alt="" />
    </ImageContainer>
    <Borderappear >
        <Typography>Your Name</Typography>
        <Typography>{account?.name}</Typography>
    </Borderappear >
    <Description>
        <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts.</Typography>
    </Description>
    <Borderappear>
        <Typography>About </Typography>
        <Typography>Eat! Sleep! code! Repeat </Typography>
    </Borderappear>
    </>
  )
}

export default Profile
