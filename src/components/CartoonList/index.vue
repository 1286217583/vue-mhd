<template>
  <div class="box">
    <div class="item">
      <img src="../../assets/multipurpose.jpg" alt="">
      <div class="txt">
        <p class="book">达瓦达瓦达瓦达瓦大dd</p>
        <p class="author">作者：dwdawdwadwa达瓦达瓦达瓦</p>
        <p class="fans">人气：达瓦达瓦达瓦达瓦达瓦大屋顶dwadawdwadwadwad</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartoonList'
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
