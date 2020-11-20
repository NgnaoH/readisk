<template>
  <div class="disk-list animate__animated animate__fadeInRight">
    <div class="list">
      <div
        :class="
          'list-item' +
            'animate__animated' +
            'animate__fadeInUp' +
            { 'is-active': !buttonActive }
        "
        v-for="(disk, index) in disks"
        :key="disk.id"
        @click="setData(index), toggleButton"
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
  computed: {
    ...mapState("button", {
      buttonActive: "buttonStatus",
    }),
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
  // background-color: #e6feff;
  border-radius: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  // box-shadow: inset 5px 5px 7px #9b9999, inset -5px -5px 7px #ffffff;
  box-shadow: 5px 5px 10px #c6c4c4, -5px -5px 10px #ffffff;
  // transition: box-shadow 0.8s;
  // &:hover {
  //   box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
  // }
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
    padding: 18px;
    display: flex;
    align-items: center;
    // justify-content: center;
    text-align: center;
    // overflow: auto;
    // &::-webkit-scrollbar {
    //   display: none;
    // }
    cursor: pointer;
    box-shadow: 5px 5px 10px #c6c4c4, -5px -5px 10px #ffffff;
    transition: 0.5s;
    &:active {
      box-shadow: inset 5px 5px 7px #9b9999, inset -5px -5px 7px #ffffff;
      .disk-list {
        box-shadow: 5px 5px 7px #d4d2d2, -5px -5px 7px #ffffff;
      }
    }
  }
}
.is-active {
  color: #12d1e2;
}
</style>
