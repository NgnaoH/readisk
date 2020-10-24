<template>
  <div class="manager">
    <div class="manager-wrapper">
      <div class="grid1 chart-wrapper">
        <div class="grid2">
          <div class="chart-activeRate">
            <Chart type="line" :data="{}" :options="{}" />
          </div>
        </div>
        <div class="grid2">
          <div class="title"></div>
          <div class="chart-transferRate">
            <Chart type="line" :data="{}" :options="{}" />
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
                  <div class="sub">Capacity</div>
                  <div class="time" ref="capacity"> {{this.disks[0].name}} </div>
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
                  <div class="sub">Capacity</div>
                  <div class="time">10</div>
                </div>
              </div>
              <div class="item">
                <div class="write-speed">
                  <div class="sub">Capacity</div>
                  <div class="time">10</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="grid2 storage">
          <div class="grid3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import { ipcRenderer } from "electron";
export default {
  data() {
    return {
      diskLayout: [],
      diskBlockdevice: []
    }
  },
  provide() {
    return {
      disks: this.disks
    };
  },
  created() {
    ipcRenderer.on('update-disks', (event, data) => {
      this.disks = data
      console.log(this.disks)
    })
    ipcRenderer.send('fetch-disks')
  },
  components: {
    Chart,
  },
};
</script>

<style lang="scss">
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
