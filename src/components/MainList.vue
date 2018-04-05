<template>
    <div class="content-list">
        <div class="loading" v-show="loading">loading...</div>        
        <div class="panel" v-show="!loading">
            <div class="header">
                <!-- 这里直接在to上写 有了query 才好发tab -->
                <router-link to="/?tab=all" class="topic-tab " :class="{current_tab: this.$route.query.tab == 'all' || !this.$route.query.tab}">全部</router-link>
                <router-link to="/?tab=good" class="topic-tab" :class="{current_tab: this.$route.query.tab == 'good'}">精华</router-link>
                <router-link to="/?tab=weex" class="topic-tab" :class="{current_tab: this.$route.query.tab == 'weex'}">weex</router-link>
                <router-link to="/?tab=share" class="topic-tab" :class="{current_tab: this.$route.query.tab == 'share'}">分享</router-link>
                <router-link to="/?tab=ask" class="topic-tab" :class="{current_tab: this.$route.query.tab == 'ask'}">问答</router-link>
                <router-link to="/?tab=job" class="topic-tab" :class="{current_tab: this.$route.query.tab == 'job'}">招聘</router-link>
            </div>
            <div class="inner no-padding">
                <div class="topic_list">
                    <div v-for="item of content" :key="item.id" class="cell">
                        <router-link :to="{name: 'UserRoute', params: {loginname: item.author.loginname}}" class="user_avatar pull-left">
                            <img :src="item.author.avatar_url" alt="avatar_url" :title="item.author.loginname">
                        </router-link>
                         <span class="reply_count pull-left">
                            <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                            <span class="count_seperator">/</span>
                            <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
                        </span>  
                        <div class="topic_title_wrapper">
                            <!-- 这里对tab加过滤器 -->
                            <span class="topiclist-tab" :class="item | formatTab(item).className">{{item | formatTab(item).text}}</span>
                            <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="topic_title" :title="item.title">
                                {{item.title}}
                            </router-link>
                        </div>
                        <router-link :to="{name: 'ArticleRoute', params: {id: item.id}}" class="last_time pull-right">
                            <!-- 最后回复的头像和时间要再改下 -->
                            <img :src="item.author.avatar_url" alt="" class="user_small_avator">
                            <span class="last_active_time">{{dealTime}}</span>
                        </router-link>                                                                     
                    </div>

                    <!-- <button @click="getData()"> 显示getdata</button>
                    {{content}} -->

                </div>
            </div>
        </div>
        <!-- <el-pagination
            v-show="!loading"
            background
            @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next"
            :total='total'
            :page-sizes="[5, 200, 300, 400]"    
            :page-size='limit'
            > -->
            <!-- page-sizes要放在page-size之前 -->

        <el-pagination
            v-show="!loading"
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total='total'
            :page-size='limit'
            >
        </el-pagination>
       
    </div>
</template>

<script>
import API_CONFIG from '../api/index'

