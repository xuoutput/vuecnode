import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const  state =  {
    //测试
    count: 34,
    // a1 : 1,
    // a2: 2,
    // todos: {
    //     task: 'hi'
    // },
    //login
    token: window.sessionStorage.getItem('vue_token') || '',
    isLogin: false,
    userInfo: {
        loginname: "",
        avatar_url: "",
        id: ""        
    },

    //UserDel
    // userInfo: {
    //     "loginname": "",
    //     "avatar_url": "",
    //     "githubUsername": "",
    //     "create_at": "2017-01-09T14:21:37.336Z",
    //     "score": 0,
    //     "recent_topics": [
    //         {
    //             "id": "",
    //             "author": {
    //                 "loginname": "",
    //                 "avatar_url": ""
    //             },
    //             "title": "",
    //             "last_reply_at": "2018-03-22T07:57:51.726Z"
    //         }
    //     ],
    //     "recent_replies": [
    //         {
    //             "id": "",
    //             "author": {
    //                 "loginname": "",
    //                 "avatar_url": ""
    //             },
    //             "title": "",
    //             "last_reply_at": "2017-08-11T11:26:47.186Z"
    //         }

    //     ],
    //     "collect_topics": []
    // }

}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
