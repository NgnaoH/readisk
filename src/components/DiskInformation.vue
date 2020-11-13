<template>
  <div class="disk-information animate__animated animate__fadeInUp">
    <div class="list" v-if="fss.length">
      <div
        class="list-item animate__animated animate__fadeInUp"
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
          <div class="type">
            Type: {{ block.fstype }}
          </div>
        </div>
        <div class="opacity">
          <div class="status">
            {{ Math.floor(fss[index].use) }}% Used -
            {{
              Math.floor(
                (fss[index].size - fss[index].used) / 1024 / 1024 / 1024
              )
            }}
            GB free of {{ Math.floor(fss[index].size / 1024 / 1024 / 1024) }} GB
          </div>
          <div class="size">
            <div
              class="used"
              :style="{ width: `${fss[index].use}` + '%'}"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
      blocks: [],
      fss: [],
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
  background-color: rgba($color: #ababab, $alpha: 0.3);
  border-radius: 1rem;
  overflow: auto;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.8s;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
  }
}
.list {
  display: flex;
  padding: 1rem;
  flex-direction: column;
}
.list-item {
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  display: flex;
  .informations {
    padding-left: 0.75rem;
    border-left: 4px dashed #eeecec;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .opacity {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .status {
      font-size: 11px;
    }
    .size {
      width: 100%;
      align-items: center;
      border: 2px solid #eeecec;
      height: 50%;
      .used {
        transition: width 1s ease;
        width: 0;
        height: 100%;
        background-color: #eeecec;
      }
    }
  }
}
</style>
