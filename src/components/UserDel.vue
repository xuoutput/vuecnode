<template>
  <div class="user_contnet">
      <div class="loading" v-show="loading">loading...</div>
    <div class="panel" v-show="!loading">
      <div class="header">
        <ul class="breadcrumb">
          <li>
            <router-link :to="{name: 'HomeRoute'}">主页</router-link>            
            <span class="divider">/</span>
          </li>
        </ul>
      </div>
      <div class="inner userinfo">
        <div class="user_big_avatar">
          <img :src="userInfo.avatar_url" :alt="userInfo.loginname" class="user_avatar" :title="userInfo.loginname">
        </div>
        <router-link :to="{name: 'UserRoute', params: {loginname: userInfo.loginname}}" class="dark">{{userInfo.loginname}}</router-link>
        <div class="user_profile">
          <ul class="unstyled">
            <span class="big">{{userInfo.score}} 积分</span>
            <li>
              <i class="fa fa-lg fa-fw fa-github"></i>
              <a :href="`https://github.com/${userInfo.githubUsername}`" class="dark" target="_blank">@{{userInfo.githubUsername}}</a>
            </li>
          </ul>
        </div>
        <p class="col_fade">注册时间 {{userInfo.create_at}}</p>
      </div>
    </div>

    <div class="panel" v-show="!loading">
      <div class="header">
        <span class="col_fade">最近创建的话题</span>
      </div>
      <div class="inner">
        <div v-for="item of userInfo.recent_topics" :key="item.id" class="cell">
            <router-link :to="{name: 'UserRoute', params: {loginname: item.author.loginname} }" class="user_avatar pull-left">
                <img :src="item.author.avatar_url" :alt="item.author.loginname" :title="item.author.loginname">
            </router-link>
            <!-- 这里没有怎么办  要用topic的那个请求么 -->
            <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
            </span>  
            <div class="topic_title_wrapper">
                <span class="topiclist-tab">{{item.tab}}</span>
                <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="topic_title" :title="item.title">
                    {{item.title}}
                </router-link>
            </div>
            <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="last_time pull-right">
                <img :src="item.author.avatar_url" alt="" class="user_small_avator">
            </router-link>
            <!-- <div class="cell more">
              <router-link :to="{name: 'UserRoute', params: {loginname: userInfo.loginname} }" class="dark">
                查看更多
              </router-link>
            </div>                                                                      -->
        </div>
      </div>
    </div>

    <div class="panel" v-show="!loading">
      <div class="header">
        <span class="col_fade">最近参与的话题</span>
      </div>
      <div class="inner">
        <div v-for="item of userInfo.recent_replies" :key="item.id" class="cell">
            <router-link :to="{name: 'UserRoute', params: {loginname: item.author.loginname} }" class="user_avatar pull-left">
                <img :src="item.author.avatar_url" :alt="item.author.loginname" :title="item.author.loginname">
            </router-link>
            <!-- 这里没有怎么办  要用topic的那个请求么 全部保存在state中不就好了-->
            <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
            </span>  
            <div class="topic_title_wrapper">
                <span class="topiclist-tab">{{item.tab}}</span>
                <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="topic_title" :title="item.title">
                    {{item.title}}
                </router-link>
            </div>
            <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="last_time pull-right">
                <img :src="item.author.avatar_url" alt="" class="user_small_avator">
            </router-link>
            <!-- <div class="cell more">
              <router-link :to="{name: 'UserRoute', params: {loginname: userInfo.loginname} }" class="dark">
                查看更多
              </router-link>
            </div>                                                                      -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import API_CONFIG from '../api/index'

import { mapState } from 'vuex'

