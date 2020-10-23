<template>
  <div id="app" class="app">
    <div class="main">
      <div>
        <transition :name="transitionName" mode="out-in">
          <router-view class="child-view" />
        </transition>
      </div>
    </div>
    <TitleBar />
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TitleBar from "@/components/TitleBar.vue";
export default {
  components: {
    SideBar,
    TitleBar,
  },
  data() {
    return {
      transitionName: "slide-fade",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-fade" : "slide-fade";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  overflow: hidden;
}
.app {
  font-family: "Roboto", sans-serif;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.main {
  padding: 1rem;
  & > div {
    z-index: 1;
    position: absolute;
    top: 1.6rem;
    left: 0;
    width: 100%;
    height: 72vh;
  }
}
</style>
