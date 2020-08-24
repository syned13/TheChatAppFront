import * as axios from 'axios'

// const API_URL = "http://127.0.0.1:5000";
const API_URL = "https://the-chat-app-api.herokuapp.com";

const getOnlineUsers = async function(){
    let response = undefined;

    try{
        response = await axios.get(API_URL + "/nickname");
    }catch(err){
        return err.response;
    }

    return response;
}

export const data = {
    getOnlineUsers
}