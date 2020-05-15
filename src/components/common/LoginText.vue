<!-- 登录注册 输入框 -->
<template>
  <div>
     <van-field v-model="text" 
        :label="label" 
        :placeholder="placeholder" 
        :type="type" 
        :rule="rule" 
        /> 
  </div>
</template>

<script>
export default {
  props:['label','placeholder','type','rule'],
  data(){
      return{
          text:''
      }
  }
}

</script>
<style lang="scss">
</style>