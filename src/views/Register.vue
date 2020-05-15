<!-- 注册页面  -->
<template>
  <div>
      <login-top middleTop="注册Bilibili"></login-top>
      <login-text
        class="firstInput"
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{4,16}$"
        />
      <login-text
        label="账号"
        placeholder="请输入账号"
        rule="^.{4,16}$"
        />
      <login-text
        label="密码"
        placeholder="请输入密码"
        type="password"
        rule="^.{4,16}$"
        />
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'

export default {
  components: {
      LoginTop,
      LoginText
  }
}

</script>
<style lang="scss">
.firstInput{margin: 5.556vw 0;}
</style>