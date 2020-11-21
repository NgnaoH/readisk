<template>
  <div class="disk-information animate__animated animate__fadeInRight">
    <div class="list" v-if="blocks.length">
      <div
        class="list-item animate__animated animate__fadeIn"
        v-for="(block, index) in blocks"
        :key="block.id"
      >
        <div class="informations">
          <div class="name">
            <div v-if="block.label">
              {{ block.physical }} {{ block.label }} - {{ block.name }}
            </div>
            <div v-else>{{ block.physical }} Disk - {{ block.name }}</div>
          </div>
          <div class="type">Type: {{ block.fstype }}</div>
        </div>
        <div class="opacity">
          <div class="status">
            <Icon icon="inbox" />
            {{ Math.floor(fss[index].use) }}% Used -
            {{
              Math.floor(
                (fss[index].size - fss[index].used) / 1024 / 1024 / 1024
              )
            }}
            GB free of
            {{ Math.floor(fss[index].size / 1024 / 1024 / 1024) }} GB
          </div>
          <div class="size">
            <div
              class="used"
              :style="{ width: fss[index] ? `${fss[index].use}%` : '0%' }"
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
  border: 2px solid #eeecec;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 5px 5px 10px #c6c4c4, -5px -5px 10px #ffffff;
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
      box-shadow: inset 2px 2px 5px #c6c4c4, inset -3px -3px 5px #fff;
      .used {
        transition: width 2s ease;
        width: 0;
        height: 50%;
        background: linear-gradient(
          rgba(18, 209, 226, 0.6),
          rgba(18, 209, 226, 0),
          rgba(18, 209, 226, 0.6)
        );
        position: absolute;
        box-shadow: 3px 0px 5px #c6c4c4, inset 2px 0px 7px #fff;
      }
    }
  }
}
</style>
