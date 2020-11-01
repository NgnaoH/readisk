<template>
  <div class="disk-info">
    <ul class="list">
      <li class="item">
        <DiskParameterItem class="active-time" title="Active time" sub="10" />
        <DiskParameterItem
          class="response-time"
          title="Average respontime time"
          sub="10"
        />
      </li>
      <li class="item">
        <DiskParameterItem class="read-speed" title="Read speed" sub="10" />
        <DiskParameterItem class="write-speed" title="Write speed" sub="10" />
      </li>
      <li class="item">
        <DiskParameterItem
          class="write-speed"
          title="Capacity"
          :sub="Math.ceil(disks[0].size / 1024 / 1024 / 1024) + ' GB'"
        />
        <DiskParameterItem class="write-speed" title="Type" :sub="disks[0].type" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import DiskParameterItem from "./DiskParameterItem.vue";
export default {
  components: {
    DiskParameterItem,
  },
  data() {
    return {
      disks: [],
    };
  },
  provide() {
    return {
      disks: this.disks,
    };
  },
  created() {
    ipcRenderer.on("disk-layout", (event, data) => {
      this.disks = data;
    });
    ipcRenderer.send("fetch-disks");
  },
};
</script>

<style scoped lang="scss">
.disk-info {
  margin: 0.5rem;
  height: 100%;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    li {
      height: 100%;
      display: flex;
    }
  }
}
</style>