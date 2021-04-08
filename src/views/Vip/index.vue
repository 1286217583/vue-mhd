<template>
  <div>
    <!-- 头部 -->
    <NormalHeader title="Vip专区"></NormalHeader>

    <CartoonList></CartoonList>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>

</style>
