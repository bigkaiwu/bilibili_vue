<!-- 登录注册 顶部导航 -->
<template>
  <div>
      <div class="LoginTop">
          <div></div>
          <div>{{ middleTop }}</div>
          <div></div>
      </div>
  </div>
</template>

<script>
export default {
  props:['middleTop']
}

</script>
<style lang="scss">
.LoginTop{
    height: 45px;
    background-color: #fff;
    display: flex;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;//px to vw插件 Press "Alt + Z"
    }
}
</style>