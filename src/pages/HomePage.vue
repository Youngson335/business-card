<template>
  <div class="home container">
    <header class="home__header">
      <User />
    </header>
    <main>
      <UserExperience @stopLoader="stopLoaderUserExperience" />
      <UserLink @stopLoader="stopLoaderUserLink" />
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
import UserLink from "@/components/UserLInk.vue";
import CarouselReviews from "@/components/CarouselReviews.vue";
import UserPortfolio from "@/components/UserPortfolio.vue";
import UserGoal from "@/components/UserGoal.vue";
export default {
  data() {
    return {
      imageUserExperience: false,
      imageUserLink: false,
      countLoad: 0,
    };
  },
  components: {
    Logo,
    User,
    UserExperience,
    UserLink,
    CarouselReviews,
    UserPortfolio,
    UserGoal,
  },
  inject: ["updateState"],
  computed: {},
  watch: {
    imageUserExperience() {
      if (this.imageUserExperience === true) {
        this.increment(1);
      }
    },
    imageUserLink() {
      if (this.imageUserLink === true) {
        this.increment(1);
      }
    },
    countLoad() {
      if (this.countLoad === 2) {
        this.sendStateLoader();
      }
    },
  },

  methods: {
    stopLoaderUserExperience(val) {
      this.imageUserExperience = val;
    },
    stopLoaderUserLink(val) {
      this.imageUserLink = val;
    },
    sendStateLoader() {
      this.$emit("getLoaderState", false);
    },
    increment(val) {
      this.countLoad += val;
    },
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
