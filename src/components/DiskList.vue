<template>
  <div class="disk-list animate__animated animate__fadeInRight">
    <div class="list">
      <div
        class="list-item animate__animated animate__fadeInUp"
        v-for="disk in disks"
        :key="disk.id"
      >
        {{ disk.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, IpcRenderer } from "electron";
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
.disk-list {
  width: 100%;
  height: 32vh;
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
  user-select: none;
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #eeecec;
  text-align: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  cursor: pointer;
}
</style>