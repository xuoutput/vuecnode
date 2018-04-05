<template>
    <div class="login">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{name: 'HomeRoute'}">主页</router-link>
                        <span class="divider">/</span>
                    </li>
                    <ul class="active">注册</ul>
                </ul>
            </div>
            <div class="inner">
                <form action="" id="signup_form" class="form-horizontal">
                    <div class="control-group">
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
                    </div>
                    <div class="control-group">
                        <label for="re_pass" class="control-label">确认密码</label>
                        <div class="controls">
                            <input type="password" class="input-xlarge" id="re_pass" name="re_pass" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="email" class="control-label">电子邮件</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="email" name="email" size="30">
                        </div>       
                    </div>
                    <input type="hidden" name="_csrf" value="123123123">
                    <div class="form-actions">
                        <input type="submit" class="span-primary" value="注册">
                        <a href="">
                            <span class="span-info">通过GitHub登录</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {

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
              }
          }       
        }
    }    
}
</style>