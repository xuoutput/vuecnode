<template>
    <div class="login">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{name: 'HomeRoute'}">主页</router-link>                        
                        <span class="divider">/</span>
                    </li>
                    <ul class="active">登录</ul>
                </ul>
            </div>
            <div class="inner">
                <form action="" id="signup_form" class="form-horizontal">
                    <!-- <div class="control-group">
                        <label for="loginname" class="control-label">用户名</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="loginname" name="loginname" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="pass" class="control-label">密码</label>
                        <div class="controls">
                            <input type="password" class="input-xlarge" id="pass" name="pass" size="30">
                        </div>       
                    </div> -->
                    <div class="control-group">
                        <label for="accessToken" class="control-label">AccessToken</label>
                        <div class="controls">
                            <!-- 这下面id  name都不要填,连token都写错了 这个直接显示在url上了 -->
                            <!-- <input type="text" class="input-xlarge" id="accessTkoen" name="accessTkoen" size="30" @keyup.enter='login'> -->
                            <input type="text" class="input-xlarge" id="accessToken" v-model="token" @keyup.enter='login'>
                        </div>       
                    </div>
                    <!-- <input type="hidden" name="_csrf" value="123123123"> -->
                    <div class="form-actions">
                        <button type="button" class="span-primary" @click="login">登录</button>
                        <!-- 用了button每次都提交  还会刷新页面 所以加上type就不会提交了了 -->
                        <!-- <button class="span-primary" @click="login">登录</button> -->
                        <!-- <input type="submit" class="span-primary" value="登录" @click="login"> -->
                        <a href="">
                            <span class="span-info">通过GitHub登录</span>
                        </a>
                        <router-link :to="{name: 'SearchPassRoute'}" id="forgot_password">忘记密码?</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import API_CONFIG from '../api/index'

export default {
  data() {
      return {
          token: ''
      }
  },
  methods: {
      login() {
          if(!this.token) {
              alert('accesstoken不能为空')
          }else
          {
            // 这个直接请求不行 表单提交后 会刷新一下 还是用vuex来 还能保存返回post的信息. mmp原来根部就是没加this.token这个this.气死了
            this.$http({
                url: `${API_CONFIG.login}`,
                method: 'post',
                // headers: {'X-Requested-With': 'XMLHttpRequest'},
                data: {
                    accesstoken: this.token
                    // 这么写当然完了
                    // accesstoken: 'token'
                },
            }).then((res) => {
                if(res.data.success) {
                    console.log('登录成功');
                    // 用vuex好了
                    // sessionStorage.setItem('vue-token', this.token)
                    this.$store.dispatch('login', {
                        token: this.token,
                        userInfo: res.data,
                    });                    
                    // 下面三个都可以的
                    // this.$router.replace('/');
                    // this.$router.push('/');
                    this.$router.push({name: 'HomeRoute'});
                }
            }).catch((err) => {
                console.warn('gg');
                
                console.log('Login error: ', err);
            });
          }       
      }
  }
}
</script>

<style lang="less" scoped>
.login {
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
          
          line-height: 2rem;
          background-color: #fff;
          text-align: left;
          a {
              color: #778087;
          }   
          form.form-horizontal {
              margin-top: 40px;
              .control-group {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;

                  margin-bottom: 20px;

                  font-size: 14px;
                  font-weight: 400;
                  line-height: 20px;
                  .control-label {
                      padding-top: 5px;
                      margin-bottom: 5px;

                      width: 160px;
                      text-align: right;
                  }
                  .controls {
                    //   margin-left: 180px;
                      margin-left: 40px;
                  }
              }
              .form-actions {
                  padding: 20px;
                  padding-left: 180px;
                  margin: 20px 0;
                  max-height: 40px;

                  background-color: #fff;
                  .span-primary {
                      padding: 3px 10px;
                      margin: 0;
                      border: 0;
                      border-radius: 3px;

                      line-height: 2em;
                      color: #fff;
                      background-color: #3374de;

                      cursor: pointer;
                  }
                  a {
                      .span-info {
                          display: inline-block;
                          padding: 3px 10px;
                          border-radius: 3px;

                          line-height: 2em;
                          color: #fff;
                          background-color: #7597d4;

                          cursor: pointer;
                      }
                  }
                  #forgot_password {
                      margin-left: 1em;
                  }
              }
          }       
        }
    }    
}
</style>