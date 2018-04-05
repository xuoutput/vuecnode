<template>
    <div class="sidebar">
        <div class="panel" v-show="!isLogin">
            <div class="header">
                <span class="col_fade">关于</span>
            </div>
            <div class="inner">
                <p>Newbie: Newbie专业社区</p>
                <p>在这里你可以:</p>
                <ul>
                    <li>向别人提出你遇到的问题</li>
                    <li>帮助遇到问题的人</li>
                    <li>分享自己的知识</li>
                    <li>和其它人一起进步</li>
                </ul>
            </div>
        </div>
        <div class="panel" v-show="isLogin">
            <div class="header">
                <span class="col_fade">Markdown 语法参考</span>
            </div>
            <div class="inner">
                <ul>
                    <li>### 单行的标题</li>
                    <li>**粗体**</li>
                    <li>`console.log('行内代码')`</li>
                    <li>```js\n code \n``` 标记代码块</li>
                    <li>[内容](链接)</li>
                    <li>![文字说明](图片链接)</li>
                    <a href="http://www.ituring.com.cn/article/775"></a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {

      }
  },
  computed: {
      ...mapState({
          isLogin: state => state.isLogin
      })
  }
}
</script>

<style lang="less" scoped>
.sidebar {
    margin-bottom: 20px;

    font-size: 14px;

    text-align: left;
    .panel {
        margin-bottom: 13px;

        font-size: 13px;
        .header {
            padding: 10px;
            border-radius: 3px 3px 0 0;

            background-color: #f6f6f6;

            .col_fade {
                color: #1c6132;
            }
        }
        .inner {
            padding: 10px;
            border-radius: 0 0 3px 3px;

            line-height: 2em;
            background-color: #fff;
            p {
                margin: 0 0 10px;
                font-size: 14px;
                word-break: break-word;
            }
            ul {
                margin: 0 0 10px 25px;
                li {
                    line-height: 2em;
                }
            }
        }
    }
}

</style>