export default {
  data() {
      return {
          loaing: true,
          content: [],
          item: {
            "id": "",
            "author_id": "",
            "tab": "",
            "content": "",
            "title": "",
            "last_reply_at": "2018-03-22T02:35:33.791Z",
            "good": false,
            "top": false,
            "reply_count": 0,
            "visit_count": 0,
            "create_at": "2018-03-22T02:35:33.791Z",
            "author": {
                "loginname": "",
                "avatar_url": ""
            }
         },
         /* 分页 请求中page 和 limit选择 */
         page: 1,
         limit: 20,
         total: 1000
      }
  },
  methods: {
      handleCurrentChange (pageval) {
          this.$router.push({
              name: this.$route.name,
              query: {
                  tab: this.$route.query.tab,
                  page: pageval,        /* 这里是局部变量 完蛋 */
              }
          }),
          /* 用this改vue对象的 不就行了 这样全局的page就变了 也就能axios不会只是1了 */
          this.page = pageval;
        //   console.log(`当前页: ${pageval}`);
        //   console.log(this.$route);
        //   console.log(this.$route.name);
        //   console.log(this.$route.query);          
      },
        getData() {          
            this.loading = true,  
            this.$http({
                // url: `https://www.vue-js.com/api/v1/topics/?page=${this.page}&tab=${this.$route.query.tab || 'all'}&limit=${this.limit}`,
                // url: 'https://www.vue-js.com/api/v1/topics',
                url: `${API_CONFIG.topics}`,
                method: 'get',
                params: {
                    page: this.page,         /* 虽然分页的page在变化 但这个page始终是1  怎么办 我试试url上写 .. 搞定了 很好理解,前面的分页函数中改变的是局部的page,没有动全局的vue的,所以加了this就行了*/           
                    tab: this.$route.query.tab || 'all', /* 这个tab 第一次是undefined, 之后点不同分类才会有 带上  也是为了默认就是all的tab 然后点分类才不会出错 给个默认值all*/
                    limit: this.limit,       /* 项目一多 加载不出来就报错 要解决 用loading*/
                    // mdrender: 'true',
                },
                
            }).then((res) => {
                this.content = res.data.data;
                /* 每次点分页都会调用 , 所有是有请求的 但是就是不显示*/
                console.log(this.content);
                /* 这里可以看出page始终是1 没变 蛋疼  搞定了*/
                console.log(this.page);                
                console.log('hi,请求完成'); 
                this.loading = false;               
            }).catch((err) => {
                console.log('MainList error: ', err);
            });
        },      
  },
    created () {
      /* 这里先在页面创建时定义好page,之后在 */
    this.page = parseInt(this.$route.query.page || 1);
    this.getData();  
  },
    computed: {
        dealTime() {
            return String(this.item.create_at).match(/.{10}/)[0];
        }
    },
    watch: {
        /* 用这个在url上有参数 用beforeRouteUpdate在url上没有 */
        $route (to, from) {
            if( to.name !== 'HomeRoute' ) {return;}
            if( to.query.page == 1 || !to.query.page ) {this.page = 1;}  
            // console.log('ff'+this.page);
            this.getData();
        }
    },
    // beforeRouteUpdate (to, from, next) {
    //         if( to.name !== 'HomeRoute' ) {return;}
    //         if( to.query.page == 1 || !to.query.page ) {this.page = 1;}            
    //         console.log('ff'+this.page);
    //         this.getData();        
    // }
// 过滤器也可以写成computed
    filters: {
        formatTab (item) {
            //   formatTab() {}
            if(item.top == true) {
                return {
                    /* 一个是显示的分类名,一个是对应类名的样式 */
                    text: '置顶',
                    className: 'put_top'
                }
            } else if(item.good) {
                return {
                    text: '精华',
                    className: 'put_good'
                }
            }
            switch(item.tab) {
                case 'ask': {
                    return {
                        text: '问答',
                        className: item.tab
                    }
                }
                case 'share': {
                    return {
                        text: '分享',
                        className: item.tab
                    }
                }
                case 'job': {
                    return {
                        text: '招聘',
                        className: item.tab
                    }
                }
                case 'weex': {
                    return {
                        text: 'weex',
                        className: item.tab
                    }
                }
                default: {
                    return {
                        text: '',
                        className: 'default'
                    }
                }              
            }      
        } 
    },
}
</script>

<style lang="less" scoped>
.content-list {

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
            .current_tab {
                padding: 3px 4px;
                border-radius: 3px;  
                
                color: #fff;
                background-color: #369219;
            }
        }
        .inner {
          border-radius: 0 0 3px 3px;
          
          line-height: 2rem;
          background-color: #fff;

          a {
              color: #778087;
          }
            
          .topic_list {
            //   display: flex;
            //   flex-flow: column nowrap;
            //   justify-content: flex-start;
            //   align-items: stretch;

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
                        .topiclist-tab {
                            padding: 2px 4px;
                            color: #999;
                            background-color: #e5e5e5;
                        }
                        .put_top,.put_good {
                            padding: 1px 2px;

                            color: #fff;
                            background: #369219;
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
          }
        }
    }
}
</style>
