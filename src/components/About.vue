<template>
    <div class="api">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <a href="/">主页</a>
                        <span class="divider">/</span>
                    </li>
                    <li class="active">关于</li>
                </ul>
            </div>
            <div class="inner topic">
                <p>guangyuyuyuyu</p>
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
