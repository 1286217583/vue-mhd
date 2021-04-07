<template>
  <nav class="index-nav">
    <router-link to="/classify">
      <div class="nav-item">
        <i class="iconfont icon-caidan-mianxing"></i>
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to="/ranking">
      <div class="nav-item">
        <i class="iconfont icon-zhanghuzhuxiao-xianxing"></i>
        <p class="nav-text font-24">排行</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div class="nav-item">
        <i class="iconfont icon-diannao-xianxing"></i>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </router-link>
    <router-link to="/hello">
      <div class="nav-item">
        <i class="iconfont icon-fasong-mianxing"></i>
        <p class="nav-text font-24">历史</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'indexNav'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.index-nav {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  .iconfont {
    font-size: 46px;
    color: #000;
  }
  .nav-text {
    color: #8d8d8d;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
