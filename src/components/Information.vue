<template>
  <div class="info">
    <div class="sub">{{sub}}</div>
    <div v-if="main" class="time">{{main}}</div>
    <div v-else class="plh">loading...</div>
  </div>
</template>

<script>
export default {
  props: {
    sub: {
      type: String
    },
    main: {
      type: String,
    },
  },
};
</script>

<style lang="scss" >
.info {
  .sub, .plh {
    color: rgba($color: #000, $alpha: 0.6);
    font-size: 12px;
  }
  .time {
    transition: 0.5s;
    font-size: 18px;
  }
}
</style>