<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutLeft"
  >
    <div class="page-classify">
      <!-- 头部 -->
      <NormalHeader title="分类"></NormalHeader>

      <HeaderType
        :types="types"
        @click="onTypeChange"
      ></HeaderType>

      <CartoonList :list="list"></CartoonList>
    </div>
  </transition>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

import { getTyps, getTypeList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },

  data () {
    return {
      types: [],

      list: []
    }
  },

  methods: {
    getTyps () {
      return getTyps().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      })
    },

    getTypeList (suBject) {
      getTypeList(suBject).then(res => {
        if (res.code === 200) {
          const info = JSON.parse(unformat(res.info))
          this.list = info.coMicsList
        } else {
          console.log(res.code_msg)
        }
      })
    },

    // 点击切换时触发
    onTypeChange (payload) {
      const suBject = payload.type.targetargument
      this.getTypeList(suBject)
    }
  },

  async created () {
    await this.getTyps()
    this.getTypeList(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
</style>
