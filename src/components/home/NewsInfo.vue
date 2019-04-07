<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsDetail.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsDetail.add_time | dataFormat}}</span>
            <span>点击：{{newsDetail.click}}次</span>
        </p>
        <div class="content" v-html="newsDetail.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
import comments from "./Comment.vue"
export default {
  data () {
    return {
        id:this.$route.params.id,
        newsDetail:{}
    };
  },
  methods:{
      getNewsDetail(){
          this.$http.get('api/getnew/'+this.id).then(res=>{
            //   console.log(res);
              if(res.body.status == 0){
                  this.newsDetail = res.body.message[0]
              }else{
                  Toast("获取新闻详情失败")
              }
          })
      }
  },
  created(){
      this.getNewsDetail()
  },
  components:{
      "comment-box":comments
  }
}
</script>
<style lang="scss" scoped>
</style>