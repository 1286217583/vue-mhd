<template>
  <div>
    <!-- 头部 -->
    <NormalHeader title="Vip专区" :showSearch="false"></NormalHeader>

    <CartoonList :list="VIPList"></CartoonList>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'

import { getVipList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    CartoonList
  },

  data () {
    return {
      VIPList: []
    }
  },

  methods: {
    getVipList () {
      getVipList().then(res => {
        if (res.code === 200) {
          const info = JSON.parse(unformat(res.info))
          this.VIPList = info.coMicsList
        } else {
          console.log(res.code_msg)
        }
      })
    }
  },

  created () {
    this.getVipList()
  }
}
</script>

<style lang="scss" scoped>

</style>
