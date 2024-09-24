<template>
  <div class="user__avatar">
    <img src="../assets/avatar.jpg" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.user__avatar {
  max-width: 200px;
  width: 20vw;
  margin-right: 10%;
  & img {
    width: 100%;
    border-radius: 50%;
    border: 2px solid #d5d4d4;
  }
}
</style>
