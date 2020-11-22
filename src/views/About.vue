<template>
  <div class="about">
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
}
.about-content {
  padding-top: 32vh;
  text-align: center;
  & > p > a {
    color: var(--text-normal-color);
    transition: 0.4s;
    &:hover {
      transition: 0.4s;
      color: var(--text-active-color);
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
