<template>
  <div class="info-item">
    <Icon :size="28" icon="inbox"/>
    <div class="disk-label">{{ label }}</div>
    <div class="disk-name">{{ name }}</div>
    <div class="capacity">{{ capacity }}</div>
  </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
  props: {
    name: {
      type: String,
    },
    capacity: {
      type: String,
    },
    label: {
      type: String,
    }
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.info-item {
  height: 100%;
  margin: 0.5rem;
  background-color: white;
  display: flex;
}
</style>