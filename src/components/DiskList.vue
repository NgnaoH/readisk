<template>
  <div class="disk-list animate__animated animate__fadeInRight">
    <div class="list">
      <div
        class="list-item animate__animated animate__fadeInUp"
        v-for="(disk, index) in disks"
        :key="disk.id"
        @click="setData(index)"
      >
        <div>
          {{ disk.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, IpcRenderer } from "electron";
import { mapActions, mapGetters, mapState } from "vuex";
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
  methods: {
    ...mapActions("currentData", {
      setData: "changeCurrentData",
    }),
  },
};
</script>

<style scoped lang="scss">
.disk-list {
  user-select: none;
  width: 100%;
  height: 32vh;
  background-color: rgba($color: #ababab, $alpha: 0.3);
  border-radius: 1rem;
  overflow: auto;
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
  border: 1px solid #eeecec;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  & > div {
    border-radius: 0.5rem;
    height: 48px;
    padding: 4px;
    text-align: center;
    word-wrap: break-word;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    cursor: pointer;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    }
    &:active {
      transition: box-shadow 0.1s;
      box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
