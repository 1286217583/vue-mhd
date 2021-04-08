<template>
  <div class="page-ranking">
    <NormalHeader title="排行榜"></NormalHeader>

    <HeaderType
      :types="['热搜榜', '人气榜', '畅销榜', '新书榜', '完结榜', '免费榜']"
    ></HeaderType>

    <div class="box">
    <div class="item">
      <img src="../../assets/multipurpose.jpg" alt="">
      <div class="txt">
        <p class="book">达瓦达瓦达瓦达瓦大dd</p>
        <p class="author">作者：dwdawdwadwa达瓦达瓦达瓦</p>
        <p class="fans">人气：达瓦达瓦达瓦达瓦达瓦大屋顶dwadawdwadwadwad</p>
        <i></i>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'

export default {
  name: 'Ranking',

  components: {
    NormalHeader,
    HeaderType
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
      position: relative;
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
      i {
        position: absolute;
        right: -45px;
        top: 28px;
        background: url('../../assets/icon/Ranking-icon1.png') no-repeat;
        width: 50px;
        height: 28px;
        background-size: 100%;
      }
    }
  }
}
</style>
