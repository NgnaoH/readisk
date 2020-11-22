<template>
  <div class="title-bar">
    <div class="windows-menu">
      <div class="item animate__animated animate__headShake">Readisk</div>
      <div class="btn-wrapper">
        <div @click="minimize" class="item btn">
          <a>
            <Icon :size="24" icon="dash"></Icon>
          </a>
        </div>
        <div @click="close" class="item btn">
          <a>
            <Icon :size="24" icon="x"></Icon>
          </a>
        </div>
      </div>
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  .windows-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
    .btn {
      -webkit-app-region: no-drag;
    }
    .btn-wrapper {
      border-radius: 1rem;
      box-shadow: 5px 5px 10px var(--boxshadow-dark),
        -5px -5px 10px var(--boxshadow-light);
      display: flex;
      .item:hover {
        .icon {
          transition: 0.2s all;
          fill: var(--text-active-color);
        }
      }
    }
    .item {
      padding: 0 0.75rem;
      display: flex;
      align-items: center;
      transition: 0.4s ease;
      cursor: pointer;
      padding-top: 4px;
      &:first-child {
        margin-right: auto;
        box-shadow: none;
        background: var(--text-design-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 24px;
        cursor: default;
      }
      .icon {
        fill: var(--text-normal-color);
      }
    }
  }
}
</style>
