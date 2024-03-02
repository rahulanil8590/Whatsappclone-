import { Server } from 'socket.io'

 const io = new Server(9000,{
    cors: {
        origin : 'http://localhost:3000'
    }
    
})
    let users = []
 const addUser = (userData , socketid) =>{
    !users.some(user => user.sub == userData.sub) && users.push({...userData ,socketid})

 }
 const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
 const getUser = (userId) => {
    return users.find(user => user.sub === userId);
} 
io.on('connection', (socket) =>{
        console.log("user connected ");

        socket.on('addUsers', userData =>{
            addUser(userData , socket.id)
            io.emit('getUsers', users) 
        })

        socket.on('disconnect', () => {
            console.log('user disconnected');
            removeUser(socket.id);
            io.emit('getUsers', users);
        })
})