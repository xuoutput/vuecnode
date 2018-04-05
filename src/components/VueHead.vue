<template>
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <router-link to="/" class="brand">
                    <img src="../assets/logo.png" alt="newbie"><span>NEWBIE</span>                     
                </router-link>
                <form action="" id="search_form" class="navbar-search">
                    <input type="text" id="q" class="search-query span3">
                </form>
                <ul class="nav pull-right">
                    <li><router-link :to="{name: 'HomeRoute'}">首页</router-link></li>
                    <li><router-link :to="{name: 'MessagesRoute'}" v-show="isLogin">未读消息</router-link></li>
                    <li><router-link :to="{name: 'ApiRoute'}">API</router-link></li>
                    <li><router-link :to="{name: 'AboutRoute'}">关于</router-link></li>
                    <li><router-link :to="{name: 'SettingRoute'}" v-show="isLogin">设置</router-link></li>
                    <li><router-link :to="{name: 'SignUpRoute'}" v-show="!isLogin">注册</router-link></li>
                    <li><router-link :to="{name: 'LoginRoute'}" v-show="!isLogin">登录</router-link></li>
                    <li><a v-show="isLogin" @click="logout">退出</a></li>
                    <!-- 这里 退出不要用router-link了 因为没有to参数 -->
                    <!-- <li><router-link v-show="isLogin" @click="logout">退出</router-link></li> -->
                    <!-- <li v-if="!getToken.length"><router-link to="/login">登录</router-link></li>
                    <template v-else-if="getToken.length">
                        <li><router-link to="/create">发布话题</router-link></li>
                        <li><router-link to="/msg">未读消息</router-link></li>
                        <li><a @click="logOut" href="javascript:void(0)">退出</a></li>
                    </template>                     -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
      return {

      }
  },
  computed: {
      ...mapState({
          isLogin: state => state.isLogin
      })
  },
  methods: {
      //下面两种都可以
      logout () {
          this.$store.commit('logout');
          this.$router.push('/')          
      },
    //   ...mapMutations({
    //       logout: 'logout'
    //   })
  }
}
</script>

<style lang="less" scoped>
.navbar {

    width: 100%;
    // margin-bottom: 0;

    // font-size: 13px;
    background: #01a7ef;

    .navbar-inner {
        width: 90%;
        margin: auto;
        padding: 5px;

        .container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            width: 100%;
            min-width: 960px;
            max-width: 1400px;
            margin: 0 auto;

            .brand {
                order: 1;

                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;

                width: 120px;
                height: 45px;
                padding: 0 20px;
                margin-left: -20px;

                font-size: 20px;
                font-weight: 200;
                color: #fff;

                img {
                    height: 45px;
                    vertical-align: middle;
                    border: 0;
                }
            }
            .navbar-search {
                order: 2;
                // flex-grow: 2;
                .search-query {
                    line-height: 1.5;
                    padding: 3px 5px 3px 22px;
                    border-radius: 15px;
                    
                    background: #eee url(../images/search.png) no-repeat 4px 4px;
                    border: 1px;
                    color: #666;
                    
                }
            }
            .nav {
                order: 3;
                flex: 2 0 auto;

                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                align-items: center;

                li {
                    line-height: 25px;

                    a {
                        padding: 10px 15px;

                        color: #eee;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
