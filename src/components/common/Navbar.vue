<!--  -->
<template>
  <div class="m_navbar">
      <div class="logo">
          <img src="@/assets/logo.png" alt="">
      </div>
      <div>
          <p>
              请输入内容...
              <van-icon class="ipt" name="search" />
          </p>
      </div>
      <div>
          <img src="@/assets/default_img.jpg" alt="">
          <p>下载App</p>
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang="scss">
.m_navbar{
    height: 45px;
    background-color: white;
    display: flex;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        img{
            width: 80%;
        }
    }
    div:nth-child(2){
        flex: 1;
        display: flex;
        align-items: center;
        p{
            height: 26px;
            background-color: #f4f4f4;
            position: relative;
            width: 90%;
            border-radius: 10px;
            color: #aaa;
            font-size: 13px;
            padding-left: 25px;
            margin: 0 5px;
            line-height: 30px;
            .ipt{
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translate(0,-40%);
                color: #aaa;
            }
        }
    }
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            padding: 5px 10px;
            margin: 0 15px;
            border-radius:5px ;
            font-size: 13px;
            background-color: #fb7299;
            color: #fff;
        }
        img{
            width: 24px;
            height: 24px;
        }
    }
}
</style>