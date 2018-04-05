const URL = 'https://www.vue-js.com/api/v1';

const API_CONFIG = {
   // 获取用户详情信息 post /accesstoken 验证 accessToken 的正确性
   login: `${URL}/accesstoken`,
//    login: '/accesstoken',
   // 用户详情 get /user/:loginname 用户详情
   user: `${URL}/user/`,
   // 填写用户详情信息 post /user/:loginname 用户详情  这个该怎么写 比如个性签名
   user: `${URL}/user/`,

   // 获取主题列表 get /topics 主题首页
   topics: `${URL}/topics`,
   // 获取主题详情包括回复 get /topic/:id 主题详情
   topicDetail: `${URL}/topic/`,
   // 新建主题 post /topics 新建主题
   createTopics: `${URL}/topics`,
   // 编辑主题 post /topics/update 编辑主题
   updateTopics: `${URL}/topics/update`, 
   // 删除主题 post /topics/delete 删除主题
   deleteTopics: `${URL}/topics/delete`,
      
   // 收藏主题 post /topic_collect/collect 收藏主题
   collection: `${URL}/topic/collect`,
   // 取消收藏主题 post /topic_collect/de_collect 取消主题
   cancelCollection: `${URL}/topic/de_collect`,
   // 用户所收藏的主题 get /topic_collect/:loginname 用户所收藏的主题  这个在用户详情中有
//    userCollections: `${URL}/topic_collect/`,

   // 新建评论 post /topic/:topic_id/replies 新建评论
   replies: `${URL}/topic/`,
   // 点赞/取消点赞 post /reply/:reply_id/ups 为评论点赞
   like: `${URL}/reply/`,

   // 获取未读消息数 get /message/count 获取未读消息数
   messageCount: `${URL}/message/count`,
   // 获取已读和未读消息 get /messages 获取已读和未读消息
   fetchMessages: `${URL}/messages`,
   // 标记全部已读 post /message/mark_all 标记全部已读
   messageMarkAll: `${URL}/message/mark_all`,
   // 标记单个消息为已读 post /message/mark_one/:msg_id 标记单个消息为已读
   messageMarkOne: `${URL}/message/mark_one/`,
}

export default API_CONFIG
// export default API_CONFIG ={}  不行