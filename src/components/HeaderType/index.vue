<template>
  <nav class="nav">
    <div
      :class="{ active: index === activeIndex }"
      v-for="(item, index) in types"
      :key="item.id"
      @click="handleClick(item,index)"
    >
      {{ item.description }}
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderType',

  data () {
    return {
      activeIndex: 0
    }
  },

  props: {
    types: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  methods: {
    handleClick (type, index) {
      this.activeIndex = index

      // 通知父组件
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/mixins.scss';
.nav {
  // @include border-bottom;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  div {
    width: 74px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  .active {
    color: red;
  }
}
</style>
