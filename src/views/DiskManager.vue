<template>
  <div class="about">
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-11"></div>
  </div>
    <div class="columns">
      <div class="column is-6">
        <DiskParameter/>
      </div>
      <div class="column is-6">
      </div>
    </div>
  </div>
</template>

<script>
import DiskParameter from '../components/DiskParameter.vue';
export default {
  components: {
    DiskParameter,
  }
};
</script>

<style lang="scss">
.a {
  background-color: black;
}
</style>