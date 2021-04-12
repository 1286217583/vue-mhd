<template>
  <div>
    <router-link to="/city" class="city">当前的城市是：{{ curCityName }}</router-link>
    <header class="index-header">
      <router-link to="/my">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </router-link>
      <div class="header-logo"></div>
      <router-link to="/search">
        <div class="header-search"></div>
      </router-link>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'indexHeader',
  computed: {
    ...mapGetters('city', ['curCityName'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
  .city {
    display: block;
    height: 20px;
    font-size: 20px;
    line-height: 20px;
  }
.index-header {
  @include border-bottom;
  display: flex;
  height: 44px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/user-btn.png") no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url("~@/assets/logo.png") no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/search.png") no-repeat;
    background-size: 100%;
  }
}
</style>
