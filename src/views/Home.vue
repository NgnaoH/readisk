<template>
  <div class="home">
    <div class="title">
      <p>Đồ án Nguyên lý hệ điều hành</p>
      <p class="circle"></p>
    </div>
    <div class="section">
      <div class="card-content">abs</div>
      <div class="card-content">Home page</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
}
.title {
  position: relative;
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  background: -webkit-linear-gradient(rgba(#12d1e2, 1), rgba(#12d1e2, 0.7), rgba(#12d1e2, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}
.circle {
  position: absolute;
  top: 48px;
  left: 50%;
  border: 2px solid rgba(#12d1e2, 0.5);
  border-radius: 999px;
  width: 16px;
  height: 16px;
  &::after{
    position: absolute;
    content: '';
    width: 100px;
    height: 4px;
    border-radius: 999px;
    top: 0;
    left: 0;
    background-color: rgba(#12d1e2, 0.5);
  }
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
}
.card-content {
  cursor: pointer;
  width: 30%;
  height: 48vh;
  background-color: rgba($color: #ababab, $alpha: 0.3);
  border-radius: 2rem;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow .5s;
  &:hover {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  }
  &:active {
    transition: box-shadow .1s;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.3);
  }
}
.name {
  
}
</style>

