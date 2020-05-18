<!--  -->
<template>
  <div @click="pathPush" v-if="detailitem">
      <div class="detailitem">
          <img :src="detailitem.img" alt="" style="width:100%">
          <p>{{ detailitem.name }}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:['detailitem'],
    methods:{
        pathPush() {
            if(this.$route.path != `/video/${this.detailitem.id}`) {
                this.$router.push(`/video/${this.detailitem.id}`)
            }
        }
    }
}

</script>
<style lang="scss">
.detailitem{
    p{
        font-size: 12px;
    }
}
</style>