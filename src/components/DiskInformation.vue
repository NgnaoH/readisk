<template>
  <div class="disk-info">
    <ul class="list">
      <li class="item">
        <div class="active-time">
          <Information sub="Active time" main="" />
        </div>
        <div class="response-time">
          <Information sub="Average respontime time" main="" />
        </div>
      </li>
      <li class="item">
        <div class="read-speed">
          <Information sub="Read speed" main="" />
        </div>
        <div class="write-speed">
          <Information sub="Write speed" main="" />
        </div>
      </li>
      <li class="item">
        <div class="item">
          <div class="write-speed">
            <Information
              sub="Capacity"
              :main="Math.ceil(disks[0].size / 1024 / 1024 / 1024) + ' GB'"
            />
          </div>
        </div>
        <div class="item">
          <div class="write-speed">
            <Information sub="Formatted" main="" />
          </div>
        </div>
        <div class="item">
          <div class="write-speed">
            <Information sub="abc" main="" />
          </div>
        </div>
        <div class="item">
          <div class="write-speed">
            <Information sub="Type" :main="disks[0].type" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import Information from "./Information.vue";
export default {
  components: {
    Information,
  },
  data() {
    return {
      disks: [],
      blocks: [],
    };
  },
  provide() {
    return {
      disks: this.disks,
      blocks: this.disks,
    };
  },
  created() {
    ipcRenderer.on("disk-layout", (event, data) => {
      this.disks = data;
      console.log(data);
    });
    ipcRenderer.on("block-devices", (event, data) => {
      this.blocks = data;
      console.log(data);
    });
    ipcRenderer.send("fetch-disks");
  },
};
</script>

<style scoped lang="scss">
$align-item: 0.5rem;
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.grid2 {
  .list {
    margin: $align-item;
    flex-direction: column;
    li {
      display: flex;
      & > div {
        margin: $align-item;
        background-color: rgba($color: #fff, $alpha: 0.4);
        border-radius: 0.25rem;
        width: 100%;
      }
    }
  }
}
</style>