export default {
  data() {
      return {
          //加载
          loading: true,
          //全放入vuex 共享去 不然评论 什么都不好取. 出问题了 ,所有的人都变成登录人了
        userInfo: {
          "loginname": "",
          "avatar_url": "",
          "githubUsername": "",
          "create_at": "2017-01-09T14:21:37.336Z",
          "score": 0,
          "recent_topics": [
              {
                  "id": "",
                  "author": {
                      "loginname": "",
                      "avatar_url": ""
                  },
                  "title": "",
                  "last_reply_at": "2018-03-22T07:57:51.726Z"
              }
          ],
          "recent_replies": [
              {
                  "id": "",
                  "author": {
                      "loginname": "",
                      "avatar_url": ""
                  },
                  "title": "",
                  "last_reply_at": "2017-08-11T11:26:47.186Z"
              }

          ],
          "collect_topics": []
        }
      }
  },

//   beforeRouteUpdate (to, from, next) {
//     // 在当前路由改变，但是该组件被复用时调用
//     // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//     // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//     // 可以访问组件实例 `this`
//     console.log(to);
//     console.log(to.name);
//     console.log(to.params.loginname);
//     // this.$router.push({name: 'UserRoute', params: to.params.loginname})
//     // this.$route.params.logname = to.params.loginname
//     // this.$router.push({name: 'UserRoute', params: {loginmane: to.params.loginname}})
//     // if(to.name === 'UserRoutr' && to.params.loginname !=== from.)
//     console.log(from);
//     console.log(next);
//     // next({name: 'UserRoute', params: {loginmane: to.params.loginname}})
//     // 有了path 没有params
//     // next({path: '/user/:loginname', params: {loginmane: to.params.loginname}})
//     // mmp这么一些直接gg 无限循环
//     // next({path: `/user/${to.params.loginmane}`})
//     // next( vm => {
//     //     this.vm.getData()
//     // })
    
//   },

  methods: {
    getData() {
        this.loading = true,
            this.$http({
                /* 第一个是测试 用的是单引号 第二个用动态 又有ES6 用反引号 */
                // url: 'https://www.vue-js.com/api/v1/user/febobo',
                url: `${API_CONFIG.user}${this.$route.params.loginname}`,
                method: 'get',
                params: {
                    mdrender: 'true',
                },
            }).then((res) => {
                this.userInfo = res.data.data;
                // console.log(this.userInfo);
                this.loading = false;
            
            }).catch((res) => {
                console.log('ArticleDel error: ', res);
            });     
    },
  },
  created () {
    this.getData();
  },
  computed: {
      dealTime() {
          return String(this.item.create_at).match(/.{10}/)[0];
      },
      // 从vuex中取
    //   ...mapState({
    //       userInfo: state => state.userInfo
    //   })
  },
    watch: {
        /* 用这个在url上有参数 用beforeRouteUpdate在url上没有 */
        $route (to, from) {
            console.log('to'+to);
            console.log(to);
            console.log('from'+from);
            console.log(from);
            console.log();
            
            if( to.name !== 'UserRoute' ) {return;}
            if( to.params.loginname !== from.params.loginname ) {
                window.scrollTo(0, 0);
                this.getData();
            }  
        }
    },
}
</script>

<style lang="less" scoped>
.user_contnet {
    .panel {
        // display: flex;
        // flex-flow: column nowrap;
        // justify-content: flex-start;
        // align-items: stretch;     

        margin-bottom: 13px;
        
        .header {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            padding: 10px;
            border-radius: 3px 3px 0 0;
            
            background-color: #f6f6f6;
            
            .topic-tab {
                margin: 0 10px;

                color: #369219;
            }
            .current-tab {
                padding: 3px 4px;
                border-radius: 3px;  
                
                color: #fff;
                background-color: #369219;
            }
            .breadcrumb {
              li {
                line-height: 20px;

                a {
                  color: #369219;
                }
                .divider {
                  padding: 0 5px;
                  color: #ccc;
                }
              }
            }
            .col_fade {
              color: #1c6132;
            }
        }
        .inner {
          border-radius: 0 0 3px 3px;
          padding: 10px;
          
          line-height: 2rem;
          background-color: #fff;
          text-align: left;
          a {
              color: #778087;
          }
          .cell:nth-child(1) {
              border-top: 0;
          }
          .cell {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;                  

                // width: 100%;  不能加这 100% 不然和padding冲突 超过100%
                padding: 10px;
                // margin: 10px;
                border-top: 1px solid #b6b6b6;
                
                .user_avatar {
                    order: 1;
                    // flex: auto;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                        vertical-align: middle;
                    }
                }
                .reply_count {
                    order: 2;
                    // flex: auto;
                    width: 100px;

                    text-align: center;

                    .count_of_replies {
                        color: #9e78c0;
                    }
                    .count_seperator {
                        margin: 0 -3px;
                        
                        // font-size: 10px;
                    }
                    .count_of_visits {
                        color: #b4b4b4;
                    }
                }
                .topic_title_wrapper {
                    order: 3;
                    // flex: auto;
                    white-space: nowrap;
                    .put_top,.put_good {
                        padding: 1px 2px;
                        background: #369219;
                    }
                    .topiclist-tab {
                        padding: 2px 4px;
                        color: #999;
                        background-color: #e5e5e5;
                    }
                    .topic_title {
                        color: #333;
                    }
                    a.topic_title:avtive {
                        color: #888;
                    }
                }
                .last_time {
                    order: 4;
                    flex: 1 2 auto;

                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-end;
                    align-items: center;

                    .user_small_avator {
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                        border-radius: 3px;
                        margin-right: .5rem;
                    }
                    .last_active_time {
                        display: inline-block;
                        min-width: 50px;
                        text-align: right;
                        white-space: nowrap;
                    }
                }
                
          }
          
          .user_big_avatar {
            margin-right: 10px;

            img {
              width: 40px;
              height: 40px;
              border-radius: 3px;
            }
          }
          .user_profile {
            margin-top: 20px;
            ul {
              margin: 0 0 10px 25px;
            }
            ul.unstyled {
              margin-left: 0;
              list-style: none;
            }
          }
          li {
            line-height: 2em;
          }

          
        }
    }
}
</style>