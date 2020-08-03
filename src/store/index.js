import Vue from 'vue';
import Vuex from 'vuex';

import { data } from './../shared/data';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        nickname: "",
        ws: undefined,
        onlineUsers: [],
    },
    mutations: {
        setNickname(state, payload){
            state.nickname = payload;
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
        setWs(state){
            state.commit("setWs", new WebSocket("ws://127.0.0.1:5000/ws"));
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
            return state.nickname;
        }
    }
})