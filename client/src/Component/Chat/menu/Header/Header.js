// Hooks initialization
  import React, { useContext, useState } from 'react'
// Hooks End
 // Context
  import { AccountContext } from '../../../Context/GoogleAccountDetails'
 //end
//Material ui component Initialization
   import styled from '@emotion/styled'
   import {Chat as MessageIcon  } from '@mui/icons-material'
   import { Box } from '@mui/material'
//end Initialization
// Component import
 import HeaderMenu from '../HeaderMenu'
  import InfoDrawer from '../../../drawer/InfoDrawer' 
//End Component

function Header() {
    
//Hooks logic
   const[open , Setopen] = useState(false)

//end

// context Logic
   const{account} = useContext( AccountContext)
   console.log(account.picture, "==picture");
//end
//functions
const handleClick = () =>{
    Setopen(!open)
}

//end
    
// component Styling
    const Component = styled(Box)`
        height: 44px;
        background: #ededed;
        padding: 8px 16px;
        display :flex;
        align-item: center;
       `
    const Googlelogo = styled('img')({
        height : 40,
        width: 40,
        borderRadius: '50%',

      })
      const Wrapper = styled(Box)`
            margin-left: auto;
            & > * {
                margin-left: 8px;
                padding: 8px;
                color: rgba(0, 0, 0, 0.6)
            }
            & : first-child{
                font-size: 20px;
                margin-right: 8px;
                margin-top: 2px;

            }`
   // end
  return (
    <Component>
        <Googlelogo onClick={handleClick} src={account?.picture} alt="logo" />
        <Wrapper>
            <MessageIcon/>
           <HeaderMenu Setopen={Setopen}/>
        </Wrapper>
         <InfoDrawer open={open} Setopen={Setopen}/> 
    </Component>
  )
}

export default Header
