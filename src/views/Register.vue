<!-- 注册页面  -->
<template>
  <div>
      <login-top middleTop="注册Bilibili"></login-top>
      <login-text
        class="firstInput"
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{6,16}$"
        @inputChange = "res => name = res"
        />
      <login-text
        label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange = "res => username = res"
        />
      <login-text
        label="密码"
        placeholder="请输入密码"
        type="password"
        rule="^.{6,16}$"
        @inputChange = "res => password = res"
        />
      <login-btn
        btext="注册"
        />
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'

export default {
  components: {
      LoginTop,
      LoginText,
      LoginBtn
  },
  data(){
      return{
          name:'',
          username:'',
          password:''
      }
  }
}

</script>
<style lang="scss">
.firstInput{margin: 5.556vw 0;}
</style>