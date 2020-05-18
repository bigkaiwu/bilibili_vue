<template>
  <div class="home">
    <navbar></navbar>
      <van-tabs v-model="active" sticky>
          <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
            <van-list
              :immediate-check="false"
              v-model="item.loading"
              :finished="item.finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <div class="detailPar">
                <detail 
                  class="detailitem"
                  v-for="(citem,cindex) in item.list"
                  :key="cindex"
                  :detailitem = "citem"
                  />
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/common/Navbar.vue'
import Detail from '@/components/list/Detail.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Detail
  },
  data(){
    return{
      category:[],
      active:0
    }
  },
  mounted(){
    this.getCategory()
  },
  methods:{
    async getCategory(){
      const res = await this.$http.get('/category')
      this.changeCategory(res.data)
    },
    changeCategory(data){
      const category1 = data.map((item) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.finished = false
        item.loading = false
        return item
      })
      this.category = category1
      this.selectArticle()
    },
    async selectArticle(){
      const categoryitem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryitem._id,{
        params:{
          page:categoryitem.page,
          pagesize:categoryitem.pagesize
        }
      })
      categoryitem.list.push(...res.data)
      categoryitem.loading = false
      if(res.data.length < categoryitem.pagesize){
        categoryitem.finished = true
      }
    },
    categoryItem(){
      const categoryitem = this.category[this.active] 
      return categoryitem
    },
    onLoad() {
      const categoryitem = this.categoryItem()
      setTimeout(() => {
        categoryitem.page += 1
        this.selectArticle()
      }, 2000);
    }
  },
  watch:{
    active(){
      this.selectArticle()
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #fff;
}
.detailPar{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem{
    width: 45%;
    margin: 5px 0;
  }
}
</style>
