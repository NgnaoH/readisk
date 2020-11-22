<template>
  <div class="disk-list animate__animated animate__fadeInLeft">
    <div class="list">
      <div
        :class="{
          'list-item': true,
          animate__animated: true,
          animate__fadeIn: true,
          'isnt-active': !isActive,
          'is-active': index == current ? !isActive : isActive,
        }"
        v-for="(disk, index) in disks"
        :key="disk.id"
        @click="setData(index)"
      >
        <div class="animate__animated animate__fadeInDown">
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
      current: "current",
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
  box-shadow: 5px 5px 10px var(--boxshadow-dark), -5px -5px 10px var(--boxshadow-light);
}
.list {
  display: flex;
  padding: 1rem;
  flex-direction: column;
}
.list-item {
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  border: .5px solid var(--background-color);
  & > div {
    border-radius: 0.5rem;
    height: 48px;
    padding: 0 18px;
    display: grid;
    place-items: center;
    text-align: center;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    cursor: pointer;
    transition: 0.2s;
  }
}
.isnt-active {
  box-shadow: 4px 4px 7px var(--boxshadow-dark), -5px -5px 8px var(--boxshadow-light);
}
.is-active {
  box-shadow: inset 2px 2px 5px var(--boxshadow-dark), inset -3px -3px 7px var(--boxshadow-light),
    0px 0px 0px var(--boxshadow-dark), 0px 0px 0px var(--boxshadow-light);
  color: var(--text-active-color);
}
</style>
