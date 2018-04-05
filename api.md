以下 api 路径均以 **https://cnodejs.org/api/v1** 为前缀

### 主题

#### get /topics 主题首页

接收 get 参数

- page `Number` 页数
- tab `String` 主题分类。目前有 `ask` `share` `job` `good` 默认`all`
- limit `Number` 每一页的主题数量
- mdrender `Boolean` 当为 `false` 时，不渲染。默认为 `true`，渲染出现的所有 markdown 格式文本。

示例：/api/v1/topics

返回值示例:

```json
{
    "data": [
        {
            "id": "5ac321549b1b06e7639caee9",
            "author_id": "5aaf99729b1b06e7639caca4",
            "tab": "ask",
            "content": "<div class=\"markdown-text\"><p>试试试试试试试试试</p>\n</div>",
            "title": "测试测试试请忽略",
            "last_reply_at": "2018-04-03T06:46:01.796Z",
            "good": false,
            "top": false,
            "reply_count": 3,
            "visit_count": 19,
            "create_at": "2018-04-03T06:38:12.744Z",
            "author": {
                "loginname": "renmingming",
                "avatar_url": "//gravatar.com/avatar/2f7795f2f15a40f807be307e0452c57a?size=48"
            }
        },
        {
            "id": "5ac044689b1b06e7639cae91",
            "author_id": "5ab308bd9b1b06e7639cad3c",
            "tab": "ask",
            "content": "<div class=\"markdown-text\"><p>怎么判断登录用户是收藏了某一个帖子的</p>\n</div>",
            "title": "vuejs社区的加入收藏和取消收藏的api",
            "last_reply_at": "2018-04-03T02:19:46.246Z",
            "good": false,
            "top": false,
            "reply_count": 3,
            "visit_count": 87,
            "create_at": "2018-04-01T02:31:04.433Z",
            "author": {
                "loginname": "v94xcw",
                "avatar_url": "//gravatar.com/avatar/504e6774d725b1f1058ce0f66470e568?size=48"
            }
        },
                
    ]
}
```

说明:

要注意到`tab`并没有`good` ,而是单独作为一个`boolean` 和`top` 一样,所以要先判断置顶,在判断精华,最后其他.

#### get /topic/:id 主题详情

接收 get 参数

- mdrender `Boolean` 当为 `false` 时，不渲染。默认为 `true`，渲染出现的所有 markdown 格式文本。
- accesstoken `String` 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 `is_collect`以及 `replies` 列表中的 `is_uped` 值。

示例：/api/v1/topic/58c216c0b011a6b41c0261fa

返回值示例:

