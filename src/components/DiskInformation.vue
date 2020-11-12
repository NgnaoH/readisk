<template>
  <div class="disk-information animate__animated animate__fadeInUp">
    <div class="list">
      <div class="list-item" v-for="(block, index) in blocks" :key="block.id">
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
          <div>
            Space: {{ Math.floor(100 - fss[index].use) }}%
          </div>
          <div class="size">
            <div
              class="used"
              :style="{ width: `${fss[index].use}` + '%' }"
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
  props: {
    use: Number,
  },
  data() {
    return {
      blocks: [],
      fss: [],
    };
  },
  created() {
    ipcRenderer.on("block-devices", (event, data) => {
      this.blocks = data;
      console.log(data);
    });
    ipcRenderer.on("fs-size", (event, data) => {
      this.fss = data;
      console.log(data);
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
  &::-webkit-scrollbar {
    display: none;
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
    width: 40%;
  }
  .opacity {
    width: 60%;
    display: flex;
    flex-direction: column;
    .size {
      width: 100%;
      align-items: center;
      border: 2px solid #eeecec;
      height: 50%;
      .used {
        width: 0;
        height: 100%;
        background-color: #eeecec;
      }
    }
  }
}
</style>