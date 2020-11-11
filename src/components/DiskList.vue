<template>
  <div class="disk-list animate__animated animate__fadeInRight">
    <div class="list-item" v-for="n in 10" :key="n.id">
      {{n}}
    </div>
  </div>
</template>

<script>
import {ipcRenderer, IpcRenderer} from 'electron';
export default {
  data() {
    return {
      disks: [],
    }
  },
  created() {
    ipcRenderer.on("disk-layout", (event,data) => {
      this.disks = data
    })
  }
}
</script>

<style scoped lang="scss">
.disk-list{
  width: 100%;
  height: 32vh;
  background-color: rgba($color: #ababab, $alpha: .3);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
}
.list-item {
  width: 100%;
  height: 100px;
  
  background-color: red;
}

</style>