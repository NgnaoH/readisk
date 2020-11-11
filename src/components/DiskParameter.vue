<template>
  <div class="disk-parameter animate__animated animate__fadeInUp">
    
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
      disks: [],
    };
  },
  created() {
    ipcRenderer.on("disk-layout", (event, data) => {
      this.disks = data;
    });
  },
};
</script>

<style scoped lang="scss">
.disk-parameter {
  width: 100%;
  height: 40vh;
  background-color: rgba($color: #ababab, $alpha: .3);
  border-radius: 1rem;
}
</style>