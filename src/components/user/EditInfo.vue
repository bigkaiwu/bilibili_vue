<!--  -->
<template>
<div class="edit_info">
        <van-cell title="头像">
            <van-uploader :after-read="afterRead" />
            <template #right-icon>
                <van-image
                    round
                    width="5rem"
                    height="5rem"
                    :src="model.user_img"
                    />
            </template>
        </van-cell>

    <van-field v-model="model.name" type="text" label="昵称" input-align="right" />
    <van-field v-model="model.username" type="text" label="账号" input-align="right"/>
    <van-field v-model="model.gender" type="text" label="性别" input-align="right"/>
    <van-field v-model="model.user_desc" type="text" label="个性签名" input-align="right" />
  </div>
</template>

<script>
export default {
   data() {
    return {
      model:{}
    };
  },
  mounted(){
      this.getUserInfomation()
  },
  methods:{
    //   进入组建调取数据渲染页面
      async getUserInfomation(){
          const res = await this.$http.get('/user/' + localStorage.getItem('id'))
          this.model = res.data[0]
      },
    // 上传更新头像
      async afterRead(file){
          const formdata = new FormData()
          formdata.append('file',file.file)
          const res = await this.$http.post('/upload/',formdata)
          this.model.user_img = res.data.url
      }
  }
}

</script>
<style lang="scss" scoped>
</style>