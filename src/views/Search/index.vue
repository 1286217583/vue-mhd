<template>
  <div class="page-search">
    <div class="search-top">
      <img
        src="../../assets/icon/search_back.png"
        alt=""
        class="back"
        @click="back"
      />

      <div class="inpBox">
        <img src="../../assets/icon/search_fdj.png" alt="" class="fdj" />
        <input
          type="search"
          placeholder="漫画名 | 作者 ^_^"
          v-model="searchVal"
        />
      </div>

      <a class="searchBtn" @click="handleClick(searchVal, true)">搜索</a>
    </div>

    <div class="search-bottom" v-if="!searchVal">
      <div class="search-hot">
        <div class="hot-top">
          <p class="txt">大家都在搜</p>
          <div class="refresh" @click="getHotSearch">
            <span></span>
            <p>刷新</p>
          </div>
        </div>

        <div class="hot-list">
          <p
            class="showTxt"
            v-for="item in hotWordsList"
            :key="item.id"
            @click="handleClick(item.keyword)"
          >
            {{ item.keyword }}
          </p>
        </div>
      </div>

      <div class="search-history" v-if="historySearchList.length > 0">
        <div class="history-top">
          <p class="txt">最近搜索</p>
          <img
            src="../../assets/icon/search_delete.png"
            alt=""
            @click="deleteHistory"
          />
        </div>

        <div class="history-list">
          <div
            v-for="item in historySearchList"
            :key="item"
            @click="handleClick(item)"
          >
            <span></span>
            <p class="showTxt">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="search-result-list" v-if="searchVal">
      <p
        class="showTxt"
        v-for="item in searchIndexList"
        :key="item"
        @click="handleClick(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
import { getHotSearch, searchIndex } from '@/api/cartoon'

export default {
  name: 'Search',

  data () {
    return {
      searchVal: '',

      // 热门搜索列表
      hotWordsList: [],

      // 历史搜索记录列表
      historySearchList: [],

      // 搜索结果列表数据
      searchIndexList: []
    }
  },

  watch: {
    searchVal (newVal, oldVal) {
      if (newVal) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => [this.searchIndex(this.searchVal)], 500)
      } else {
        this.searchIndexList = []
      }
    }
  },

  methods: {
    getHotSearch () {
      getHotSearch()
        .then((res) => {
          if (res.code === 200) {
            this.hotWordsList = res.info.hotWordsList
          } else {
            console.log(res.code_msg)
          }
        })
    },

    // 存储 历史搜索记录
    saveSearch (item) {
      let tmp = window.localStorage.getItem('search')

      if (tmp) {
        tmp = JSON.parse(tmp)
      } else {
        tmp = []
      }

      const index = tmp.findIndex((items) => items === item)

      if (index > -1) {
        tmp.splice(index, 1)
      }

      tmp.unshift(item)
      this.historySearchList = tmp
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },

    // 取出 历史搜索记录
    getSearch () {
      const tmp = window.localStorage.getItem('search')

      if (tmp) {
        this.historySearchList = JSON.parse(tmp)
      } else {
        this.historySearchList = []
      }
    },

    // 关键字点击的 保存 和 跳转 到详情页面
    handleClick (item, res = false) {
      if (res === false) {
        this.saveSearch(item)
        this.$router.push(`/search-result?key=${item}`)
        return
      }

      if (this.searchVal) {
        this.saveSearch(item)
        this.$router.push(`/search-result?key=${item}`)
      }
    },

    // 删除最近搜索记录
    deleteHistory () {
      window.localStorage.removeItem('search')
      this.getSearch()
    },

    // 搜索关键字聊表
    searchIndex (keyword) {
      searchIndex(keyword)
        .then((res) => {
          if (res.code === 200) {
            this.searchIndexList = res.info
          } else {
            console.log(res.code_msg)
          }
        })
    },

    back () {
      this.$router.back()
    }
  },

  created () {
    this.getHotSearch()
    this.getSearch()
  }
}
</script>

<style lang="scss" scoped>
.showTxt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-top {
  width: 100%;
  height: 45px;
  float: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e7370c;
  .back {
    width: 23px;
    height: 14px;
  }
  .inpBox {
    width: 262px;
    height: 30px;
    background: #fff;
    padding-right: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 8px;
    .fdj {
      width: 14px;
      height: 14px;
      margin-right: 4px;
      margin-left: 10px;
      float: left;
    }
    input {
      flex: 1;
      height: 30px;
      box-sizing: border-box;
      border: 0;
      outline: none;
      float: left;
    }
  }
  .searchBtn {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
  }
}
.search-bottom {
  width: 100%;
  height: auto;
  float: left;
  .search-hot {
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    .hot-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .txt {
        color: #8b8b8b;
        font-size: 12px;
      }
      .refresh {
        width: 42px;
        height: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          background: url("~@/assets/icon/search_refresh.png") no-repeat;
          background-size: 100%;
          width: 13px;
          height: 12px;
        }
        p {
          max-width: 70%;
          color: #8b8b8b;
          font-size: 12px;
        }
      }
    }
    .hot-list {
      width: 100%;
      height: auto;
      margin-top: 15px;
      overflow: hidden;
      p {
        max-width: 100%;
        height: 24px;
        float: left;
        border: 1px solid #ddd;
        border-radius: 10px;
        line-height: 24px;
        font-size: 14px;
        padding: 0 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
    }
  }
  .search-history {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    .history-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      .txt {
        font-size: 14px;
        color: #8b8b8b;
      }
      img {
        width: 14px;
        height: 14px;
      }
    }
    .history-list {
      width: 100%;
      overflow-y: auto;
      height: calc(100vh - 270px);
      div {
        max-width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
        span {
          display: block;
          width: 13px;
          height: 13px;
          background: url("~@/assets/icon/search_history_icon.png") no-repeat;
          background-size: 100%;
          margin-right: 6px;
        }
        p {
          font-size: 16px;
          line-height: 40px;
          flex: 1;
        }
      }
    }
  }
}
.search-result-list {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  float: left;
  p {
    max-width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    font-weight: 1000;
    padding-left: 10px;
  }
}
</style>
