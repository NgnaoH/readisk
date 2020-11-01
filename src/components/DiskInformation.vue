<template>
  <div class="disk-info">
    <DiskInformationItem
      v-for="block in blocks"
      :key="block.id"
      :name="block.name"
      :label="block.label"
      :capacity="Math.ceil(block.size / 1024 / 1024 / 1024) + ' GB'"
    />
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import DiskInformationItem from "./DiskInformationItem.vue";
export default {
  components: {
    DiskInformationItem,
  },
  data() {
    return {
      blocks: [],
    };
  },
  provide() {
    return {
      blocks: this.blocks,
    };
  },
  created() {
    ipcRenderer.on("block-devices", (event, data) => {
      this.blocks = data;
      console.log(data);
    });
    ipcRenderer.send("fetch-disks");
  },
};
</script>

<style scoped lang="scss">
.disk-info {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>