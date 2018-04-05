<template>
    <div class="api">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <a href="/">主页</a>
                        <span class="divider">/</span>
                    </li>
                    <li class="active">API</li>
                </ul>
            </div>
            <div class="inner topic">
                <div class="topic_content">
                    <div class="markdown-text">
                        <h3>主题</h3>
                        <h4>get /topics 主题首页</h4>
                        <p>接收 get 参数</p>
                        <ul>
                            <li>page
                                <code>Number</code> 页数</li>
                            <li>tab
                                <code>String</code> 主题分类</li>
                            <li>limit
                                <code>Number</code> 每一页的主题数量</li>
                            <li>mdrender
                                <code>String</code> 当为
                                <code>false</code> 时，不渲染。默认为
                                <code>true</code>
                            </li>
                        </ul>
                        <p>示例：
                            <a href="/api/v1/topics" target="_blank">/api/v1/topics</a>
                        </p>
                        <h4>get /topic/:id 主题详情</h4>
                        <p>接收 get 参数</p>
                        <ul>
                            <li>mdrender
                                <code>String</code> 当为
                                <code>false</code> 时，不渲染。默认为
                                <code>true</code>
                            </li>
                        </ul>
                        <p>示例：
                            <a href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank">/api/v1/topic/5433d5e4e737cbe96dcef312</a>
                        </p>
                        <h4>post /topics 新建主题</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>title
                                <code>String</code> 标题</li>
                            <li>tab
                                <code>String</code> 目前有
                                <code>ask</code>
                                <code>share</code>
                                <code>job</code>
                            </li>
                            <li>content
                                <code>String</code> 主体内容</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> topic_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'5433d5e4e737cbe96dcef312'</span><span class="pun">}</span></code></pre>
                        <h4>post /topics/update 编辑主题</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>topic_id
                                <code>String</code> 主题id</li>
                            <li>title
                                <code>String</code> 标题</li>
                            <li>tab
                                <code>String</code> 目前有
                                <code>ask</code>
                                <code>share</code>
                                <code>job</code>
                            </li>
                            <li>content
                                <code>String</code> 主体内容</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> topic_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'5433d5e4e737cbe96dcef312'</span><span class="pun">}</span></code></pre>
                        
                        <h4>post /topics/delete 删除主题</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>topic_id
                                <code>String</code> 主题id</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pun">}</span></code></pre>

                        <h4>post /topic/collect 收藏主题</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>topic_id
                                <code>String</code> 被收藏的主题id</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre>
                        <h4>post /topic/de_collect 取消收藏</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>topic_id
                                <code>String</code> 被取消收藏的主题id</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre>
                        <h3>评论</h3>
                        <h4>post /topic/:topic_id/replies 新建评论</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                            <li>content
                                <code>String</code> 评论的主体</li>
                            <li>reply_id
                                <code>String</code> 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> reply_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'5433d5e4e737cbe96dcef312'</span><span class="pun">}</span></code></pre>
                        <h4>post /reply/:reply_id/ups 为评论点赞</h4>
                        <p>接受 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code>
                            </li>
                        </ul>
                        <p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的
                            <code>action</code> 字段中，
                            <code>up</code> or
                            <code>down</code>。</p>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="str">"success"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> </span><span class="str">"action"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"down"</span><span class="pun">}</span></code></pre>
                        <h3>用户</h3>
                        <h4>get /user/:loginname 用户详情</h4>
                        <p>示例：
                            <a href="/api/v1/user/DongHongfei" target="_blank">/api/v1/user/DongHongfei</a>
                        </p>
                        <h4>post /accesstoken 验证 accessToken 的正确性</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code> 用户的 accessToken</li>
                        </ul>
                        <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> loginname</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">loginname</span><span class="pun">}</span></code></pre>
                        <h3>消息通知</h3>
                        <h4>get /message/count 获取未读消息数</h4>
                        <p>接收 get 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code>
                            </li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> data</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">}</span></code></pre>
                        <h4>get /messages 获取已读和未读消息</h4>
                        <p>接收 get 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code>
                            </li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">
  data</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    has_read_messages</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
    hasnot_read_messages</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">
        id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"543fb7abae523bbc80412b26"</span><span class="pun">,</span><span class="pln">
        type</span><span class="pun">:</span><span class="pln"> </span><span class="str">"at"</span><span class="pun">,</span><span class="pln">
        has_read</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
        author</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          loginname</span><span class="pun">:</span><span class="pln"> </span><span class="str">"DongHongfei"</span><span class="pun">,</span><span class="pln">
          avatar_url</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://avatars.githubusercontent.com/u/5700428?v=3"</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        topic</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"542d6ecb9ecb3db94b2b3d0f"</span><span class="pun">,</span><span class="pln">
          title</span><span class="pun">:</span><span class="pln"> </span><span class="str">"adfadfadfasdf"</span><span class="pun">,</span><span class="pln">
          last_reply_at</span><span class="pun">:</span><span class="pln"> </span><span class="str">"2014-10-18T07:47:22.563Z"</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        reply</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"543fb7abae523bbc80412b24"</span><span class="pun">,</span><span class="pln">
          content</span><span class="pun">:</span><span class="pln"> </span><span class="str">"[@DongHongfei](/user/DongHongfei) 哼哼哈嘿"</span><span class="pun">,</span><span class="pln">
          ups</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="pun">],</span><span class="pln">
          create_at</span><span class="pun">:</span><span class="pln"> </span><span class="str">"2014-10-16T12:18:51.566Z"</span><span class="pln">
          </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
    </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">]</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>
                        <h4>post /message/mark_all 标记全部已读</h4>
                        <p>接收 post 参数</p>
                        <ul>
                            <li>accesstoken
                                <code>String</code>
                            </li>
                        </ul>
                        <p>返回值示例</p>
                        <pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  marked_msgs</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'544ce385aeaeb5931556c6f9'</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">}</span></code></pre>
                        <h3>知识点</h3>
                        <ol>
                            <li>如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用
                                <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
      return {

      }
  },

}
</script>

<style lang="less" scoped>
.api {
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
