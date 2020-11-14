<template>
  <div class="disk-manager">
    <div class="columns">
      <div class="column is-3">
        <DiskList />
      </div>
      <div class="column is-9">
        <Logo />
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
import DiskInformation from "../components/DiskInformation.vue";
import DiskParameter from "../components/DiskParameter.vue";
import DiskList from "../components/DiskList.vue";
import Logo from "../components/Logo.vue";
import { ipcRenderer } from "electron";
export default {
  components: {
    Logo,
    DiskList,
    DiskParameter,
    DiskInformation,
  },
  created() {
    ipcRenderer.send("fetch-disks");
  },
};
</script>
<style scoped lang="scss">
.disk-manager {
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 8px 1rem 0;
}
</style>
