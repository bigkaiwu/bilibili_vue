<!-- 个人中心 -->
<template>
  <div>
      <navbar></navbar>
      <img  class="banner" src="@/assets/bannerTop_new.png" alt="">
      <userdetail :userinfo="model"/>
      <userarticle />
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Userdetail from '@/components/user/UserDetail.vue'
import Userarticle from '@/components/user/UserArticle.vue'

export default {
  components:{
      Navbar,
      Userdetail,
      Userarticle
  },
  data(){
      return{
          model:{}
      }
  },
  mounted(){
      this.getUserInfo()
  },
  methods:{
      async getUserInfo(){
          const res = await this.$http.get('/user/' + localStorage.getItem('id'),{
            //   设置请求头 Bearer (后端有空格)
              headers:{
                  'Authorization' : 'Bearer ' + localStorage.getItem('token')
              }
              
          })
          console.log(res);
          
          this.model = res.data[0]
      }
  }
}

</script>
<style lang="scss">
.banner{
    height: 105px;
    width: 100%;
}
</style>