//Material ui component Initialization
import { Box ,Typography , styled } from '@mui/material'
import {Search , MoreVert} from '@mui/icons-material'
//end Initialization
// data 
  import {defaultProfilePicture} from '../../Data'
//end

// Hooks initialization
import React, { useContext } from 'react'
import { AccountContext } from '../../Context/GoogleAccountDetails'
// Hooks End

// Component import

//End Component
function ChatTop({person}) {
  const {activeUsers} = useContext(AccountContext)
  // css style
  const Component = styled(Box)`
    display: flex;
    padding: 6px 10px;
    align-items: center;
    height: 41px;
    background: #ededed;

  `
  const Dp = styled('img')({
    height : 40,
    width: 40,
    borderRadius : '50%',
    objectFit: 'cover',
  })
  const HeaderProfile = styled(Box)`
    display: flex;
    align-items: center;
  `
  const Name = styled(Typography)`
    margin-left : 12px !important;
  `
  const Status = styled(Typography)`
  margin-left : 12px !important;
  font-size : 12px;
  color: rgba(0 ,0, 0, 0.6 )
`
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg{
      font-size: 24px;
      color: #000;
      padding: 8px;
    }
`
  //end
  return (
    <Component>
        <HeaderProfile>
           <Dp src={person ? person.picture : defaultProfilePicture} alt="dp" />
           <Box>
              <Name>{person?.name}</Name>
              <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'online' : 'offline'}</Status>
           </Box>
        </HeaderProfile>
        <RightContainer>
           <Search/>
           <MoreVert/>
        </RightContainer>
    </Component>
  )
}

export default ChatTop
