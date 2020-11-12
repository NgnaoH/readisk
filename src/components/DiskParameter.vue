<template>
  <div class="disk-parameter animate__animated animate__fadeInUp">
    <div class="list" v-if="disks.length">
      <div class="list-item-name animate__animated animate__fadeInUp">
        {{ disks[0].name }} - {{ disks[0].interfaceType }}
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item bytes-sector">
          <div class="title-para">Bytes / sector</div>
          <div class="parameter">
            {{ disks[0].bytesPerSector }}
          </div>
        </div>
        <div class="sub-item sectors-track">
          <div class="title-para">Sectors / track</div>
          <div class="parameter">
            {{ disks[0].sectorsPerTrack }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item tracks-cylinder">
          <div class="title-para">Tracks / cylinder</div>
          <div class="parameter">
            {{ disks[0].tracksPerCylinder }}
          </div>
        </div>
        <div class="sub-item cylinders">
          <div class="title-para">Cylinders</div>
          <div class="parameter">
            {{ disks[0].totalCylinders }}
          </div>
        </div>
      </div>
      <div class="list-item animate__animated animate__fadeInUp">
        <div class="sub-item capacity">
          <div class="title-para">Capacity</div>
          <div class="parameter">
            {{ Math.floor(disks[0].size / 1024 / 1024 / 1024) }} GB
          </div>
        </div>
        <div class="sub-item type">
          <div class="title-para">Type</div>
          <div class="parameter">
            {{ disks[0].type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
      disks: [],
    };
  },
  created() {
    ipcRenderer.on("disk-layout", (event, data) => {
      this.disks = data;
      console.log(data);
    });
  },
};
</script>

<style scoped lang="scss">
.disk-parameter {
  width: 100%;
  height: 40vh;
  background-color: rgba($color: #ababab, $alpha: 0.3);
  border-radius: 1rem;
}
.list {
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
}
.list-item-name {
  border: 1px solid #eeecec;
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
  padding-left: 1rem;
  width: 100%;
  border-left: 2px dashed #eeecec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-para {
  font-weight: bold;
}
</style>