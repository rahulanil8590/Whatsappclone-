export const formatDate =(date) =>{
    let hour = new Date(date).getHours()
    let minute = new Date(date).getMinutes()
    return `${hour < 10 ? '0' + hour : hour } : ${minute < 10 ? '0' + minute : minute}`
}