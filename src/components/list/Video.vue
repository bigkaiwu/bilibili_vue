<template>
  <div v-if="model">
      <nav-bar></nav-bar> 
      <div class="detailinfo">
         <div class="video">
              <video controls="controls" :src="model.content"></video>
         </div>
         <div class="detailinfoText">
              <div>
                  <span>{{model.name}}</span>
              </div>
              <div>
                  <span>146.4万次观看</span>
                  <span>5281弹幕</span>
                  <span>{{model.date}}</span>
              </div>
         </div>
          
      </div>
     
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'

export default {
    data() {
        return {
            model:[],
        }
    },
    components:{
        NavBar
    },
    methods:{
        //获取文章信息
        async articleitemData() {
            const res = await this.$http.get('/article/' + this.$route.params.id)
            this.model = res.data[0]
            console.log(this.model);
            
        }
    },
    mounted(){
        this.articleitemData()
    }
}
</script>

<style lang="scss">
.detailinfo{
    background-color: white;
    .video{
        width: 100%;
        video{
            width: 100%;
        }
    }
}
.detailinfoText{
    padding: 4.167vw;
    div:nth-child(1) {
        span:nth-child(1) {
            padding:0 2.778vw;
            color: #fb7299;
            background-color: #f4f4f4;
            border-radius: 2.778vw;
        }
    }
    div:nth-child(2) {
        padding: 2.778vw 2.778vw;
        span{
            color: #aaa;
            font-size: 3.333vw;
            margin-right: 2.778vw;
        }
        span:nth-child(1) {
            color: black;
            font-size: 4vw;
            padding-right:2.778vw;
        }
    }
    div:nth-child(3) {
        padding: 0 2.778vw;
        display: flex;
        
        p{
            margin-right: 10px;
            display: flex;
            align-items: center;
            color: #757575;
            span:nth-child(1) {
                margin-right: 3px;
                font-size: 21px;
            }
            span:nth-child(2) {
                font-size: 13px;
            }
        }
        .activeColor{
            color: #fb7299;
        }
    }
    
}

.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
</style>