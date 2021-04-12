<template>
  <div class="page-city">
    <NormalHeader :title="`当前城市是-${curCityName}`" :showSearch="false"></NormalHeader>

    <div class="cityList" ref="scrollLeft">
      <div>
        <section
          class="box"
          v-for="item in cityList"
          :key="item.py"
          :ref="`section-${item.py}`"
        >
          <div class="top">
            {{ item.py }}
          </div>

          <div class="bottom" v-for="city in item.list" :key="city.cityId">
            <p @click="handleClick(city)">{{ city.name }}</p>
          </div>
        </section>
      </div>
    </div>

    <section class="letter">
        <div>
          <p v-for="item in indexs" :key="item" @click="handleIndex(item)">{{ item }}</p>
        </div>
    </section>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import getCityList from '@/api/city'
import { mapMutations, mapGetters } from 'vuex'

// import BScroll from '@better-scroll/core'
// import MouseWheel from '@better-scroll/mouse-wheel'

// BScroll.use(MouseWheel)

export default {
  name: 'city',

  components: {
    NormalHeader
  },

  data () {
    return {
      cities: []
    }
  },

  computed: {
    cityList () {
      const result = []
      // 数据重写
      this.cities.forEach(item => {
        // 数据中 item.pinyin 中的字符串第一位 并转 大写
        const py = item.pinyin.substr(0, 1).toUpperCase()

        // 判断 result 中是否已经存在了 py
        const index = result.findIndex(item => item.py === py)
        if (index > -1) {
          // 存在
          result[index].list.push(item)
        } else {
          // 不存在
          result.push({
            py,
            list: [item]
          })
        }
      })

      result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })

      return result
    },

    ...mapGetters('city', ['curCityName']),

    indexs () {
      return this.cityList.map(item => item.py)
    }
  },

  methods: {
    ...mapMutations('city', ['SET_CURCITY']),

    getCityList () {
      getCityList().then(res => {
        const data = res.data
        if (data.status === 0) {
          this.cities = data.data.cities
        } else {
          alert(data.msg)
        }
      }).catch(err => {
        console(err)
        alert('网络异常，请稍后重试')
      })
    },

    handleIndex (py) {
      // 计时器清除
      clearInterval(this.scrollInterval)

      // 当前滚动条的 DOM 元素
      const srcDom = this.$refs.scrollLeft

      // 获取 真实 DOM
      const targetEl = this.$refs[`section-${py}`][0]

      // 距离顶部的 scroll 的值 (滚动条要去的目标高度)
      const offsetTop = targetEl.offsetTop

      // 当前高度
      const srcT = srcDom.offsetTop

      if (srcT <= offsetTop) {
        this.srcollBotttomMove(srcDom, offsetTop)
      } else {
        this.srcolltopMove(srcDom, offsetTop)
      }
    },

    srcollBotttomMove (node, target) {
      this.scrollInterval = setInterval(() => {
        // 滚动条高度
        const srcTop = node.scrollTop

        // 临界值判断
        if (srcTop >= target) {
          clearInterval(this.scrollInterval)
          node.scrollTop = target
        } else {
          node.scrollTop += 200
        }
      }, 1)
    },

    srcolltopMove (node, target) {
      this.scrollInterval = setInterval(() => {
        // 滚动条高度
        const srcTop = node.scrollTop

        // 临界值判断
        if (srcTop <= target) {
          clearInterval(this.scrollInterval)
          node.scrollTop = target
        } else {
          node.scrollTop -= 200
        }
      }, 1)
    },

    handleClick (city) {
      this.SET_CURCITY(city)
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },

  created () {
    this.getCityList()
  },

  mounted () {
    /* eslint-disable */
    // new BScroll(this.$refs.scrollLeft, {
    //   mouseWheel: true
    // })
    /* eslint=enable */
  }
}
</script>

<style lang="scss" scoped>
.page-city {
  display: flex;
  flex-direction: column;
  .cityList {
    height: calc(100vh - 65px);
    // overflow: hidden;
    overflow-y: auto;
    position: relative;
    .box {
      width: 100%;
      .top {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        padding: 0 0 0 15px;
        background-color: #f4f4f4;
        color: #797d82;
      }
      .bottom {
        padding: 0 0 0 20px;
        p {
          font-size: 14px;
          height: 48px;
          line-height: 48px;
          position: relative;
        }
        p::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 1px;
            background: #ededed;
            transform: scaleY(0.5);
        }
      }
    }
  }
  .letter {
    height: 100%;
    position: fixed;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 100px 0px;
    box-sizing: border-box;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
      font-size: 14px;
      padding: 0 6px;
    }
    }
  }
}
</style>
