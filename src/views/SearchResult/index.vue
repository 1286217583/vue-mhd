<template>
  <div>
    <!-- 头部 -->
    <NormalHeader :title="title" :showSearch="false"></NormalHeader>

    <CartoonList :searchResultList="searchResultList"></CartoonList>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from './searchResultList'

import { searchResult } from '@/api/cartoon'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    CartoonList
  },

  data () {
    return {
      searchResultList: [],

      title: this.$route.query.key
    }
  },

  methods: {
    searchResult (key) {
      searchResult(key).then(res => {
        if (res.code === 200) {
          this.searchResultList = res.info
        } else {
          console.log(res.code_msg)
        }
      })
    }
  },

  created () {
    this.searchResult(this.title)
  }
}
</script>

<style lang="scss" scoped>

</style>
