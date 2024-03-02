import { createContext, useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client';
 export const AccountContext = createContext(null)

 const AccountProvider = ({children}) =>{
    const [account , setAccount] = useState(null)
    const [person , setperson] = useState({})
    const[activeUsers ,  Setactive] = useState([])
    const socket = useRef()
    useEffect(() =>{
        socket.current = io('ws://localhost:9000')
        return () => {
            socket.current.disconnect();
        };
    },[])
    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setperson ,
            socket,
            activeUsers,
            Setactive

        }}>
            {children}
        </AccountContext.Provider>
    )
 }

 export default AccountProvider