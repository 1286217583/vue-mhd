<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <IndexHeader></IndexHeader>
    <!-- 首页头部 end -->

    <div class="index-main">
      <!-- 轮播图 begin -->
      <Swiper
        class="my-swiper"
        :autoplay="3000"
        @change="onChange"
        v-if="bannerData.length > 0"
      >
        <Swiper-item v-for="item in bannerData" :key="item.id">
          <img :src="item.imageurl" :alt="item.title" />
        </Swiper-item>
      </Swiper>
      <!-- 轮播图 end -->

      <!-- 首页导航 begin -->
      <IndexNav></IndexNav>
      <!-- 首页导航 end -->

      <!-- recommend begin -->
      <div
        :class="`recommend-type${item.comicsviewtype}`"
        v-for="item in recommend"
        v-show="item.comicsviewtype !== 3"
        :key="item.bigbook_id"
      >
        <div class="top-background"></div>

        <div class="show">
          <div class="show-top">
            <span>
              <img :src="item.icon" alt="" />
              <p>{{ item.name }}</p>
              <a href="" class="more">更多 ></a>
            </span>
          </div>

          <div class="show-bottom">
            <div
              class="box"
              v-for="childItem in item.comicslist"
              :key="childItem.bigbook_id"
            >
              <img :src="jsonParse(childItem.extension).xsyzfx" alt="" />
              <p class="title">{{ childItem.bigbook_name }}</p>
              <p class="brief">
                {{ childItem.key_name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="`recommend-type${a.comicsviewtype}`"
      >
        <div class="top-background"></div>

        <div class="show">
          <div class="show-top">
            <span>
              <img :src="a.icon" alt="" />
              <p>{{ a.name }}</p>
              <a href="" class="more">更多 ></a>
            </span>
          </div>

          <div class="show-bottom">
            <div
              class="box"
              v-for="(childItem, index) in a.comicslist"
              :key="childItem.bigbook_id"
            >
              <img :src="childItem.bigcoverurl" alt="" class="hot-img" />
              <div class="hot-right">
                <div class="icon" :class="`item-ranking-${index + 1}`"></div>
                <div class="txt">
                  <p class="title">{{ childItem.bigbook_name }}</p>
                  <p class="ren">人气：{{ childItem.bigbookview }}</p>
                  <p class="jianjie">{{ childItem.brief }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- recommend end -->
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../components/Swiper'
import IndexNav from './components/indexNav'
import IndexHeader from './components/indexHeader'
import { getBanner, getIndexRecommend } from '../../api/cartoon'

export default {
  name: 'Home',

  data () {
    return {
      // banner 轮播图数据
      bannerData: [],
      // recommend 首页推荐数据
      recommend: [],

      a: []
    }
  },

  components: {
    Swiper,
    SwiperItem,
    IndexNav,
    IndexHeader
  },

  methods: {
    onChange (index) {
      console.log(index)
    },

    jsonParse (value) {
      return JSON.parse(value)
    },

    // 轮播图请求
    getBanner () {
      getBanner()
        .then((res) => {
          if (res.code === 200) {
            this.bannerData = res.info
          } else {
            console.log(res.code_msg)
          }
        })
    },

    // 首页推荐数据请求
    getIndexRecommend () {
      getIndexRecommend()
        .then((res) => {
          if (res.code === 200) {
            this.recommend = res.info
            this.a = res.info[8]
          } else {
            console.log(res.code_msg)
          }
        })
    }
  },

  created () {
    // 轮播图请求
    this.getBanner()

    // 首页推荐数据请求
    this.getIndexRecommend()
  }
}
</script>

<style lang="scss" scoped>
// 引入公用的 mixins.scss;
@import "@/assets/styles/mixins.scss";

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .my-swiper img {
    width: 100%;
  }

  .index-main {
    flex: 1;
    overflow-y: auto;

    .recommend-type1 {
      .top-background {
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
      }
      .show-top span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        position: relative;
        img {
          width: 22px;
          height: 22px;
        }
        p {
          font-size: 16px;
          margin-left: 5px;
        }
        .more {
          font-size: 14px;
          color: #b0b0b0;
          position: absolute;
          right: 20px;
        }
      }
      .show-bottom {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .box {
          width: 172px;
          height: 218px;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            height: 172px;
          }
          .title {
            font-size: 14px;
            color: #3a3a3a;
            line-height: 26px;
          }
          .brief {
            font-size: 12px;
            color: #8d8d8d;
          }
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .recommend-type5 {
      .top-background {
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
      }
      .show-top span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        position: relative;
        img {
          width: 22px;
          height: 22px;
        }
        p {
          font-size: 16px;
          margin-left: 5px;
        }
        .more {
          font-size: 14px;
          color: #b0b0b0;
          position: absolute;
          right: 20px;
        }
      }
      .show-bottom {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .box {
          width: 110px;
          height: 210px;
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            height: 148px;
          }
          .title {
            font-size: 14px;
            color: #3a3a3a;
            line-height: 26px;
          }
          .brief {
            font-size: 12px;
            color: #8d8d8d;
          }
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .recommend-type3 {
      .top-background {
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
      }
      .show-top span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        position: relative;
        img {
          width: 22px;
          height: 22px;
        }
        p {
          font-size: 16px;
          margin-left: 5px;
        }
        .more {
          font-size: 14px;
          color: #b0b0b0;
          position: absolute;
          right: 20px;
        }
      }
      .box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;
        .hot-img {
          width: 153px;
          height: 90px;
        }
        .hot-right {
          position: relative;
          .icon {
            position: absolute;
            left: 0px;
            top: -8px;
            width: 25px;
            height: 25px;
          }
          .item-ranking-1 {
            background: url("../../assets/icon/item-ranking-1.png") no-repeat;
            background-size: 100%;
          }
          .item-ranking-2 {
            background: url("../../assets/icon/item-ranking-2.png") no-repeat;
            background-size: 100%;
          }
          .item-ranking-3 {
            background: url("../../assets/icon/item-ranking-3.png") no-repeat;
            background-size: 100%;
          }
          .item-ranking-4 {
            background: url("../../assets/icon/item-ranking-4.png") no-repeat;
            background-size: 100%;
          }
          .item-ranking-5 {
            background: url("../../assets/icon/item-ranking-5.png") no-repeat;
            background-size: 100%;
          }

          .txt {
            width: 158px;
            height: 72px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              color: #3a3a3a;
              font-size: 16px;
              font-weight: 500;
            }
            .ren {
              color: #b0b0b0;
            }
            .jianjie {
              color: #b0b0b0;
            }

            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-left: 25px;
              font-size: 14px;
              float: left;
            }
          }
        }
      }
    }
  }
}
</style>
