<template>
  <div class="notify " :class="show ">
    德瓦达达娃大碗大碗大碗浪费了
  </div>
</template>

<script>
export default {
  name: 'notify',

  data () {
    return {
      show: 'start',
      unshow: 'end'
    }
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.msg)
  }
}
</script>

<style lang="scss" scoped>
.notify {
  position: fixed;
  top: -100%;
  left: 0px;
  z-index: 1000;
  width: 100%;
  background: blue;
  text-align: center;
  font-size: 20px;
  color: white;
  padding: 10px 0;
  display: none;
}
.warning {
  background: yellow;
  color: black;
}
.error {
  background: red;
  color: black;
}

.start {
  display: block;
  animation-name: notifyStart;
  animation-duration: .5s;
}

.end {
  animation-name: notifyEnd;
  animation-duration: .5s;
}

@keyframes notifyStart {
  0% {
    top: -100%
  }

  100% {
    top: 0px;
  }
}

@keyframes notifyEnd {
  from {
    top: 0px;
  }

  to {
    top: -100px;
  }
}

</style>
