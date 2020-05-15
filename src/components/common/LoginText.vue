<!-- 登录注册 输入框 -->
<template>
  <div>
     <van-field v-model="inputText" 
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
          inputText:''
      }
  },
  methods:{
    handleRule(){
      const rul = new RegExp(this.rule);
      if(rul.test(this.inputText)){
        this.$emit('inputChange',this.inputText);
      }
    }
  },
  watch:{
    inputText(){
      this.handleRule();
    }
  }
}

</script>
<style lang="scss">
</style>