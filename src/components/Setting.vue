<template>
    <div class="setting">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{name: 'HomeRoute'}">主页</router-link>
                        <span class="divider">/</span>
                    </li>
                    <ul class="active">设置</ul>
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
                        <label for="email" class="control-label">电子邮件</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="email" name="email" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="url" class="control-label">个人网站</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="url" name="yrl" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="location" class="control-label">所在地点</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="location" name="location" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="weibo" class="control-label">微博</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="weibo" name="weibo" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="github" class="control-label">GitHub</label>
                        <div class="controls">
                            <input type="text" class="input-xlarge" id="github" name="github" size="30">
                        </div>       
                    </div>
                    <input type="hidden" name="_csrf" value="123123123">
                    <div class="form-actions">
                        <input type="submit" class="span-primary" value="保存设置">
                    </div>
                </form>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{}">更改密码</router-link>
                    </li>
                </ul>
            </div>
            <div class="inner">
                <form action="" id="signup_form" class="form-horizontal">
                    <div class="control-group">
                        <label for="pass" class="control-label">当前密码</label>
                        <div class="controls">
                            <input type="password" class="input-xlarge" id="pass" name="pass" size="30">
                        </div>       
                    </div>
                    <div class="control-group">
                        <label for="re_pass" class="control-label">新密码</label>
                        <div class="controls">
                            <input type="password" class="input-xlarge" id="re_pass" name="re_pass" size="30">
                        </div>       
                    </div>          
                    <input type="hidden" name="_csrf" value="123123123">
                    <div class="form-actions">
                        <input type="submit" class="span-primary" value="更改密码">
                    </div>
                </form>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{}">AccessTkoen</router-link>
                    </li>
                </ul>
            </div>
            <div class="inner">
                <div>
                    <span>字符串</span>34234234
                </div>
                <div></div>
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
.setting {
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