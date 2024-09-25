<template>
  <div class="user-goal">
    <div class="user-goal__title">
      <h2>Моя цель</h2>
    </div>
    <div class="user-goal__img">
      <img src="../assets/goal.png" alt="" />
    </div>
    <img
      class="user-goal__people"
      src="../assets/items/people/img10.png"
      alt=""
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.user-goal {
  margin-bottom: 100px;
  position: relative;
  &__title {
    margin-bottom: 20px;
    & h2 {
      font-size: 40px;
    }
  }
  &__img {
    border: 3px solid #efefef;
    border-radius: 50px;
    overflow: hidden;
    & img {
      width: 100%;
      display: block;
    }
  }
  &__people {
    width: 50%;
    position: absolute;
    bottom: 0;
    max-width: 300px;
    right: 0;
    display: block;
  }
}
</style>
