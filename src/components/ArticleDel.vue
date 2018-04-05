<template>
    <div class="content-list">
        <div class="loading" v-show="loading">loading...</div>              
        <div class="panel" v-show="!loading" >
            <div class="header topic_header">
              <div>
                <span class="topic_full_title">{{article.title}}</span>
                <div class="action" v-show="isLogin">
                  <!-- <span class="span-common span-success" id="collect_btn">加入收藏</span> -->
                  <button class="span-common span-success" id="collect_btn" @click="collectionBtn" >{{ is_collect ? '取消收藏' : '加入收藏' }}</button>
                </div>
              </div>
              <div class="changes">
                <span>发布于 19天前</span>
                <span>
                  作者 <router-link :to="{name: 'UserRoute', params: {loginname: article.author.loginname}}">{{article.author.loginname}} </router-link>
                </span>
                <span>{{article.visit_count}} 次浏览</span>
                <span>最后一次编辑是 16天前</span>
                <span> 来自 {{article.tab}}</span>
              </div>

              <div id="manage_topic" v-show=" isLogin && article.author_id === userInfo.id">
                <router-link :to="{name: 'CreateTopicRoute', params: {id: article.id, edit: true}}">
                  <i class="fa fa-lg fa-pencil-square-o" title="编辑"></i>
                </router-link>
                <!-- 这个可以直接写个axios delete就行 -->
                <a href="javascript:;" @click="deleteArticle()">
                  <i class="fa fa-lg fa-trash" title="删除"></i>
                </a>
                <!-- <button @click="delete()">傻了吧 方法要动名词结合</button>
                <button @click="deleteDate()">44</button> -->
              </div>              
            </div>
            <div class="inner topic">
              <div class="topic_content">
                <div style="text-align: left;padding: 10px;border-left: 4px solid #099436;background: #f6f6f6;margin: 10px 0;">
                  社区推荐  :
                  <a onclick="_hmt.push(['_trackEvent','juejin', 'advs', 'click'])" href="https://juejin.im/welcome/frontend?utm_source=vuejs&amp;utm_medium=word&amp;utm_content=qianduan&amp;utm_campaign=q4_website" style="text-decoration: none" target="_blank"> 
                    <span style="color:#0088cc">掘金</span>是一个面向程序员的的技术社区，从 Vue 到 React，从前端教程到开源库，无论是入门还是进阶，来<span style="color:#0088cc">掘金</span>你不会错过前端开发的任何一个技术干货。
                  </a>
                </div>

                <div class="markdown-text" v-html="article.content"></div>
              </div>
              <div class="share"></div>
            </div>
        </div>

        <!-- reply -->
        <div class="panel" v-show="!loading">
          <div class="header">
            <span class="col_fade">{{article.reply_count}} 回复</span>
          </div>
          <div v-for="(reply, index) in article.replies" :key="reply.id" class="cell reply_area reply_item" >
            <a class="anchor" :id="reply.id"></a>
            <div class="author_content">
              <router-link :to="{name: 'UserRoute', params: {loginname: reply.author.loginname}}" class="user_avatar">
                <img :src="reply.author.avatar_url" :alt="reply.author.loginname" :title="reply.author.loginname">
              </router-link>
              <div class="user_info">
                <router-link :to="{name: 'UserRoute', params: {loginname: reply.author.loginname}}" class="dark reply_author">{{reply.author.loginname}}</router-link>
                <router-link :to="{name: 'UserRoute', params: {loginname: reply.author.loginname}}" class="reply_time">{{ index + 1 }}楼•{{reply.create_at}}</router-link>
              </div>
              <div class="user_action">
                <span @click="likeBtn(reply.id, reply.author.loginname, index)">
                  <i class="fa up_btn fa-thumbs-o-up" title="喜欢" ></i>
                  <span class="up-count">{{reply.ups.length}}</span>
                </span>
                <span @click="replyOthers(reply.author.loginname, reply.id)" v-show="isLogin">
                  <i class="fa fa-reply reply2_btn" title="回复"></i>
                </span>
                <!-- 暂时做不出那种效果  还是直接到底部 官网评论完的嵌套也没做 当然还有评论的删除和修改-->
                <!-- <form id="reply_form" v-show="replyShow">
                  <div class="markdown_in_deitor">
                    <textarea name="" id="editorRep"  rows="10" ></textarea>
                    <div class="form-actions">
                        <button type="button" class="span-primary" @click="insertReply">{{insertBtnText}}</button>
                    </div>                 
                  </div>
                </form>                 -->
              </div>
            </div>
            <div class="reply_content">
              <div class="markdown-text" v-html="reply.content"></div>
            </div>
          </div>
        </div>
        <div class="panel" v-show="!loading">
          <div class="header">
            <span class="col_fade">添加回复</span>
          </div>
          <div class="inner reply">
            <form action="" >
              <div class="markdown_in_deitor">
                <textarea name="" id="editor"  rows="10" ></textarea>
                <div class="form-actions">
                    <button type="button" class="span-primary" @click="insertReply">{{insertBtnText}}</button>
                    <!-- <input type="submit" class="span-primary" value="提交" @click="releaseTopic"> -->
                </div>                 
              </div>
            </form>
          </div>
        </div>

    </div>
