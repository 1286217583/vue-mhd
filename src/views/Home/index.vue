<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部 end -->

    <!-- 轮播图 begin -->
      <Swiper class="my-swiper" @change="onChange">
        <Swiper-item>
          <img src="../../assets/banner1.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner2.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner3.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner4.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner5.jpg" alt="">
        </Swiper-item>
      </Swiper>
    <!-- 轮播图 end -->
    <Swiper class="my-swiper" @change="onChange">
        <Swiper-item>
          <img src="../../assets/banner1.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner2.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner3.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner4.jpg" alt="">
        </Swiper-item>
        <Swiper-item>
          <img src="../../assets/banner5.jpg" alt="">
        </Swiper-item>
      </Swiper>
  </div>
</template>

<script>
// import Swiper from '../../components/Swiper/Swiper'
// import SwiperItem from '../../components/Swiper/SwiperItem'

import { Swiper, SwiperItem } from '../../components/Swiper'
export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem
  },

  methods: {
    onChange (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/user-btn.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/logo.png") no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/search.png") no-repeat;
      background-size: 100%;
    }
  }

  .my-swiper img {
    width: 100%;
  }
}
</style>
