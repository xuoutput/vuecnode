
// import {ADD} from './mutation-type.js'

export default {
    // increment(state) {
    //     state.count++
    // },
    // decre(state) {
    //     state.count--
    // },
    // [ADD](state, todo) {
    //     state.todos.task = todo
    // }
    updateLoginStatus (state, data) {
        if(data.token) {
            window.sessionStorage.vue_token =  state.token = data.token;
            state.userInfo = data.userInfo
        }else { /* 不更新当然还是从本地拿 */
            state.userInfo = data
        }
        state.isLogin = true
    },
    logout (state) {
        window.sessionStorage.removeItem('vue-token');
        state.token = '';
        state.isLogin = false;
    }
}