<template>
    <div class="messages">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{name: 'HomeRoute'}">主页</router-link>
                        <span class="divider">/</span>
                    </li>
                    <ul class="active">新消息</ul>
                </ul>
            </div>
            <div class="inner">
                <!-- <p>无消息</p>
                <p>{{count1}}</p>
                <p>{{a}}</p>
                <p>{{task}}</p>
                <button @click="add('ff')">++</button>                 -->
                <!-- <button @click="add">++</button>                
                <button @click="decre">--</button>                 -->
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <span class="col_fade">过往消息</span>
            </div>
            <div class="inner">
                <p>无消息</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
      return {
        //   task: 'hhhh'
      }
  },
  computed: {
    //   ...mapState({
    //       count1: state => state.count,
    //       a: function (state) {
    //           return state.a1
    //       },
    //       task: state => state.todos.task
    //   })
  },
  methods: {
    //   ...mapMutations({
    //       add: 'increment',
    //   })
    // ...mapMutations([
    //     'decre'
    // ])
    // ...mapMutations({
    //     add: 'add'
    // })
    // add (params) {
    //     console.log(params);
    //     this.$store.commit('add', params)
    // }
    // ...mapActions({
    //     add: 'adg'
    // })
  }

}
</script>

<style lang="less" scoped>
.messages {
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
                .help-block {
                padding: 0 0 0 200px;
                // text-align: center;
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

              }
          }       
        }
    }    
}
</style>