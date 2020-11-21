<template>
  <div class="disk-list animate__animated animate__fadeInRight">
    <div class="list">
      <div
        :class="{
          'list-item': true,
          animate__animated: true,
          animate__fadeInUp: true,
          'isnt-active': !isActive,
          'is-active': index == i ? !isActive : isActive,
        }"
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
      isActive: false,
    };
  },
  created() {
    ipcRenderer.on("disk-layout", (event, data) => {
      this.disks = data;
    });
  },
  computed: {
    ...mapState("currentData", {
      i: "current",
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
  border-radius: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 5px 5px 10px #c6c4c4, -5px -5px 10px #ffffff;
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
    justify-content: center;
    text-align: center;
    // overflow: auto;
    // &::-webkit-scrollbar {
    //   display: none;
    // }
    cursor: pointer;
    transition: 0.2s;
  }
}
.isnt-active {
      box-shadow: 4px 4px 7px #c6c4c4, -5px -5px 8px #ffffff;
}
.is-active {
  box-shadow: inset 2px 2px 5px #c6c4c4, inset -3px -3px 7px #ffffff,
    0px 0px 0px #c6c4c4, 0px 0px 0px #ffffff;
  color: #12d1e2;
}
</style>
