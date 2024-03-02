import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../../../Service/Api'
import { Box , Divider, styled} from '@mui/material'
import MutualConversation from './MutualConversation'
import { AccountContext } from '../../../Context/GoogleAccountDetails'


function Conversation({Text}) {
  const{account , socket , Setactive} = useContext( AccountContext)
    const Component = styled(Box)`
    height: 81vh;
    overflow: hidden;
    `
    const StyleDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .3;
    `
    const[Users , setUsers] = useState([])
    const  fetchUsers = async() =>{
     let response =  await getUser()
     console.log(response,"==response of getusetfrg");
     let FilterData =   await response?.filter(user => user.name.toLowerCase().includes(Text.toLowerCase()))
      setUsers(FilterData)
    }
    useEffect(() =>{
        fetchUsers()
    },[Text])
    useEffect(() =>{
        socket.current.emit('addUsers', account)
        socket.current.on('getUsers', users => {
          console.log('users socket', users);
            Setactive(users)
        })
        return () => {
          socket.current.off('getUsers');
      };
    },[account])   
  return (
    <Component >
        {
            Users?.map(( user) =>{
               return <>
                  {
                     account.sub !== user?.sub  && <MutualConversation user={user}/> 
                  }
                  <StyleDivider/>
                </>
                
            })
        }
    </Component>
  )
}

export default Conversation
