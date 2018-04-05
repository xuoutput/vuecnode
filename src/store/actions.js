
// import {ADD} from './mutation-type.js'

export default {
    // messages1.js中测试用 vuex
    // adg({commit}, task) {
    //     // 原始模式
    //     // commit('add', task)
    //     // 没有import {ADD}下要加上''引号
    //     // commit('ADD', task)
    //     // 下面的是import后
    //     commit(ADD, task)
    // }
    login({commit}, data) {
        commit('updateLoginStatus', data)
    } 
}