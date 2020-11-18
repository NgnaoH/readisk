<template>
  <div class="about">
    <div
      class="clip-path left animate__animated animate__pulse animate__infinite"
    ></div>
    <div
      class="clip-path top animate__animated animate__pulse animate__fast animate__infinite"
    ></div>
    <div
      class="clip-path bot animate__animated animate__pulse animate__infinite"
    ></div>
    <div
      class="clip-path right animate__animated animate__pulse animate__fast animate__infinite"
    ></div>
    <div class="about-content">
      <p class="animate__animated animate__flipInX">
        Readisk: a system display drive information desktop application
        developed using
        <a>Vue.js</a> and <a>Electron</a>.
      </p>
      <h1 class="animate__animated animate__flipInX">
        © Copyright by Nguyen Thanh Hoan
      </h1>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.about {
  height: 100%;
  position: relative;
  z-index: 0;
}
.clip-path {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(#12d1e2, 0.1);
  z-index: -10;
}
.left {
  clip-path: circle(24% at 24% 56%);
}
.right {
  clip-path: circle(32.2% at 68% 53%);
}
.top {
  clip-path: circle(13.3% at 37% 24%);
}
.bot {
  clip-path: circle(6.4% at 90% 25%);
}
.about-content {
  padding-top: 32vh;
  text-align: center;
  color: black;
  & > p > a {
    color: black;
    transition: 0.4s;
    &:hover {
      transition: 0.4s;
      color: rgba(#12d1e2, 1);
    }
  }
  & > p {
    &::first-letter {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
