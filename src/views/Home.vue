<template>
  <div class="home">
    <navbar></navbar>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
        内容
      </van-tab>
    </van-tabs>
    <detail />
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
        return item
      })
      this.category = category1
    },
    async selectArticle(){
      const categoryitem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryitem._id,{
        params:{
          page:categoryitem.page,
          pagesize:categoryitem.pagesize
        }
      })
      categoryitem.list = res.data
      
    },
    categoryItem(){
      const categoryitem = this.category[this.active] 
      return categoryitem
    }
  },
  watch:{
    active(){
      this.selectArticle()
    }
  }
}
</script>
