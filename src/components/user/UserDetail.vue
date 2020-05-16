<!-- 个人中心详情 -->
<template>
  <div class="userDetail">
    <div>
      <div class="user_img">
        <img :src="userinfo.user_img" v-if="userinfo.user_img" alt />
        <img src="@/assets/default_img.jpg" v-else alt />
      </div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span>粉丝</span>
          </p>
          <p>
            <span>1</span>
            <span>关注</span>
          </p>
          <p>
            <span>0</span>
            <span>获赞</span>
          </p>
        </div>
        <div>
          <div class="user_editBtn" @click="$router.push('/edit')">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
        <h2>{{ userinfo.name }}</h2>
        <p v-if="userinfo.user_desc">{{ userinfo.user_desc }}</p>
        <p v-else>这个人很神秘，什么都没有写...</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['userinfo']
};
</script>
<style scoped lang="scss">
.userDetail {
  background-color: #fff;
  padding: 0 12px;
  > div:nth-child(1) {
    display: flex;
    padding: 5px 0;
    .user_img {
      img {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        margin-right: 30px;
      }
    }
    .user_edit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        padding: 5px 0;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #999;
          font-size: 13px;
        }
        p:nth-child(1),
        p:nth-child(2) {
          border-right: 1px solid #999;
        }
      }
      div:nth-child(2) {
        .user_editBtn {
          border: 1px solid #fb7a9f;
          display: flex;
          align-content: center;
          justify-content: center;
          color: #fb7a9f;
          border-radius: 5px;
        }
      }
    }
  }
  > div:nth-child(2){
      h2{
          font-weight: 300;
      }
      p{
          padding:0;
          color: #999;
      }
  }
}
</style>