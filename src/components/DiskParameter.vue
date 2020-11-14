<template>
  <div class="disk-parameter animate__animated animate__fadeInUp">
    <div class="list" v-if="disks.length">
      <div class="list-item-name animate__animated animate__fadeInUp">
        {{ disks[index].name }} - {{ disks[index].interfaceType }}
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item bytes-sector">
          <div class="title-para">
            Bytes / sector
          </div>
          <div class="parameter">
            {{ disks[index].bytesPerSector }}
          </div>
        </div>
        <div class="sub-item sectors-track">
          <div class="title-para">
            Sectors / track
          </div>
          <div class="parameter">
            {{ disks[index].sectorsPerTrack }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item tracks-cylinder">
          <div class="title-para">
            Tracks / cylinder
          </div>
          <div class="parameter">
            {{ disks[index].tracksPerCylinder }}
          </div>
        </div>
        <div class="sub-item cylinders">
          <div class="title-para">
            Cylinders
          </div>
          <div class="parameter">
            {{ disks[index].totalCylinders }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item capacity">
          <div class="title-para ">
            Capacity
          </div>
          <div class="parameter ">
            {{ Math.floor(disks[index].size / 1024 / 1024 / 1024) }} GB
          </div>
        </div>
        <div class="sub-item type">
          <div class="title-para ">
            Type
          </div>
          <div class="parameter ">
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
  background-color: rgba(#12d1e2, 0.1);
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.8s;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
  }
}
.list {
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
}
.list-item-name {
  border: 2px solid rgba(#12d1e2, 0.5);
  border-radius: 1rem;
  text-align: center;
  padding: 2px;
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
  border-left: 3px dashed rgba(#12d1e2, 0.5);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-para {
  font-weight: bold;
}
</style>
