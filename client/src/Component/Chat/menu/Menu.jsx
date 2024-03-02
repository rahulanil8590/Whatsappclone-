import React, { useState } from 'react'

import { Box } from '@mui/material'
//component
import Header from './Header/Header'
import SearchFeild from './Search/SearchFeild'
import Conversation from './conversation/Conversation'

function Menu() {
  const[Text , setText ] = useState('')
  return (
   <Box>
        <Header/>
        <SearchFeild setText={setText}/>
        <Conversation Text={Text}/>
   </Box>
  )
}

export default Menu
