<!-- 登录注册 按钮 -->
<template>
  <div class="btnParent">
      <div class="loginBtn" @click="registerClick">{{btext}}</div>
  </div>
</template>

<script>
export default {
    props:['btext'],
    methods:{
        registerClick(){
            this.$emit("registerSubmit")
        }
    }
}

</script>
<style lang="scss">
.btnParent{
    padding: 15px 10px;
}
.loginBtn{
    height: 12.5vw;
    background-color: #ff9db5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 4.444vw;
    border-radius:6.25vw ;
}
</style>