<template>
  <div class="title-bar">
    <ul class="windows-menu">
      <li class="item">
        <div>
          Readisk
        </div>
      </li>
      <li @click="minimize" class="item btn">
        <a href="">
          <Icon :size="24" icon="dash"></Icon>
        </a>
      </li>
      <li @click="close" ref="close" class="item btn">
        <a href="">
          <Icon :size="24" icon="x"></Icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { ipcRenderer } from "electron";
export default {
  methods: {
    close: function() {
      ipcRenderer.send("close-app");
    },
    minimize: function() {
      ipcRenderer.send("minimize-app");
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.title-bar {
  -webkit-app-region: drag;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .windows-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    .btn {
      -webkit-app-region: no-drag;
    }
    .item {
      padding: 0 0.5rem;
      display: flex;
      align-items: center;
      transition: 0.5s;
      cursor: pointer;
      &:first-child {
        margin-right: auto;
        text-decoration: none;
        background: -webkit-linear-gradient(rgba(#000, 1), rgba(#000, 0.4));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 24px;
        cursor: default;
      }
      .icon {
        fill: rgba(#000, 0.7);
      }
      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.4);
      }
      &:last-child {
        &:hover {
          background-color: rgba($color: red, $alpha: 0.4);
        }
      }
    }
  }
}
</style>