```json
{
    "data": {
        "id": "58c216c0b011a6b41c0261fa",
        "author_id": "58739c71a9c1282817afbf7d",
        "tab": "share",
        "content": "<div class=\"markdown-text\"><h2>引言</h2>\n<p>社区目前在日益渐大，为了使社区存在更有意义，让更多的人看到的是对其有帮助的信息，而不是一堆无意义的跟贴及主题，为了保持社区的良好氛围，请大家能遵守发贴及跟贴规则，社区有你们的支持，未来会更美好</p>\n<h2>发贴</h2>\n<ul>\n<li>\n<p>标题要能描述一个问题,避免出现类似以下现象</p>\n<ul>\n<li>这个问题怎么解决？</li>\n<li>vuejs的研究</li>\n<li>第一次分享</li>\n</ul>\n</li>\n<li>\n<p>以上这种都是错误的示例，这样的主题一看都显的很low更别说有人愿意点进去看了，我们应当换一种思维方式来抛出问题及明确主题</p>\n<ul>\n<li>求助攻，xxxx使用了xxx却xxx</li>\n<li>Vue的xxx原理解析</li>\n<li>第一次xxxx分享，</li>\n</ul>\n</li>\n<li>\n<p>主题排版要整洁，干净，有层次</p>\n<ul>\n<li>大标题，小标题，代码块，适当的图片描述</li>\n<li>代码一定要用代码块结构</li>\n<li>太长的代码不适合出现在主题中，可以改为在线链接形式</li>\n</ul>\n</li>\n</ul>\n<h2>跟贴</h2>\n<ul>\n<li>这里反对中文互联网上的无信息量习惯如“顶”，“沙发”，“前排”，“留名”，“路过”，“不明觉厉”</li>\n<li>这里禁止发布人身攻击、仇恨、暴力、侮辱性的言辞、暴露他人隐私的“人肉贴</li>\n</ul>\n<h2>结语</h2>\n<p>再次请大家严格遵守，自律，出现3次及以上违规操作会被社区管理员忍痛关到小黑屋</p>\n</div>",
        "title": "社区申明：回复及发贴规则",
        "last_reply_at": "2018-03-21T06:13:58.595Z",
        "good": false,
        "top": true,
        "reply_count": 49,
        "visit_count": 5950,
        "create_at": "2017-03-10T03:00:16.444Z",
        "author": {
            "loginname": "febobo",
            "avatar_url": "https://avatars0.githubusercontent.com/u/9276376?v=4&s=120"
        },
        "replies": [
            {
                "id": "58c21e8cb011a6b41c026222",
                "author": {
                    "loginname": "aimluo",
                    "avatar_url": "//gravatar.com/avatar/442e8b662b701a1a309ee41edfde1f28?size=48"
                },
                "content": "<div class=\"markdown-text\"><p>强烈支持</p>\n</div>",
                "ups": [
                    "58be0daab011a6b41c025fc7",
                    "58c0ff31b011a6b41c026077",
                    "5a4f1db498e0e8c06cf1d8e3",
                    "59ca019c80b2e10363514bb1",
                    "5a6e7b05507fb80366319c47",
                    "5a7af1be507fb80366319dee"
                ],
                "create_at": "2017-03-10T03:33:32.961Z"
            },
        ]
    }
}
```



#### post /topics 新建主题

接收 post 参数

- accesstoken `String` 用户的 accessToken
- title `String` 标题
- tab `String` 目前有 `ask` `share` `job` `dev`。开发新客户端的同学，请务必将你们的测试帖发在 `dev` 专区，以免污染日常的版面，否则会进行封号一周处理。
- content `String` 主体内容

返回值示例

```
{success: true, topic_id: '5433d5e4e737cbe96dcef312'}
```

#### post /topics/update 编辑主题

接收 post 参数

- accesstoken `String` 用户的 accessToken
- topic_id `String` 主题id
- title `String` 标题
- tab `String` 目前有 `ask` `share` `job`
- content `String` 主体内容

返回值示例

```
{success: true, topic_id: '5433d5e4e737cbe96dcef312'}
```

#### post /topics/update 删除主题

接收 post 参数

- accesstoken `String` 用户的 accessToken
- topic_id `String` 主题id

返回值示例

```
{success: true}
```

### 

### 主题收藏

#### post /topic/collect 收藏主题

接收 post 参数

- accesstoken `String` 用户的 accessToken
- topic_id `String` 主题的id

返回值示例

```
{"success": true}
```

#### post /topic/de_collect 取消主题

接收 post 参数

- accesstoken `String` 用户的 accessToken
- topic_id `String` 主题的id

返回值示例

```
{success: true}
```

####  用户所收藏的主题 这个在用户信息中有



### 评论

#### post /topic/:topic_id/replies 新建评论

接收 post 参数

- accesstoken `String` 用户的 accessToken
- content `String` 评论的主体
- reply_id `String` 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。

返回值示例

```
{success: true, reply_id: '5433d5e4e737cbe96dcef312'}
```

#### post /topic/:reply_id/replies/ 回复评论  要么这里就直接@loginname 然后新建一个评论

接收 post 参数

- accesstoken `String` 用户的 accessToken
- content `String` 评论的主体
- reply_id `String` 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。

返回值示例

```
{success: true }
```

#### post /topic/:topic_id/replies/delete 删除评论

接收 post 参数

- accesstoken `String` 用户的 accessToken
- reply_id `String` 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。

返回值示例

```
{success: true }
```

#### 

#### post /reply/:reply_id/ups 为评论点赞

接受 post 参数

- accesstoken `String`

接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 `action` 字段中，`up` or `down`。

返回值示例

```
{"success": true, "action": "down"}
```

### 用户

#### get /user/:loginname 用户详情

示例：/api/v1/user/alsotang

返回值示例:

