<template>
  <div class="disk-information animate__animated animate__fadeInUp">

  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
      blocks: [],
    };
  },
  created() {
    ipcRenderer.on("block-devices", (event, data) => {
      this.blocks = data;
    });
  },
};
</script>

<style scoped lang="scss">
.disk-information {
  width: 100%;
  height: 40vh;
  background-color: rgba($color: #ababab, $alpha: .1);
  border-radius: 1rem;
}
</style>