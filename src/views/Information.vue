<template>
  <div class="home">
    <div class="clip-path left animate__animated animate__fadeIn"></div>
    <div class="clip-path right animate__animated animate__fadeIn"></div>
    <div class="title animate__animated animate__bounceIn">
      <p>đồ án Nguyên lý hệ điều hành</p>
    </div>
    <div class="section animate__animated animate__fadeInUp">
      <div class="card-content">
        Đề tài: xây dựng ứng dụng truy xuất thông tin ổ đĩa
      </div>
      <div class="card-content">
        Giáo viên hướng dẫn: <br> Lê Trần Đức <br>
        Sinh viên thực hiện: <br> Nguyễn Thanh Hoàn
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  position: relative;
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
.title {
  position: relative;
  padding-top: 80px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  padding-bottom: 0;
  background: -webkit-linear-gradient(
    rgba(#000000, 1),
    rgba(#000000, 1),
    rgba(#000000, 0.3)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
  z-index: 1000;
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1000;
}
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  width: 30%;
  height: 24vh;
  background-color: #dbdbdb;
  border-radius: 2rem;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  }
  &:active {
    transition: box-shadow 0.1s;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.3);
  }
}
</style>
