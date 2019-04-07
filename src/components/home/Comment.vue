<template>
     <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐嘲120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="fabiao">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in comData" :key="item.id">
            <div class="cmt-title">
              第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dataFormat}}
            </div>
            <div class="cmt-body">
              {{item.content}}
            </div>
          </div>
          
        </div>
        <mt-button type="danger" size="large" plain @click="jiazai" ref="btn1">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data () {
    return {
      pageIndex:1,//默认显示第一页评论
      comData:[],//评论的数据
      msg:""//评论的内容
    };
  },
  props:[
    "id"
  ],
  methods:{
    getComData(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
        console.log(res);
        // console.log(this.id);
        if(res.body.status==0){
          this.comData = this.comData.concat(res.body.message)
          if(res.body.message.length < 10){
            console.log(this.$refs.btn1)
          }
        }else{
          Toast('获取评论失败')
        }
      })
    },
    jiazai(){
      this.pageIndex++
      this.getComData()
    },
    fabiao(){
      if(this.msg.trim().length == 0){
        Toast("评论不能为空")
        return
      }
      this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()}).then(res=>{
        // console.log(res);
        
          var cmt = {user_name:"匿名用户",add_time:Date.now(),content:this.msg}
          this.comData.unshift(cmt)
          this.msg = ""
        
      })
    },
    
  },
  created(){
    this.getComData()
  }
}
</script>
<style lang="scss" scoped>
 .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea{
      font-size: 14px;
      height: 85px;
      margin:0;
    }
    .cmt-list{
      margin:5px 0;
      .cmt-item{
        font-size:13px;
        .cmt-title{
          line-height: 30px;
          background-color:#ccc;
        }
        .cmt-body{
          line-height:35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>