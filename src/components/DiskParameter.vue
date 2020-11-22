<template>
  <div class="disk-parameter animate__animated animate__fadeInLeft">
    <div class="list" v-if="disks.length">
      <div class="list-item-name animate__animated animate__fadeIn">
        <span class="animate__animated animate__fadeInUp">{{ disks[index].name }} - {{ disks[index].interfaceType }}</span>
      </div>
      <div class="list-item animate__animated animate__fadeIn">
        <div class="sub-item bytes-sector">
          <div class="title-para">Bytes / sector</div>
          <div class="parameter">
            {{ disks[index].bytesPerSector }}
          </div>
        </div>
        <div class="sub-item sectors-track">
          <div class="title-para">Sectors / track</div>
          <div class="parameter">
            {{ disks[index].sectorsPerTrack }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeIn">
        <div class="sub-item tracks-cylinder">
          <div class="title-para">Tracks / cylinder</div>
          <div class="parameter">
            {{ disks[index].tracksPerCylinder }}
          </div>
        </div>
        <div class="sub-item cylinders">
          <div class="title-para">Cylinders</div>
          <div class="parameter">
            {{ disks[index].totalCylinders }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeIn">
        <div class="sub-item capacity">
          <div class="title-para">Capacity</div>
          <div class="parameter">
            {{ Math.floor(disks[index].size / 1024 / 1024 / 1024) }} GB
          </div>
        </div>
        <div class="sub-item type">
          <div class="title-para">Type</div>
          <div class="parameter">
            {{ disks[index].type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
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
    ...mapState("currentData", {
      index: "current",
    }),
  },
};
</script>

<style scoped lang="scss">
.disk-parameter {
  width: 100%;
  height: 40vh;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px var(--boxshadow-dark), -5px -5px 10px var(--boxshadow-light);
  overflow: hidden;

}
.list {
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
}
.list-item-name {
  border: 2px solid var(--text-active-color);
  border-radius: 1rem;
  text-align: center;
  padding: 2px;
  width: 100%;
  overflow: hidden;
  user-select: none;
}
.list-item {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 4px;
}
.sub-item {
  padding-left: 0.5rem;
  border-left: 3px dashed var(--text-active-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-para {
  font-weight: bold;
}
</style>
