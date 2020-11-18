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
  background-color: rgba(#12d1e2, 0.1);
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
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  & > div {
    border-radius: 0.5rem;
    height: 48px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    cursor: pointer;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    &:hover {
      background-color: rgba(#12d1e2, 0.4);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    }
    &:active {
      transition: box-shadow 0.05s;
      box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0.5);
    }
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      background: rgba(#eeecec, 0.4);
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    &:hover::before {
      animation: a 1s;
      top: -10%;
      left: 80%;
    }
    @keyframes a {
      0% {
        top: -110%;
        left: 90%;
      }
      50% {
        top: 10%;
        left: -200%;
      }
      100% {
        top: -10%;
        left: 90%;
      }
    }
  }
}
</style>
