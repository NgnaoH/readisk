<template>
  <div class="disk-info">
    <ul class="list">
      <li class="item">
      </li>
      <li class="item">
      </li>
      <li class="item">
      </li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  components: {
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