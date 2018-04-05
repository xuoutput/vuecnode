<template>
    <div class="create_topic">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{name: 'HomeRoute'}">主页</router-link>
                        <span class="divider">/</span>
                    </li>
                    <ul class="active">{{ currentStatus ? '发布话题' : '编辑话题' }}</ul>
                </ul>
            </div>
            <div class="inner post">
                <form action="" id="create_topic_form">
                    <fieldset>
                        <span class="tab-selector">选择板块</span>
                        <select name="tab" id="tab-value" v-model="tab">
                            <!-- mmp 搞了一天是这里value写错了  然后v-model也没报错 fuck -->
                            <!-- <option valut="">请选择</option>
                            <option valut="weex">weex</option>
                            <option valut="share">分享</option>
                            <option valut="ask">问答</option>
                            <option valut="job">招聘</option> -->
                            <option value="">请选择</option>
                            <option value="weex">weex</option>
                            <option value="share">分享</option>
                            <option value="ask">问答</option>
                            <option value="job">招聘</option>
                        </select>
                        <!-- <span id="topic_create_warn"></span> -->
                        <br />
                        <textarea autofocus name="title" v-model="title" title="title" cols="30" rows="1" class="span9" placeholder="标题字数 10 字以上"></textarea>
                        <div class="markdown_editor in_editor">
                            <textarea id="editor" name="t_content" rows="20" placeholder="文章支持 Markdown 语法, 请注意标记代码" ></textarea>
                            <div class="form-actions">
                                <button type="button" class="span-primary" @click="releaseTopic">{{ currentStatus ? '发布' : '更新' }}</button>
                                <!-- <input type="submit" class="span-primary" value="提交" @click="releaseTopic"> -->
                            </div>                              
                        </div>
                    </fieldset>              
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import API_CONFIG from '../api/index'

import SimpleMDE from 'simplemde'
/* 下面这个一定要导入 不然 simplemde没样式 */
import css from 'simplemde/dist/simplemde.min.css'
// import 'simplemde/dist/simplemde.min.css'

import { mapState } from 'vuex'

