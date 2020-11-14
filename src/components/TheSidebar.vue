<template>
  <div class="sidebar" :class="{ 'is-active': sidebarActive }">
    <aside class="menu">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link class="item"
            :to="{ name: 'Home' }"
          >
            <Icon :size="28" icon="home"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link class="item"
            :to="{ name: 'About' }"
          >
            <Icon :size="28" icon="info"></Icon>
          </router-link>
        </li>
        <li class="menu-item">
          <div class="item"
            :to="{ name: '' }"
          >
            <Icon :size="28" icon="sun"></Icon>
          </div>
          <!-- <router-link
            @click.native="sidebarOff"
            :to="{ name: '' }"
            exact-active-class="is-active"
          >
            <Icon :size="28" icon="sun"></Icon>
          </router-link> -->
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
      overflow: hidden;
      &:hover {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: rgba($color: #27dfee, $alpha: 0.6);
        transition: 0.2s linear;
      }
      .item {
        width: 100%;
        text-align: center;
        padding: 0.5em 0.75em;
        background-color: rgba($color: #000000, $alpha: 0);
      }
      &:active {
        background-color: rgba($color: #27dfee, $alpha: 0.4);
        box-shadow: 0 0px 10px 0 rgba(39, 223, 238, 0.5);
      }
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 120%;
        height: 120%;
        background: rgba(#eeecec, 0.4);
        transform: rotate(45deg);
        left: -110%;
        top: 90%;
      }
      &:hover::before {
        animation: a 1s 1;
        top: -10%;
        left: 80%;
      }
      @keyframes a {
        0% {
          top: -110%;
          left: 90%;
        }
        50% {
          top: 10%;
          left: -200%;
        }
        100% {
          top: -10%;
          left: 90%;
        }
      }
    }
  }
}
.icon {
  fill: rgba($color: #000, $alpha: 1);
}
</style>
