import Vue from 'vue';
import Vuex from 'vuex';

import { data } from './../shared/data';

Vue.use(Vuex);

const EventTypeRegistration = "registration";

export default new Vuex.Store({
    state:{
        nickname: "",
        user: {ID: "", nickname: ""},
        ws: undefined,
        onlineUsers: [],
    },
    mutations: {
        setNickname(state, payload){
            state.user.nickname = payload;
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
        setWs({commit, getters}){
            let ws = new WebSocket("ws://127.0.0.1:5000/ws");

            ws.onmessage = function(event){
                let msg = JSON.parse(event.data);
                console.log(getters.getNickname);

                if (msg.messageType === EventTypeRegistration){
                    commit("setUser", {ID: msg.toID, nickname: getters.getNickname});
                    commit("setUserID", msg.toID);
                    console.log(getters.getUser);

                    let nicknameMessage = {
                        fromID: getters.getUser.ID,
                        toID: "server",
                        messageType: EventTypeRegistration,
                        body: getters.getUser.nickname
                    }

                    console.log(nicknameMessage);
                    ws.send(JSON.stringify(nicknameMessage));
                }
            }

            commit("setWs", ws);
        },
        async getOnlineUsers  (state)  {
            let response = await data.getOnlineUsers();
            if (response.status === 200){
                state.commit("setOnlineUsers", response.data);
            }
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
        }
    }
})