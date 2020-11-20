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
      border-radius: 1rem;
      box-shadow: 5px 5px 10px #c6c4c4, -5px -5px 10px #ffffff;
      padding-top: 4px;
      margin-right: 1rem;
      &:first-child {
        margin-right: auto;
        text-decoration: none;
      box-shadow: inset 5px 5px 10px #c6c4c4, inset -5px -5px 10px #ffffff;

        background: -webkit-linear-gradient(
          rgba(#12d1e2, 1),
          rgba(#12d1e2, 0.5),
          rgba(#12d1e2, 0)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-size: 24px;
        margin-left: 1rem;
      }
      .icon {
        // transition: 0.4s ease;
        fill: rgba(#000, 1);
      }
      &:hover:not(:first-child) {
        // transition: 0.4s ease;
              box-shadow: inset 5px 5px 10px #c6c4c4, inset -5px -5px 10px #ffffff;

        // background-color: rgba($color: #27dfee, $alpha: 0.8);
        .icon {
          // transition: 0.4s ease;
          fill: #12d1e2;
        }
      }
    }
  }
}
</style>
