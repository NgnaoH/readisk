<template>
  <div class="transfer-rate animate__animated animate__fadeInRight">
    <div class="clip-path left"></div>
    <div class="clip-path right"></div>
    <div class="logo animate__animated animate__bounceIn animate__delay-2s">Readisk</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.transfer-rate {
  user-select: none;
  width: 100%;
  height: 32vh;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.8s;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
    height: 32vh;
  }
  display: flex;
  align-items: center;
  justify-content: center;
}
.clip-path {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(#12d1e2, 0.1);
}
.left {
  clip-path: circle(65.8% at 36% 100%);
}
.right {
  clip-path: circle(38.4% at 79% 43%);
}
.logo {
  font-weight: 900;
  font-size: 50px;
  letter-spacing: 8px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(
    rgba(#12d1e2, 1),
    rgba(#12d1e2, 0.5),
    rgba(#12d1e2, 0)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}
</style>
