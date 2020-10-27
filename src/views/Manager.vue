<template>
  <div class="manager">
    <div class="manager-wrapper">
      <div class="grid1 chart-wrapper">
        <div class="grid2">
          <div class="chart-activeRate">
            
          </div>
        </div>
        <div class="grid2">
          <div class="title"></div>
          <div class="chart-transferRate">
            
          </div>
          <div class="subtitle"></div>
        </div>
      </div>
      <div class="grid1 info-wrapper">
        <div class="grid2 info">
          <ul class="list">
            <li class="item">
              <div class="active-time">
                <div class="sub">Active time</div>
                <div class="time">10 %</div>
              </div>
              <div class="response-time">
                <div class="sub">Average response time</div>
                <div class="time">10</div>
              </div>
            </li>
            <li class="item">
              <div class="read-speed">
                <div class="sub">Read speed</div>
                <div class="time">10 KB/s</div>
              </div>
              <div class="write-speed">
                <div class="sub">Write speed</div>
                <div class="time">10 KB/s</div>
              </div>
            </li>
            <li class="item">
              <div class="item">
                <div class="write-speed">
                  <div class="sub">Capacity:</div>
                  <div v-if="disks.length" class="time" ref="capacity">{{Math.ceil(this.disks[0].size/1024/1024/1024)}} GB</div>
                  <div v-else class="sub">loading...</div>
                </div>
              </div>
              <div class="item">
                <div class="write-speed">
                  <div class="sub">Formatted</div>
                  <div class="time">10</div>
                </div>
              </div>
              <div class="item">
                <div class="write-speed">
                  <div class="sub">Capacity</div>
                  <div class="time">10</div>
                </div>
              </div>
              <div class="item">
                <div class="write-speed">
                  <div class="sub">Type:</div>
                  <div v-if="disks.length" class="time">{{this.disks[0].type}}</div>
                  <div v-else class="sub">loading...</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="grid2 storage">
          <div class="grid3">
            <DiskInformation/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Chart from "@/components/Chart.vue";
import DiskInformation from '@/components/DiskInformation.vue';
import { ipcRenderer } from "electron";
export default {
  components: {
    //Chart,
    DiskInformation
  },
  data() {
    return {
      disks: [],
      blocks: []
    }
  },
  provide() {
    return {
      disks: this.disks,
      blocks: this.blocks
    };
  },
  created() {
    ipcRenderer.on('disk-layout', (event, data) => {
      this.disks = data
      console.log(this.disks)
    })
    ipcRenderer.on('block-devices', (event, data) => {
      this.blocks = data
      console.log(this.blocks)
    })
    ipcRenderer.send('fetch-disks')
  },
};
</script>

<style scoped lang="scss">
$align-item: 0.5rem;
body {
  background: rgba($color: #fff, $alpha: 0.2);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.manager-wrapper {
  display: flex;
  height: 72vh;
  justify-content: space-around;
  .chart-wrapper {
    width: 60%;
  }
  .info-wrapper {
    width: 40%;
  }
  .grid1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .grid2 {
      display: flex;
      flex-direction: column;
      height: 50%;
      background-color: rgba($color: #fff, $alpha: 0.3);
      margin: $align-item;
      border-radius: 1rem;
      position: relative;
      .chart-activeRate {
        margin: $align-item;
        position: fixed;
      }
      .chart-transferRate {
        margin: $align-item;
        position: fixed;
      }
      .list {
        margin: $align-item;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        li {
          display: flex;
          height: 100%;
          justify-content: space-around;
          & > div {
            margin: $align-item;
            background-color: rgba($color: #fff, $alpha: 0.4);
            border-radius: 0.25rem;
            width: 100%;
          }
          .active-time,
          .response-time,
          .write-speed,
          .read-speed,
          .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            .sub {
              color: rgba($color: #000, $alpha: 0.6);
              font-size: 12px;
            }
            .time {
              transition: 0.5s;
              font-size: 20px;
            }
          }
          .info {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
