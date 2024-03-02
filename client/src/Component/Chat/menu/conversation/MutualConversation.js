import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../Context/GoogleAccountDetails'
import { setConversation } from '../../../../Service/Api'

function MutualConversation({user}) {
  const{ person , setperson, account} = useContext(AccountContext)
    const Component = styled(Box)`
    cursor: pointer;
    display : flex;
    height : 45px;
    padding :  13px 0; 
    `
    const Dp = styled('img')({
        height : '50px',
        width : '50px',
        padding : '0 14px',
        borderRadius : '50%',
        objectFit : 'cover'

    })
    const TextContainer = styled(Box)`
        display: flex;
        align-items: center;
    `
    // Function 
        const getuser = async() =>{
            setperson(user)
            await setConversation({senderId : account.sub , receiverId: user.sub })
        }
    //end
  return (
    <Component onClick={getuser}>
        <Box>
            <Dp src={user?.picture} alt="" />
        </Box>
        <TextContainer>
           <Box>
                <Typography>{user?.name}</Typography>
          </Box>
       </TextContainer>
    </Component>
  )
}

export default MutualConversation
