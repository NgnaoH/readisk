<template>
  <div class="sidebar" :class="{ 'is-active': sidebarActive }">
    <aside class="menu">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link :to="{ name: 'Home' }" exact-active-class="is-active">
            <Icon :size="28" icon="home"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            :to="{ name: 'DiskManager' }"
            exact-active-class="is-active"
          >
            <Icon :size="28" icon="server"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'About' }" exact-active-class="is-active">
            <Icon :size="28" icon="info"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'About' }" exact-active-class="is-active">
            <Icon :size="28" icon="sun"></Icon>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
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
  // methods: {
  //   ...mapActions("sidebar", {
  //     sidebarOff: "sidebarOff",
  //   }),
  // },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  width: calc(100% + 50px);
  left: -100%;
  bottom: 0;
  height: 48px;
  z-index: 900;
  background-color: rgba($color: #27dfee, $alpha: 0.4);
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  opacity: 0;
  transition: left 0.4s linear, opacity 0.8s linear;
  &.is-active {
    left: 0;
    opacity: 1;
  }
}
.menu {
  width: 100%;
  .menu-list {
    padding: 0 54px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    .menu-item {
      width: 20%;
      border-radius: 999px;
      cursor: pointer;
      transition: 0.4s linear;
      &:hover {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: rgba($color: #27dfee, $alpha: 0.6);
        transition: 0.2s linear;
      }
      a {
        width: 100%;
        text-align: center;
        background-color: rgba($color: #000000, $alpha: 0);
      }
      &:active {
        background-color: rgba($color: #27dfee, $alpha: 0.4);
        box-shadow: 0 0px 10px 0 rgba(39, 223, 238, 0.5);
      }
    }
  }
}
.icon {
  fill: rgba($color: #000, $alpha: 1);
}
</style>
