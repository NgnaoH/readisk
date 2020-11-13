<template>
  <div id="app">
    <TheNavigationBar class="nav-bar" />
    <TheSidebarButton class="sidebar-button" />
    <TheSidebar class="sidebar" />
    <div class="main" @click="sidebarOff">
      <router-view />
    </div>
  </div>
</template>

<script>
import "@/assets/scss/main.scss";
import TheSidebar from "@/components/TheSidebar.vue";
import TheSidebarButton from "@/components/TheSidebarButton.vue";
import TheNavigationBar from "@/components/TheNavigationBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    TheSidebar,
    TheNavigationBar,
    TheSidebarButton,
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

<style lang="scss">
body {
  background-color: var(--background-color);
  height: 100vh;
}
.main {
  padding-top: 32px;
  margin: 0;
  height: 100vh;
}
.sidebar-button {
  position: fixed;
  bottom: 0;
  left: -10px;
  z-index: 1000;
  transition: 0.4s linear;
  transform: translateX(-8px);
  &:hover {
    transition: 0.4s linear;
    transform: translateX(-0px);
  }
}
</style>
