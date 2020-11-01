<template>
  <div class="parameter">
    <div class="title">{{ title }}</div>
    <div class="sub-wrapper">
      <div v-if="sub" class="sub">{{ sub }}</div>
      <div v-else class="load">loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    sub: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@mixin font {
  color: rgba($color: #000, $alpha: 0.6);
  font-size: 14px;
}
.parameter {
  margin: 0.5rem;
  border-left: 0.25rem solid rgba($color: #fff, $alpha: 0.6);
  width: 100%;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    @include font;
  }
  .sub-wrapper {
    .load {
      @include font;
    }
    .sub {
      transition: 0.5s;
      font-size: 20px;
    }
  }
}
</style>    