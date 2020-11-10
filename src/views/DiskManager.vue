<template>
  <div class="about">
    <div class="columns">
      <div class="column is-2">
        <DiskList />
      </div>
      <div class="column is-10">
        <DiskTransferRate />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <DiskParameter />
      </div>
      <div class="column is-6">
        <DiskInformation />
      </div>
    </div>
  </div>
</template>

<script>
import DiskTransferRate from "../components/DiskTransferRate.vue";
import DiskInformation from "../components/DiskInformation.vue";
import DiskParameter from "../components/DiskParameter.vue";
import DiskList from "../components/DiskList.vue";
import { ipcRenderer } from "electron";
export default {
  components: {
    DiskList,
    DiskParameter,
    DiskInformation,
    DiskTransferRate,
  },
  created() {
    ipcRenderer.send("fetch-disks");
  },
};
</script>