</template>

<script>
import API_CONFIG from '../api/index'

import { mapState } from 'vuex'

import SimpleMDE from 'simplemde'
/* 下面这个一定要导入 不然 simplemde没样式 */
import css from 'simplemde/dist/simplemde.min.css'
// import 'simplemde/dist/simplemde.min.css'

export default {
  data() {
      return {
        loading: true,
        // replyShow: false,

        collect_topics: [],
        is_collect: false,  //人为加入一个用来判断收藏的,要去本用户的collect_topics中比较        

        insertBtnText: '回复',  // 控制防止多次点击按钮
        content: '',
        article:{
          "id": "",
          "author_id": "",
          "tab": "",
          "carticlet": "",
          "title": "",
          "last_reply_at": "2018-03-23T01:08:51.753Z",
          "good": false,
          "top": false,
          "reply_count": 0,
          "visit_count": 0,
          "create_at": "2018-03-22T02:10:37.596Z",
          "author": {
              "loginname": "",
              "avatar_url": ""
          },
          "replies": [
              {
                  "id": "",
                  "author": {
                      "loginname": "",
                      "avatar_url": ""
                  },
                  "content": "",
                  "ups": [],
                  "create_at": "2018-03-23T01:08:51.748Z"
              }
          ]          
        }
      }
  },
  methods: {
    getData () {
      this.loading = true;
      this.$http({
          /* 第一个是测试 用的是单引号 第二个用动态 又有ES6 用反引号 */
          // url: 'https://www.vue-js.com/api/v1/topic/5ab3109d9b1b06e7639cad3f',
          // url: `https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`,
          url: `${API_CONFIG.topicDetail}${this.$route.params.id}`,
          method: 'get',
          params: {
              mdrender: 'true',
          },
      }).then((res) => {
          this.article = res.data.data;
          this.loading = false;
      }).catch((res) => {
          console.log('ArticleDel error: ', res);
      });     
    },
    deleteArticle () {
      this.$confirm('确定要删除此话题?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
            url: `${API_CONFIG.deleteTopics}${this.$route.params.id}`,
            method: 'post',
            data: {
                accesstoken: this.token,
                topic_id: this.$route.params.id,
            },
        }).then((res) => {
            this.article = res.data.data;
            this.$message({
              type: 'success',
              message: '删除成功!'
            }),
            this.$router.push({name: 'HomeRoute'}) 
        }).catch((res) => {
            console.log('deleteArticle error: ', res);
        });

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 收藏 && 取消收藏主题
    getUserCollectionTopics () {
      this.$http({
          /* 第一个是测试 用的是单引号 第二个用动态 又有ES6 用反引号 */
          // url: 'https://www.vue-js.com/api/v1/user/本用户',
          url: `${API_CONFIG.user}${this.userInfo.loginname}`,
          method: 'get',
          params: {
              mdrender: 'true',
          },
      }).then((res) => {
          this.collect_topics = res.data.data.collect_topics;
          console.log(this.collect_topics);
          // this.loading = false;
          this.isCollection();    //放这里是为了先从用户那取出来 在比较
          console.log('is_collect');
          console.log(this.is_collect);
      }).catch((res) => {
          console.log('collect error: ', res);
      });      
    },
    // 这个要在记载页面时就确定 然后变色收藏按钮
    isCollection () {
      console.log('this.$route.params.id');
      console.log(this.$route.params.id);
      
      for (let i = 0; i < this.collect_topics.length; i++) {
        // if (this.collect_topics[i].id === this.$route.params.id) {  字符串比较 不是数字
          console.log('this.collect_topics[i].id');
          console.log(this.collect_topics[i].id);          
        if (this.collect_topics[i].id == this.$route.params.id) {
          return this.is_collect = true;
        }
      }
    },        
    collectionBtn () {
        // var url = this.detail.is_collect ? API_CONFIG.cancelCollection : API_CONFIG.collection;
      // 先去获取用户信息中collect_topics的信息 遍历下topic_id 然后is_collect置  最后发送加入还是收藏api   但要注意 异步转同步
       this.$http({
            url: this.is_collect ? `${API_CONFIG.cancelCollection}` : `${API_CONFIG.collection}` ,
            method: 'post',
            data: {
                accesstoken: this.token,
                topic_id: this.article.id
            },                
        })        
        .then(res => {
            if( res.data.success ) {
                this.is_collect = !this.is_collect;
            }
        })
        .catch(e => e);
    },    
    //点赞
    likeBtn (id, loginname, index) {
        try {
            if( !this.isLogin ) throw new Error('请先登陆!');
            if( loginname === this.userInfo.loginname ) throw new Error('不能赞自己!');
        } catch (e) {
            return this.$message.warning(e.message);
        }
        this.$http({
            url: `${API_CONFIG.like}${id}/ups`,
            method: 'post',
            data: {
                accesstoken: this.token,
            },                
        }) 
        .then(res => {
            if( res.data.success ) {
                // 更新资源
                this.getData();                
            }
        })
        .catch(e => e);
    },    
    replyOthers (loginname, id) {
      /* 点回复按钮直接跳转到最下面回复框 */
      var top = document.querySelector('.reply').offsetTop;
      window.scrollTo(0, top - 80);  
      /* 加了@  当然也要获取下评论id 然后可以 */
      this.content =  this.simplemde.value(`@${loginname} `)
      this.article.replies.id = id;
    },
    // 插入评论
    insertReply () {
        // 避免多次点击按钮
        if( this.insertBtnText === '发送中...' ) return;
        this.content = this.simplemde.value();
        if( !this.content ) return this.$message.warning('内容不能为空!');
        this.insertBtnText = '发送中...';
        console.log('this.$route.params'+this.$route.params.id);
        this.$http({
            url: `${API_CONFIG.replies}${this.$route.params.id}/replies`,
            method: 'post',
            data: {
                accesstoken: this.token,
                content: this.content,
                reply_id: undefined | this.article.replies.id,
            },                
        }) 
        .then(res => {
            if( res.data.success ) {
                this.simplemde.value('');
                this.$message.success('发送成功!');
                this.insertBtnText = '回复';
                // 更新资源
                this.getData();
            }
        })
        .catch(e => {
            this.insertBtnText = '回复';
        });
    },        
  },
  computed: {
    ...mapState({
      token: state => state.token,
      isLogin: state => state.isLogin,
      userInfo: state => state.userInfo
    })
  },
  created () {
    this.getData();
    // 收藏要下面2个
    this.getUserCollectionTopics();
    // this.isCollection ();
  },
  mounted () {
    // var simplemde = new SimpleMDE({
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      autoDownloadFontAwesome: false,
      spellChecker: false
    //   previewRender: function(plainText) {
    //       return marked(plainText); // Returns HTML from a custom parser
    //   },
    });      
  }
}
</script>

