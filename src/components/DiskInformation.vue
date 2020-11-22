<template>
  <div class="disk-information animate__animated animate__fadeInRight">
    <div class="list" v-if="blocks.length && fss.length">
      <div
        class="list-item animate__animated animate__fadeIn"
        v-for="(fs, index) in fss"
        :key="fs.id"
      >
        <div class="informations">
          <div class="name">
            <div v-if="blocks[index].label">
              {{ blocks[index].physical }} {{ blocks[index].label }} - {{ blocks[index].name }}
            </div>
            <div v-else>{{ blocks[index].physical }} Disk - {{ blocks[index].name }}</div>
          </div>
          <div class="type">Type: {{ blocks[index].fstype }}</div>
        </div>
        <div class="opacity">
          <div class="status">
            <Icon icon="inbox" />
            {{ Math.floor(fs.use) }}% Used -
            {{
              Math.floor(
                (fs.size - fs.used) / 1024 / 1024 / 1024
              )
            }}
            GB free of
            {{ Math.floor(fs.size / 1024 / 1024 / 1024) }} GB
          </div>
          <div class="size">
            <div
              class="used"
              :style="{ width: fss ? `${fs.use}%` : '0%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      blocks: [],
      fss: [{},{},{}],
    };
  },
  created() {
    ipcRenderer.on("block-devices", (event, data) => {
      this.blocks = data;
    });
    ipcRenderer.on("fs-size", (event, data) => {
      this.fss = data;
    });
  },
};
</script>

<style scoped lang="scss">
.disk-information {
  width: 100%;
  height: 40vh;
  border-radius: 1rem;
  border: 2px solid var(--background-color);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 5px 5px 10px var(--boxshadow-dark), -5px -5px 10px var(--boxshadow-light);
  border-top: 0.75rem solid var(--background-color);
  border-bottom: 0.75rem solid var(--background-color);
}
.list {
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
}
.list-item {
  width: 100%;
  height: 64px;
  margin-bottom: 0.25rem;
  display: flex;
  border-radius: 0.5rem;
  padding: 0.5rem;
  .informations {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .opacity {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 2px;
    position: relative;
    overflow: hidden;
    .status {
      font-size: 11px;
    }
    .size {
      width: 100%;
      align-items: center;
      height: 50%;
      box-shadow: inset 3px 3px 5px var(--boxshadow-dark), inset -3px -3px 5px var(--boxshadow-light);
      .used {
        transition: width 1.5s;
        width: 0;
        height: 50%;
        background: var(--text-design-color);
        position: absolute;
        box-shadow: 5px 0px 5px var(--boxshadow-dark);
      }
    }
  }
}
.icon {
  fill: var(--text-normal-color);
}
</style>
