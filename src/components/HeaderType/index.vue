<template>
  <nav class="nav">
      <div class="active">热血</div>
      <div>恋爱</div>
      <div>搞笑</div>
      <div>魔幻</div>
      <div>悬疑</div>
      <div>少儿</div>
    </nav>
</template>

<script>
export default {
  name: 'HeaderType'
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/mixins.scss';
.nav {
  // @include border-bottom;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  div {
    width: 74px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  .active {
    color: red;
  }
}
</style>