```json
{
    "data": {
        "loginname": "v94xcw",
        "avatar_url": "//gravatar.com/avatar/504e6774d725b1f1058ce0f66470e568?size=48",
        "create_at": "2018-03-22T01:37:01.411Z",
        "score": 125,
      // 这里把下面的用户详情加上
        'email': ''
        'website' : ''
        'location': ''
        'weibo ': ''
        'github ': ''
        'signature': ''
      
        "recent_topics": [
            {
                "id": "5ac044689b1b06e7639cae91",
                "author": {
                    "loginname": "v94xcw",
                    "avatar_url": "//gravatar.com/avatar/504e6774d725b1f1058ce0f66470e568?size=48"
                },
                "title": "vuejs社区的加入收藏和取消收藏的api",
                "last_reply_at": "2018-04-03T02:19:46.246Z"
            },
        ],
        "recent_replies": [
            {
                "id": "5ac044689b1b06e7639cae91",
                "author": {
                    "loginname": "v94xcw",
                    "avatar_url": "//gravatar.com/avatar/504e6774d725b1f1058ce0f66470e568?size=48"
                },
                "title": "vuejs社区的加入收藏和取消收藏的api",
                "last_reply_at": "2018-04-03T02:19:46.246Z"
            },
          ]
        "collect_topics": [
            {
                "id": "5a45cb389904b1140d09511a",
                "author": {
                    "loginname": "febobo",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/9276376?v=4&s=120"
                },
                "title": "💃What，你想参于一个开源项目却不知道从何开始?",
                "last_reply_at": "2018-03-28T01:38:19.290Z"
            },
          ]
    }
}
```



#### post /user/:loginname 修改用户信息

接收 post 参数

* accesstoken `String` 用户的 accessToken
* loginname `String` 用户名
* email `String` 邮箱
* website `String` 个人网站
* location `String` 所在地点
* weibo `String` 微博
* github `String` GitHub
* signature `String` 个性签名

#### post /password/:loginname 修改用户密码

接收 post 参数

- accesstoken `String` 用户的 accessToken
- old_pass `String`  当前密码
- new_pass `String` 新密码

返回值示例:

```json
{
    "success": true,
}
```



#### post /accesstoken 验证 accessToken 的正确性

接收 post 参数

- accesstoken `String` 用户的 accessToken

如果成功匹配上用户，返回成功信息。否则 403。

返回值示例

```json
{
    "success": true,
    "loginname": "v94xcw",
    "avatar_url": "//gravatar.com/avatar/504e6774d725b1f1058ce0f66470e568?size=48",
    "id": "5ab308bd9b1b06e7639cad3c"
}
```

### 消息通知

#### get /message/count 获取未读消息数

接收 get 参数

- accesstoken `String`

返回值示例

```
{ data: 3 }
```

#### get /messages 获取已读和未读消息

接收 get 参数

- accesstoken `String`
- mdrender `String` 当为 `false` 时，不渲染。默认为 `true`，渲染出现的所有 markdown 格式文本。

返回值示例

```
{
  data: {
    has_read_messages: [],
    hasnot_read_messages: [
      {
        id: "543fb7abae523bbc80412b26",
        type: "at",
        has_read: false,
        author: {
          loginname: "alsotang",
          avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
        },
        topic: {
          id: "542d6ecb9ecb3db94b2b3d0f",
          title: "adfadfadfasdf",
          last_reply_at: "2014-10-18T07:47:22.563Z"
        },
        reply: {
          id: "543fb7abae523bbc80412b24",
          content: "[@alsotang](/user/alsotang) 哈哈",
          ups: [ ],
          create_at: "2014-10-16T12:18:51.566Z"
          }
        },
    ...
    ]
  }
}
```

#### post /message/mark_all 标记全部已读

接收 post 参数

- accesstoken `String`

返回值示例

```
{ success: true,
  marked_msgs: [ { id: '544ce385aeaeb5931556c6f9' } ] }
```

#### post /message/mark_one/:msg_id 标记单个消息为已读

请求示例：/message/mark_one/58ec7d39da8344a81eee0c14

接收 post 参数

- accesstoken `String`

返回值示例

```
{
  success: true,
  marked_msg_id: "58ec7d39da8344a81eee0c14"
}
```