export default {
  data() {
      return {
          tab: '',
          title: '',
          currentStatus: true,  // true表示发布,false表示编辑
          contnet: '',   //simplemde 的content
      }
  },
  computed: {
    ...mapState({
        isLogin: 'isLogin',
        token: 'token'
    })  
  },
    created () {
        // 如果是编辑状态, 那么接受topic的参数来的一个参数 开始编辑. 注意,既然vuejs不像cnode那样提供一个修改主题的接口,但你可以通过原来的主题详情来获取,然后再次提交不就好了
        console.log('this.$route')
        console.log(this.$route)
        // if( this.$route.params.id !== 'create' ) {
            // 接受从主体详情过来的topic_id  然后因为只有本用户才会显示的编辑删除按钮, 再传过来
        if( this.$route.params.edit ) {
            this.currentStatus = false;
            // console.log(currentStatus); 不行的哦  +this
            console.log(this.currentStatus);
            console.log('先去原来主题详情的数据');
            // 这里只是获取 并不是post
            this.$http({
                url: `${API_CONFIG.topicDetail}${this.$route.params.id}`,
                method: 'get',
                params: {
                    mdrender: 'false',
                },                
            }).then(res => {
                console.log(res.data.data);
                this.tab = res.data.data.tab;
                this.title = res.data.data.title;
                this.simplemde.value(res.data.data.content);
                // this.content = this.simplemde.value(res.data.data.content);
            }).catch(e => {
                this.$message({
                    message: '不存在此话题',
                    type: 'warning'
                });
                this.$router.push('/');
            });
        }
    },
  methods: {
      //发布或更新状态
      releaseTopic () {
            try {
                if( !this.isLogin ) throw new Error('请登录后再提交');
                if( !this.tab ) throw new Error('请选择类别');
                if( this.title.length < 10 ) throw new Error('标题至少10字以上');
                this.content = this.simplemde.value();
                // this.val = this.simplemde.value();
                if( !this.content ) throw new Error('主体内容不能为空');
            } catch (err) {
                return this.$message.warning(err.message);
            }
            // var url = this.currentStatus ? API_CONFIG.newTopics : API_CONFIG.updateTopics;
            // 这里数据的格式都对的,也都获取到了,怎么到了下面就不行嗯
            // console.log(this.token);
            // console.log( typeof (this.token));
            // console.log(this.tab);
            // console.log( typeof (this.tab));
            // console.log(this.title);
            // console.log( typeof (this.title));
            // console.log(this.content);
            // console.log( typeof (this.content));
            /* 不知道为啥老是422请求错误 */
            this.$http({
                url: this.currentStatus ? `${API_CONFIG.createTopics}` : `${API_CONFIG.updateTopics}`,
                method: 'post',
                data: {
                    // 用这个是可以的
                    // accesstoken: '852283b9-5d47-4b83-b514-fd8aa35e94e8',
                    // tab: 'ask',
                    // title: '你你你inin以你in以水电费是否',
                    // content: 'nikoniko',
                    // 这个应该哪里出问题, mmp 没问题 就是select的value写错了
                    accesstoken: this.token,
                    tab: this.tab,
                    title: this.title,
                    content: this.content,
                    topic_id: this.currentStatus ? undefined : this.$route.params.id,
                },                
            })
            .then(res => {
                if( res.data.success ) {
                    this.currentStatus ? this.$message.success('发布成功') : this.$message.success('更新成功');
                    // this.$router.push(`/topic/${res.data.topic_id}`);
                    console.log(res.date)
                    this.$router.push({name: 'ArticleRoute', params: {id: res.data.topic_id}});
                }
            }).catch((err) => {
                /* 不要只打印这么一个大概的,在chrome的network preview中有具体的错误信息 反正就是点开newwork检查参数信息 422 不就是这么个意思嗯*/
                console.log('creatTopic error: ', err);
                // console.log('creatTopic error: ', err.error_msg);
            });         
      }
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
.create_topic {
    .panel {  
        margin-bottom: 13px;
        
        .header {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            padding: 10px;
            border-radius: 3px 3px 0 0;
            
            background-color: #f6f6f6;
            
            .breadcrumb {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;                
              li {
                line-height: 20px;

                a {
                  color: #369219;
                }
                .divider {
                  padding: 0 5px;
                  color: #ccc;
                }
                span {
                    padding: 0 5px;
                    color: #ccc;
                }
              }
            }
            .breadcrumb>.active {
                color: #999;
            }
            .col_fade {
              color: #1c6132;
            }
        }
        .inner {
          border-radius: 0 0 3px 3px;
          padding: 10px;
          border-top: 1px solid #e5e5e5;
          
          line-height: 2rem;
          background-color: #fff;
          text-align: left;
          a {
              color: #778087;
          }
          .create_topic_form {
              fieldset {
                //   display: flex;
                //   flex-flow: column nowrap;
                //   justify-content: flex-start;
                //   align-items: flex-start;

                  select {
                      display: inline-block;
                      width: 220px;
                      border: 1px solid #ccc;

                      background-color: #fff;
                      line-height: 30px;
                      height: 30px;
                  }
                  textarea.span9 {
                      display: block;
                      margin-bottom: 1em;
                      height: 20px;
                  }
                  .in_editor {
                      border: 1px solid black;
                    //   .form-actions {
                    //       padding: 20px;
                    //       padding-left: 180px;
                    //       margin: 20px 0;
                    //       max-height: 40px;
  
                    //       background-color: #fff;
                    //       .span-primary {
                    //           padding: 3px 10px;
                    //           margin: 0;
                    //           border: 0;
                    //           border-radius: 3px;
  
                    //           line-height: 2em;
                    //           color: #fff;
                    //           background-color: #3374de;
                    //       }
                    //   }                  
                  }
              }
          }   
            
        }
    }    
}
</style>