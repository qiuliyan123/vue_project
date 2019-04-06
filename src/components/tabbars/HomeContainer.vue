<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboData" :key="item.id">
          <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
        lunboData:[]
    };
  },
  methods:{
      getLunboData(){
          this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
            console.log(res);
            if(res.body.status == 0){
                this.lunboData = res.body.message
            }
          })
      }
  },
  created(){
      this.getLunboData()
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: blue;
    }
    &:nth-child(3) {
      background: green;
    }
    img{
        width: 100%;
        height: 100%;
    }
  }
}
</style>