<template>
  <div class="transfer-rate animate__animated animate__fadeInRight"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.transfer-rate {
  width: 100%;
  height: 32vh;
  background-color: rgba($color: #ababab, $alpha: .3);
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow .8s;
  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
    height: 32vh;
  }
}
</style>
