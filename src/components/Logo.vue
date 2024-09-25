<template>
  <div class="logo">
    <img class="logo--img" src="../assets/logo.png" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.logo {
  max-width: 800px;
  margin: 0 auto;
  animation: showLogo 0.7s ease-in-out;
  filter: drop-shadow(0 -6mm 4mm rgba(33, 32, 32, 0.68));
  &--img {
    width: 100%;
    display: block;
  }
  @keyframes showLogo {
    0% {
      transform: translateY(200px);
      filter: blur(10px);
      opacity: 0;
    }
    70% {
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
      filter: blur(0px);
    }
  }
}
</style>
