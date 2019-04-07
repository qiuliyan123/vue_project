<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-invarted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in kinds" :key="item.id" @click.prevent="getPhotoListById(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
import {Toast} from "mint-ui"
export default {
  data () {
    return {
        kinds:[],
        list:[]
    };
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
          deceleration:0.0005
      })
  },
  methods:{
      getKinds(){
          this.$http.get("api/getimgcategory").then(res=>{
            //   console.log(res);
              if(res.body.status==0){
                  //手动拼接最完整的分类列表
                  res.body.message.unshift({title:'全部',id:0})
                  this.kinds = res.body.message
              }else{
                  Toast("获取列表失败")
              }
          })
      },
      getPhotoListById(id){
          this.$http.get("api/getimages/"+id).then(res=>{
            //   console.log(res);
              if(res.body.status == 0){
                  this.list = res.body.message
              }else{
                  Toast("获取图片失败")
              }
          })
      }
  },
  created(){
      this.getKinds(),
      //默认获取所有图片的数据
      this.getPhotoListById(0)

  }
}
</script>
<style lang="scss" scoped>
.photo-list{
	list-style: none;
	margin:0;
	padding:10px;
	padding-bottom:0;
	li{
        position: relative;
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		img{
			width:100%;
			vertical-align: middle;
		}
		img[lazy=loading]{
			width: 40px;
			height: 3px;
			margin:auto;
		}
        .info{
			color:#fff;
			text-align: left;
			position: absolute;
			bottom:0;
			background-color: rgba(0,0,0,0.4);
			max-height: 84px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 13px;
			}
		}
	}
}
</style>