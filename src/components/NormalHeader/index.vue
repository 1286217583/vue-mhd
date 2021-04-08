<template>
  <div class="page-classify">
    <header class="head">
      <i class="backBtn" @click="goBack"></i>
      <p >{{ title }}</p>
      <router-link class="serchBtn" to="/search"></router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NormalHeader',

  props: {
    title: {
      type: String,
      default: '漫画岛'
    }
  },

  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .backBtn {
    width: 23px;
    height: 13px;
    background: url('~@/assets/icon/back-icon.png') no-repeat;
    background-size: 100%;
    margin-left: 14px;
  }
  p {
    font-size: 16px;
    color: #333;
  }
  .serchBtn {
    width: 20px;
    height: 20px;
    background: url('~@/assets/icon/serch-icon.png') no-repeat;
    background-size: 100%;
    margin-right: 14px;
  }
}
</style>
