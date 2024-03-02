// Material Ui component 
import styled from '@emotion/styled';
import { MoreVert } from '@mui/icons-material'
import {  Menu , MenuItem } from '@mui/material'
//Material Ui end section

// Hooks initailize
 import React , {useState} from 'react'
//Hooks end

// Component

// end Component

function HeaderMenu({Setopen}) {
    //Hooks
      const [anchorEl, setAnchorEl] = useState(null);
    //Hooks End
    //convert into Boolean
    const open = Boolean(anchorEl)
   
    // function
    const handleClose =() =>{
        setAnchorEl(null)
        console.log("onclose");
    }
    const handleClick = (e) =>{
        console.log(e.currentTarget,"e.currentTarget ");
        setAnchorEl(e.currentTarget)
    }
    // function end

    // Css styling the Component using material Ui
        const MenuOption = styled(MenuItem)`
            font-size: 14px;
            padding: 15px 60px 5px  24px;
            font-weight: 300;
            color: #4A4A4A

        `
    //style end
  return (
    <>
       
    <MoreVert  onClick={handleClick}/>   
    <Menu 
        anchorEl={anchorEl}
        open={open}
        keepMounted
        getContentAnchorE1 = {null}
        onClose={handleClose}
        anchorOrigin ={{
            vertical : 'bottom',
            horizontal : 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: "right" 
        }}
        
        
      >
        <MenuOption  onClick={() => {handleClose();
         Setopen(true)}}>Profile</MenuOption >
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
    </Menu>
    </>
    
  )
}

export default HeaderMenu
