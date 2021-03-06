import Vue from 'vue';
import Vuex from 'vuex';

import { data } from './../shared/data';

Vue.use(Vuex);

const MessageTypeRegistration = "registration";
const MessageTypeMessage = "message";
const MessageTypeNewUser = "newUser";
const MessageTypeGoneUser = "goneUser";
const MessageTypeError = "error";

const MainRoomID = "mainRoom";
const ServerRoomID = "server";

// const webSocketURL = "ws://127.0.0.1:5000/ws";
const webSocketURL = "wss://the-chat-app-api.herokuapp.com/ws";

export default new Vuex.Store({
    state:{
        nickname: "",
        gender: "",
        user: {ID: "", nickname: ""},
        ws: undefined,
        onlineUsers: [],
        currentMessage: "",
        messages: {}, // this should be something like a map of an array of messages, mapping a userID to an array
        mainRoomMessages: [], // meanwhile, we could use this
        errorMessage: ""
    },
    mutations: {
        setNickname(state, payload){
            state.user.nickname = payload;
        },
        setGender(state, payload){
            this.state.gender = payload;
        },
        setUserID(state, payload){
            state.user.ID = payload;
        },
        setUser(state, payload){
            state.user = payload;
        },
        setWs(state, payload){
            state.ws = payload;
        },
        setOnlineUsers(state, payload){
            state.onlineUsers = payload;
        },
        removeUser(state, payload){
            for(let i = 0; i < state.onlineUsers.length; i++){
                if (state.onlineUsers[i].id === payload){
                    state.onlineUsers = state.onlineUsers.splice(i,1);
                    break;
                }
            }
        },
        setErrorMessage(state, payload){
            state.errorMessage = payload;
        },
        setCurrentMessage(state, payload){
            state.currentMessage = payload;
        },
        addOnlineUser(state, payload){
            state.onlineUsers.push(payload);
        },
        addMessageToMainRoom(state, payload){
            state.mainRoomMessages.push(payload);
        },
        closeWs(state){
            state.ws.close();
        }
    },
    actions: {
        setNickname(state, payload){
            state.commit("setNickname", payload);
        },
        closeWs({commit, getters}){
            getters.getWs.close();
            commit("setWs", undefined);
        },
        setWs({commit, dispatch, getters}){
            let ws = new WebSocket(webSocketURL);

            ws.onmessage = function(event){
                let msg = JSON.parse(event.data);
                
                if (msg.messageType === MessageTypeRegistration){
                    commit("setUser", {ID: msg.toID, nickname: getters.getNickname});
                    commit("setUserID", msg.toID);

                    let nicknameMessage = {
                        fromID: getters.getUser.ID,
                        toID: ServerRoomID,
                        messageType: MessageTypeRegistration,
                        body: getters.getUser.nickname
                    }

                    commit("addOnlineUser", {id: getters.getUser.ID, nickname: getters.getUser.nickname});
                    ws.send(JSON.stringify(nicknameMessage));
                }

                if (msg.messageType === MessageTypeMessage){
                    dispatch("getUserFromID", msg).then( (value) => {
                        msg.sender = value;
                        msg.receivedTime = new Date();
                        commit("addMessageToMainRoom", msg);
                    });
                }

                if(msg.messageType === MessageTypeNewUser){
                    dispatch("getOnlineUsers");
                }

                if (msg.messageType === MessageTypeGoneUser){
                    commit("removeUser", msg.body);
                    dispatch("getOnlineUsers");
                }

                if (msg.messageType === MessageTypeError){
                    commit("setErrorMessage", msg.body)
                }
            }

            ws.onclose = function(){
                commit("setErrorMessage", "Ha ocurrido un error y ha sido desconectado");
            }

            commit("setWs", ws);
        },
        async getOnlineUsers  (state)  {
            let response = await data.getOnlineUsers();
            if (response.status === 200){
                state.commit("setOnlineUsers", response.data);
            }
        },
        async sendChatMessage ({getters}){
            let msg = {
                fromID: getters.getUser.ID,
                toID: MainRoomID,
                messageType: MessageTypeMessage,
                body: getters.getCurrentMessage
            }

            getters.getWs.send(JSON.stringify(msg));
        },
        getUserFromID ({getters}, payload){
            let user;
            for(user of getters.getOnlineUsers){
                if(user.id === payload.fromID){
                    return user;
                }
            }

            return undefined;
        }
    },
    modules: {},
    getters:{
        getNickname(state){
            return state.user.nickname;
        },
        getUser(state){
            return state.user;
        },
        getOnlineUsers(state){
            return state.onlineUsers;
        },
        getWs(state){
            return state.ws;
        },
        getCurrentMessage(state){
            return state.currentMessage;
        }
    }
})