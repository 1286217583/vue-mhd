<template>
  <div class="box">
    <div class="item" v-for="item in searchResultList" :key="item.bookstore_id">
      <img :src="item.coverurl" alt="">
      <div class="txt">
        <p class="book">{{ item.name }}</p>
        <p class="author">作者：{{ item.author }}</p>
        <p class="fans">更新：{{ item.lastpartname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResultList',

  props: {
    searchResultList: {
      tyle: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.box {
  width: 100%;
  .item {
    @include border-top;
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    img {
      width: 80px;
      height: 105px;
    }
    .txt {
      max-width: 60%;
      margin-left:10px ;
      .book{
        color: #333;
        font-size: 18px;
      }
      p {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 30px;
      }
    }
  }
}
</style>
