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
  padding: 32px 0 48px;
  margin: 0;
  height: 100vh;
}
.sidebar-button {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: var(--background-color);
  box-shadow: inset 5px 5px 7px #c6c4c4, inset -5px -5px 7px #fff
}
::selection{
  background: rgba(#27dfee, 0.3);
}
</style>
