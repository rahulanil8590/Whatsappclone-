// Api.js
import axios from 'axios';

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        const response = await axios.post(`${url}/add`, data);
        console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to addUser:", error.message);
        return error; // Return the error to the caller
    }
}

export const getUser = async () => {
    try {
        const response = await axios.get(`${url}/users`);
         console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to getUser:", error.message);
        return error; // Return the error to the caller
    }
}
export const setConversation = async (data) => {
    try {
        console.log(data ,"setconver data");
        const response = await axios.post(`${url}/conversation/add`, data);
         console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to SetConversation:", error.message);
        return error; // Return the error to the caller
    }
}
export const getConversation = async (data) => {
    try {
        console.log(data ,"getconver data");
        const response = await axios.post(`${url}/conversation/get`, data);
         console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to getConversation:", error.message);
        return error; // Return the error to the caller
    }
}
export const getMessages = async (id) => {
    try {
        console.log(id,"==getmessages Id");
        const response = await axios.get(`${url}/message/get/${id}`);
         console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to getMessages:", error.message);
        return error; // Return the error to the caller
    }
}

export const newMessages = async (data) => {
    try {
        const response = await axios.post(`${url}/message/add`, data);
         console.log(response.data); // Assuming you want to log the response from the server
        return response.data; // Return the response data if needed
    } catch (error) {
        console.log("Error occurred while making API call to newMessages:", error.message);
        return error; // Return the error to the caller
    }
}
export const uploadfile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}