<!-- 个人中心 -->
<template>
  <div>
      <navbar></navbar>
      <img class="banner" src="@/assets/bannerTop_new.png" alt="">
      <userdetail></userdetail>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Userdetail from '@/components/user/UserDetail.vue'

export default {
  components:{
      Navbar,
      Userdetail
  }
}

</script>
<style lang="scss">
.banner{
    height: 105px;
    width: 100%;
}
</style>