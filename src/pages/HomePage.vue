<template>
  <div class="home container">
    <header class="home__header">
      <User />
    </header>
    <main>
      <UserExperience />
      <UserLInk />
      <CarouselReviews />
      <UserPortfolio />
      <UserGoal />
    </main>

    <Logo />
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import User from "@/components/User.vue";
import UserExperience from "@/components/UserExperience.vue";
import UserLInk from "@/components/UserLInk.vue";
import CarouselReviews from "@/components/CarouselReviews.vue";
import UserPortfolio from "@/components/UserPortfolio.vue";
import UserGoal from "@/components/UserGoal.vue";
export default {
  components: {
    Logo,
    User,
    UserExperience,
    UserLInk,
    CarouselReviews,
    UserPortfolio,
    UserGoal,
  },
};
</script>
<style lang="scss">
.home {
  position: relative;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  width: calc(100% - 30px);
}
</style>
