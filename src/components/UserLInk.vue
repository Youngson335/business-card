<template>
  <div class="user__link">
    <div class="link__image">
      <img src="../assets/items/people/img2.png" alt="" />
    </div>
    <div class="link__items">
      <div class="link__item">
        <p>
          Мой githab:
          <a href="https://github.com/Youngson335" target="_blank"
            >https://github.com/Youngson335</a
          >
        </p>
      </div>
      <div class="link__item">
        <p>
          Мой telegram:
          <a href="https://t.me/young_son335" target="_blank"
            >https://t.me/young_son335</a
          >
        </p>
      </div>
      <div class="link__item">
        <p>
          Профиль на
          <a
            href="https://freelance.habr.com/freelancers/Vladislav335"
            target="_blank"
            >ХабрФрилансе</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.user__link {
  text-align: start;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
}
.link {
  &__image {
    max-width: 350px;
    background-color: rgb(204 204 204 / 13%);
    border-radius: 50%;
    border: 1px solid white;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 100%;
    }
  }
  &__items {
    font-size: 20px;
  }
  &__item {
    margin-bottom: 5px;
    & a {
      color: black;
      background-color: white;
      text-decoration: none;
      padding: 3px;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: white;
        background-color: rgb(27, 27, 27);
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
