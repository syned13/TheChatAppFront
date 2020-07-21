import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        nickname: "",
    },
    mutations: {
        setNickname(state, payload){
            state.nickname = payload;
        }
    },
    actions: {
        setNickname(state, payload){
            this.commit("setNickname", payload);
        }
    },
    modules: {},
    getters:{
        getNickname(state){
            return state.nickname;
        }
    }
})