<style lang="less" scoped>
.content-list {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  .panel {
    margin-bottom: 13px;

    .header {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      // width: 100%;
      padding: 10px;
      border-radius: 3px 3px 0 0;

      background-color: #f6f6f6;

      div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start; 

        width: 100%;

        .topic_full_title {
          order: 1;
          flex: 1 1 85%;
          width: 75%;
          margin: 8px 0;
  
          font-size: 22px;
          font-weight: 700;
          line-height: 130%;
          vertical-align: middle;

          text-align: left;
        }
        .action {
          order: 2;
          flex: 1 1 15%;

          padding: 3px 10px;
          margin: 0;
          border: 0;

          font-size: 14px;
          letter-spacing: 2px;
          cursor: pointer;
          line-height: 2em;
          color: #fff;
          background-color: #369219;
        }
      }
      .changes {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;  

          font-size: 12px;
          color: #838383;
        }
    }
    .topic_header {
      background-color: #fff;
    }
    .inner {
      padding: 10px;
      border-radius: 0 0 3px 3px;

      line-height: 2em;
      background-color: #fff;

      .markdown-text {
        text-align: left;
      }
      @import url('../style/markdown.css');
    }
    .cell {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: stretch;

      min-width: 978px;
      padding: 10px;
      border-top: 1px solid #f0f0f0;

      font-size: 14px;
      background-color: #fff;

      .author_content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        .user_avatar {
          order: 1;
          // flex: 1 1 auto;
          display: inline-block;

          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;

            vertical-align: middle;
          }
        }
        .user_info {
          order: 2;
          // flex: 1 1 auto;
          display: inline-block;

          margin-left: 10px;
          a.dark {
            color: #666;
            text-overflow: ellipsis;
          }
          .reply_author {
            font-size: 12px;
            font-weight: 700;
          }
        }
        .user_action {
          order: 3;      
          flex: 2 1 auto; 
          
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
          align-items: center;

          margin-left: 20px;

          font-size: 15px;
          span {
            i {
              cursor: pointer;
            }
          }
        }
      }
      .reply_content {
        padding-left: 50px;

        color: #333;
        .markdown-text {
          text-align: left;
        }
      }      
    }
    .cell.reply_highlight {
      background-color: #f4fcf0;
    }
  }

}
</style>
