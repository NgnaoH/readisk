<template>
  <div class="disk-info">
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
            <div class="time" ref="capacity"></div>
            <div class="sub">loading...</div>
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
            <Information/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Information from './Information.vue';
export default {
  components: {
    Information,
  }
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
      .active-time,
      .response-time,
      .write-speed,
      .read-speed,
      .info {
        .sub {
          color: rgba($color: #000, $alpha: 0.6);
          font-size: 12px;
        }
        .time {
          transition: 0.5s;
          font-size: 18px;
        }
      }
    }
  }
}
</style>