//Material ui component Initialization
import { Box, Drawer, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import styled from '@emotion/styled';
//end Initialization

// Hooks initialization
  import React from 'react';
// Hooks End

// Component import
import UserProfile from './Profile';
//End Component
const drawerStyle = {
  left : 20,
  top : 17,
  height: '95.3%',
  width : '27.3%',
  boxShadow : 'none'
}

function InfoDrawer({open ,  Setopen}) {
//Hooks logic


//end


//functions
 const handleClose =() =>{
  Setopen(false)
 }
//end


// component Styling
const DrawerHeader = styled(Box)`
    background-color: #008069;
    color: #ffffff;
    height: 107px; 
    display: flex;
    & > svg , & > p{
      margin-top: auto;
      padding: 15px;
      font-weight: 600;

    }    
`
  const Text = styled(Typography)`
      font-size: 18px;    
  `
const Component = styled(Box)`
    background: #ededed;
    height : 85%; 
    color : #000;   
  
` 

// end
  return (
    <>
     <Drawer   
     anchor={'left'}
      open={open}
      onClose={handleClose}
      PaperProps={{sx : drawerStyle}}
      style={{zIndex : 1500}}
      transitionDuration={{ enter: 500, exit: 10000 }}
      hideBackdrop={true}
    >
      <DrawerHeader>
          <ArrowBack onClick={() => Setopen(false)}/>
          <Text>Profile</Text>
      </DrawerHeader>
      <Component>
        <UserProfile/>
      </Component>
    </Drawer>
    </>
  )
}

export default InfoDrawer
