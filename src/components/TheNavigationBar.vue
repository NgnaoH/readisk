<template>
  <div class="title-bar">
    <ul class="windows-menu">
      <li class="item animate__animated animate__headShake">
        Readisk
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
    // background-color: rgba(#ababab, 0.4);
    // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    .btn {
      -webkit-app-region: no-drag;
    }
    .item {
      padding: 0 0.75rem;
      display: flex;
      align-items: center;
      transition: 0.4s ease;
      cursor: pointer;
      &:first-child {
        margin-right: auto;
        text-decoration: none;
        background: -webkit-linear-gradient(
          rgba(#12d1e2, 1),
          rgba(#12d1e2, 0.7),
          rgba(#12d1e2, 0)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 24px;
        cursor: default;
      }
      .icon {
        transition: 0.4s ease;
        fill: rgba(#000, 1);
      }
      &:hover {
        transition: 0.4s ease;
        background-color: rgba($color: #27dfee, $alpha: 0.8);
        .icon {
          transition: 0.4s ease;
          fill: #fff;
        }
      }
    }
  }
}
</style>
