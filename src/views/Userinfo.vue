<!-- 个人中心 -->
<template>
  <div>
      <navbar></navbar>
      <img class="banner" src="@/assets/bannerTop_new.png" alt="">
      <userdetail></userdetail>
      <userarticle></userarticle>
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
  mounted(){
      this.getUserInfo()
  },
  methods:{
      async getUserInfo(){
          const res = await this.$http.get('/user' + localStorage.getItem('id'))
          console.log(res)
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