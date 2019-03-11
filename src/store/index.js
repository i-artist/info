import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        userName:''
    },
    mutations:{
        changeUserName(state,val){
            state.userName=val;
        }
    }
})
export default store