<template>
  <div class="transfer-rate animate__animated animate__fadeInRight">
    <div class="logo">Readisk</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.transfer-rate {
  overflow: hidden;
  user-select: none;
  width: 100%;
  height: 32vh;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px var(--boxshadow-dark), -5px -5px 10px var(--boxshadow-light);
  display: grid;
  place-items: center;
}
.logo {
  font-weight: 900;
  font-size: 100px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--background-color);
  font-weight: 900;
  text-shadow: 5px 5px 7px var(--boxshadow-dark), -3px -3px 6px var(--boxshadow-light);
}
</style>
