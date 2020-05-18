<!--  -->
<template>
  <div @click="$eouter.push('/detail/'+detail.id+'')">
      <div class="detailitem">
          <img :src="detailitem.img" alt="" style="width:100%">
          <p>{{ detailitem.name }}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:['detailitem']
}

</script>
<style lang="scss">
.detailitem{
    p{
        font-size: 12px;
    }
}
</style>