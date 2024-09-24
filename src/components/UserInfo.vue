<template>
  <div class="user__info">
    <div class="user__title">
      <h2 class="user__title--h2">Frontend developer</h2>
    </div>
    <div class="user__description">
      <p>- Толстов Владислав Денисович</p>
      <p>- 19 лет</p>
      <p>- Опыт работы: 1,5 года</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.user {
  &__title {
    font-size: calc(2.5vw + 3px);
    text-align: start;
  }
  &__description {
    max-width: 500px;
    text-align: start;
    font-size: 21px;
    font-family: ActayRegular;
  }
}
</style>
