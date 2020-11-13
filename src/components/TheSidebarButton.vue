<template>
  <a @click="toggleSidebar" :class="{ 'is-active': !sidebarActive }">
    <Icon class="icon" :size="28" icon="person"></Icon>
  </a>
</template>

<script>
import Icon from "./Icon.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("sidebar", {
      sidebarActive: "sidebarStatus",
    }),
  },
  methods: {
    ...mapActions("sidebar", {
      toggleSidebar: "toggleSidebar",
    }),
  },
};
</script>

<style lang="scss">
.sidebar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 48px;
  padding-left: 10px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  background-color: rgba($color: #27dfee, $alpha: 0.6);
  box-shadow: 0 0 10px 0 rgba(39, 223, 238, 0.3);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, .5);
  }
  .icon {
    transition: 0.8s ease;
  }
  &.is-active {
    .icon {
      transform: rotateY(180deg);
    }
  }
}
.icon {
  fill: rgba($color: #000, $alpha: 1);
}
</style>
