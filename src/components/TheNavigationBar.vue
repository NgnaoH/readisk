<template>
  <div class="title-bar">
    <ul class="windows-menu">
      <li class="item">
        <div>
          Readisk
        </div>
      </li>
      <li @click="minimize" class="item btn">
        <a>
          <Icon :size="24" icon="dash"></Icon>
        </a>
      </li>
      <li @click="close" class="item btn">
        <a>
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
    .btn {
      -webkit-app-region: no-drag;
    }
    .item {
      padding: 0 0.75rem;
      display: flex;
      align-items: center;
      transition: .4s ease;
      cursor: pointer;
      &:first-child {
        margin-right: auto;
        text-decoration: none;
        background: -webkit-linear-gradient(rgba(#fff, 1), rgba(#fff, 0.6), rgba(#fff, 0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 24px;
        cursor: default;
      }
      .icon {
        transition: .4s ease;
        fill: rgba(#fff, 1);
      }
      &:hover {
        transition: .4s ease;
        background-color: rgba($color: #77a9da, $alpha: 1);
        .icon {
          transition: .4s ease;
          fill: #0F0F0F;
        }
      }
      &:last-child {
        &:hover {
          .icon {
            fill: #0F0F0F;
          }
        }
      }
    }
  }
}
</style>
