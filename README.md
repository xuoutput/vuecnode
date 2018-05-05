# vueconde

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue-js API

参考[vuejs api](https://www.vue-js.com/api/)
有些功能没有提供相应API. 如果想自己做一个符合自己期望的,可以使用nodejs+mongodb做一个后台接口.

## 需求

- 首页
  - [x] 展示帖子列表
  - [x] 用户登录信息
  - [ ] 热门回复话题
  - [ ] 积分排行榜
- 主题详情
  - [x] 内容
  - [x] 加入收藏
  - [x] 评论
  - [x] 评论回复
- [x] 新建主题
- [ ] 消息提示
- [x] 登录
- [x] 个人信息
  - [x] 修改个人信息
  - [ ] 显示所有收藏帖子

## 所用技术

vue vue-router vuex axios 