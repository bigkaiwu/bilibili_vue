<!-- 注册页面  -->
<template>
  <div>
      <login-top middleTop="注册Bilibili"></login-top>
      <login-text
        class="firstInput"
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{6,16}$"
        @inputChange = "res => model.name = res"
        />
      <login-text
        label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange = "res => model.username = res"
        />
      <login-text
        label="密码"
        placeholder="请输入密码"
        type="password"
        rule="^.{6,16}$"
        @inputChange = "res => model.password = res"
        />
      <login-btn
        btext="注册"
        @registerSubmit = "registerSubmit"
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
          model:{
            name:'',
            username:'',
            password:''
          }
      }
  },
  methods:{
      async registerSubmit(){
          let rulg = /^.{6,16}$/
          if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
            const res = await this.$http.post('/register',this.model)
            this.$msg.fail(res.data.msg)
          }else{
              this.$msg.fail('输入的格式不正确，请重新输入')
          }
      }
  }
}

</script>
<style lang="scss">
.firstInput{margin: 5.556vw 0;}
</style>