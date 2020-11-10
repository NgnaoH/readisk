<template>
  <div class="sidebar" :class="{ 'is-active': sidebarActive }">
    <aside class="menu">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link
            @click="sidebarOff"
            :to="{ name: 'Home' }"
            exact-active-class="is-active"
          >
            <Icon :size="28" icon="home"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            @click="sidebarOff"
            :to="{ name: 'DiskManager' }"
            exact-active-class="is-active"
          >
            <Icon :size="28" icon="server"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            @click="sidebarOff"
            :to="{ name: 'About' }"
            exact-active-class="is-active"
          >
            <Icon :size="28" icon="info"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            @click="sidebarOff"
            :to="{ name: 'About' }"
            exact-active-class="is-active"
          >
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
  methods: {
    ...mapActions("sidebar", {
      sidebarOff: "sidebarOff",
    }),
  },
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
  background-color: rgba($color: #77a9da, $alpha: .6);
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  opacity: 0;
  transition: left 0.4s linear, opacity .8s linear;
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
      transition: .4s linear;
      &:hover {
        background-color: rgba($color: #77a9da, $alpha: 1);
        transition: .4s linear;
        transform: translate(8px);
      }
      a {
        width: 100%;
        text-align: center;
        background-color: rgba($color: #000000, $alpha: 0);
      }
    }
  }
}
.icon {
  fill: rgba($color: #0F0F0F, $alpha: .8);
}
</style>
