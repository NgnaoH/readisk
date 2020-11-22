<template>
  <div class="sidebar" :class="{ 'is-active': sidebarActive }">
    <aside class="menu">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link class="item" :to="{ name: 'Home' }">
            <Icon :size="28" icon="home"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link class="item" :to="{ name: 'About' }">
            <Icon :size="28" icon="info"></Icon>
          </router-link>
        </li>
        <li class="menu-item" @click="toggleTheme(theme)">
          <div class="item">
            <Icon :size="28" :icon="toggleIcon ? 'sun' : 'star'"></Icon>
          </div>
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
    ...mapState("changeTheme", {
      theme: "theme",
      toggleIcon: "toggleIcon",
    }),
  },
  methods: {
    ...mapActions("changeTheme", {
      toggleTheme: "toggleTheme",
    }),
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  width: calc(100% + 14px);
  left: -100%;
  bottom: 0;
  height: 48px;
  z-index: 900;
  background-color: var(--background-color);
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  transition: left 0.4s linear, opacity 0.8s linear;
  &.is-active {
    left: 0;
  }
  box-shadow: inset 0px 2px 4px var(--boxshadow-dark),
    inset -10px -10px 10px var(--boxshadow-light);
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
      overflow: hidden;
      &:hover {
        box-shadow: inset 2px 5px 7px var(--boxshadow-dark),
          inset -5px -5px 7px var(--boxshadow-light);
        transition: 0.2s linear;
        .icon {
          transition: all 0.4s;
          fill: var(--text-active-color);
        }
      }
      .item {
        width: 100%;
        text-align: center;
        padding: 0.5em 0.75em;
        background-color: rgba(#000000, 0);
      }
      // position: relative;
      // &::before {
      //   content: "";
      //   position: absolute;
      //   width: 120%;
      //   height: 120%;
      //   background: rgba(#eeecec, 0.4);
      //   transform: rotate(45deg);
      //   left: -110%;
      //   top: 90%;
      // }
      // &:hover::before {
      //   animation: a 1s 1;
      //   top: -10%;
      //   left: 80%;
      // }
      // @keyframes a {
      //   0% {
      //     top: -110%;
      //     left: 90%;
      //   }
      //   50% {
      //     top: 10%;
      //     left: -200%;
      //   }
      //   100% {
      //     top: -10%;
      //     left: 90%;
      //   }
      // }
    }
  }
}
.icon {
  fill: var(--text-normal-color);
  transition: all 0.4s;
}
</style>
