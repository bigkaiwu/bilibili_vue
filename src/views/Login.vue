<!-- 注册页面  -->
<template>
  <div>
      <login-top middleTop="登录Bilibili">
          <div  slot="right" 
                class="loginTopFt" 
                style="font-size:3.611vw" 
                @click="$router.push('/register')">去注册</div>
      </login-top>
      <login-text
        label="账号"
        class="firstInput"
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
        btext="登录"
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
            username:'',
            password:''
          }
      }
  },
  methods:{
      async registerSubmit(){
          let rulg = /^.{6,16}$/
          if(rulg.test(this.model.username) && rulg.test(this.model.password)){
            const res = await this.$http.post('/login',this.model)
            this.$msg.fail(res.data.msg)
            if(res.data.code === 301 || res.data.code === 302){
              return
            }
            localStorage.setItem('id',res.data.id)
            localStorage.setItem('token',res.data.token)
            setTimeout(() => {
              this.$router.push('/userinfo')
            }, 1000);
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