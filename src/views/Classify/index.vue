<template>
  <div>
    <!-- 头部 -->
    <NormalHeader></NormalHeader>

    <HeaderType></HeaderType>

    <CartoonList></CartoonList>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>

</style>
