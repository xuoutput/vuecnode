<template>
    <div class="sidebar-content">
      <div class="panel"  v-if="isLogin">
        <div class="header">
          <span class="col_fade">个人信息</span>
        </div>
        <div class="inner">
          <div class="user_card">
            <div>
              <router-link :to="{name: 'UserRoute', params: {loginname: userInfo.loginname}}" class="user_avatar">
                <img :src="userInfo.avatar_url" :alt="userInfo.loginname" :title="userInfo.loginname">
              </router-link>
              <span class="user_name">
                <router-link :to="{name: 'UserRoute', params: {loginname: userInfo.loginname}}" class="dark">{{userInfo.loginname}}</router-link>
              </span>
              <!-- 积分和签名就暂时不做了 -->
              <!-- <div class="board clearfix">
                <div class="floor">
                  <span class="big">积分: 0</span>
                </div>
              </div>
              <div class="space clearfix"></div>
              <span class="signature">这家伙很懒,什么个性签名都没有留下</span> -->
            </div>
          </div>
        </div>
      </div>
      <div class="panel" v-else-if="isLogin === false">
        <div class="header">
          <span class="col_fade">Newbie社区</span>
        </div>
        <div class="inner">
          <div>
            你可以<router-link :to="{name: 'LoginRoute'}">登录</router-link>或<router-link :to="{name: 'SignUpRoute'}">注册</router-link>
          </div>
        </div>
      </div>
      <div class="panel" v-if="isLogin">
        <div class="inner">
          <router-link :to="{name: 'CreateTopicRoute'}" id="create_topic_btn">
            <span class="span-success">发布话题</span>
          </router-link>
        </div>
      </div>
      <div class="panel">
        <div class="header">
          <span class="col_fade">热门回复的话题</span>
        </div>
        <div class="inner">
          <ul class="unstyled">
            <li>
              <div><a href="" class="dark topic_title">招聘</a></div>
            </li>
            <li>
              <div><a href="" class="dark topic_title">招聘</a></div>
            </li>
            <li>
              <div><a href="" class="dark topic_title">招聘</a></div>
            </li>
            <li>
              <div><a href="" class="dark topic_title">招聘</a></div>
            </li>
            <li>
              <div><a href="" class="dark topic_title">招聘</a></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel">
        <div class="header">
          <span class="col_fade">积分榜</span>
          <a href="" class="dark">TOP 100</a>
        </div>
        <div class="inner">
          <ol>
            <li>
              <span class="top_score">2345</span>
              <span class="user_name">
                <a href="">a17666345</a>
              </span>
            </li>
            <li>
              <span class="top_score">2345</span>
              <span class="user_name">
                <a href="">a17666345</a>
              </span>
            </li>
            <li>
              <span class="top_score">2345</span>
              <span class="user_name">
                <a href="">a17666345</a>
              </span>
            </li>
            <li>
              <span class="top_score">2345</span>
              <span class="user_name">
                <a href="">a17666345</a>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
        // 用了vuex的话就不能再data中重复绑定 初始化,因为这个已经在store.js中定义了 会出现重复定义的错误
        // LoginUserInfo: {
        //     loginname: "",
        //     avatar_url: "",
        //     id: ""              
        // },
        // count1: 22
      }
  },
  computed: {
      ...mapState({
          isLogin: state => state.isLogin,
          userInfo: state => state.userInfo,
          count: state => state.count,

      })
  }  
}
</script>

<style lang="less" scoped>
.sidebar-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;

  width: 100%;

  .panel {
    margin-bottom: 13px;
    border: 1px solid black;

    .header {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;

      color: #51585c;
      text-align: left;

      .col_fade {
        color: #1c6132;
      } 
    }
    .inner {
      padding: 10px;
      border-radius: 0 0 3px 3px;

      background-color: #fff;
      line-height: 2rem;
      text-align: left;
      a {
        color: #778087;
      }
      .user_card {
        div {
          .user_avatar {
            margin-right: .5em;
            vertical-align: middle;
          }
          .user_name {
            display: inline-block;
            // vertical-align: middle;

            max-width: 120px;
            // text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;

          }
          .board {
            margin-top: 10px;
            width: 80%;
            .floor {
              .big {
                font-size: 14px;
              }
            }
          }
          .signature {
            font-style: italic;
          }
        }
      }
      .span-success {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 3px;

        font-size: 14px;
        line-height: 2rem;
        color: #fff;
        background-color: #369219;
        cursor: pointer;

      }
      ul.unstyle {
        // list-style: none;
        li {
          line-height: 2rem;
        }
      }
    }
  }
}

</style>
