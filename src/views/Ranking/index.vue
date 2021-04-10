<template>
  <div class="page-ranking">
    <NormalHeader title="排行榜"></NormalHeader>

    <HeaderType
      :types="types"
      @click="onTypeChange"
    ></HeaderType>

    <div class="box">
      <div class="item" v-for="(item, index) in list" :key="item.bigbookid">
        <img :src="item.coverurl" alt="">
        <div class="txt">
          <p class="book">{{ item.name }}</p>
          <p class="author">作者：{{ item.author }}</p>
          <p class="fans">人气：{{ item.weekhits }}</p>
          <i :class="index | filterIcon">{{ index+1 > 3 ? index+1 : ''  }}</i>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'

import { getRankList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader'

export default {
  name: 'Ranking',

  filters: {
    filterIcon (value) {
      if (value === 0) return 'icon1'
      if (value === 1) return 'icon2'
      if (value === 2) return 'icon3'
      if (value > 2) return 'icon'
    }
  },

  components: {
    NormalHeader,
    HeaderType
  },

  data () {
    return {
      types: [
        { id: 1, description: '热搜榜', raNktype: 6 },
        { id: 2, description: '人气榜', raNktype: 1 },
        { id: 3, description: '畅销榜', raNktype: 4 },
        { id: 4, description: '新书榜', raNktype: 2 },
        { id: 5, description: '完结版', raNktype: 5 },
        { id: 6, description: '免费榜', raNktype: 3 }
      ],

      list: []
    }
  },

  methods: {
    getRankList (raNktype) {
      getRankList(raNktype).then(res => {
        if (res.code === 200) {
          const info = JSON.parse(unformat(res.info))
          this.list = info.raNklist
        } else {
          console.log(res.code_msg)
        }
      })
    },

    onTypeChange (payload) {
      const raNktype = payload.type.raNktype
      this.getRankList(raNktype)
    }
  },

  created () {
    this.getRankList(this.types[0].raNktype)
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
    position: relative;
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
      i {
        position: absolute;
        right: 30px;
        top: 40px;
        width: 50px;
        height: 28px;
        text-align: center;
        font-size: 12px;
      }
      .icon1 {
        background: url('../../assets/icon/Ranking-icon1.png') no-repeat;
        background-size: 100%;
      }
      .icon2 {
        background: url('../../assets/icon/Ranking-icon2.png') no-repeat;
        background-size: 100%;
      }
      .icon3 {
        background: url('../../assets/icon/Ranking-icon3.png') no-repeat;
        background-size: 100%;
      }
      .icon {
        right: 40px;
        width: 25px;
        line-height: 28px;
        color: #80808f;
        background: url('../../assets/icon/Ranking-icon.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>
