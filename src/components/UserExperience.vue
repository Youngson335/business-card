<template>
  <div class="experience">
    <div class="experience__text">
      <p>
        <strong>Стэк: </strong>
        <span
          v-for="(word, index) in words"
          :key="index"
          :class="{ active: index === activeIndex }"
        >
          {{ word }},
        </span>
      </p>
    </div>
    <div class="image-container active__img">
      <img
        ref="experienceIMG"
        @load="checkImageLoading"
        src="../assets/items/people/img5.png"
        alt="experience"
        style="display: none"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue3/Vuex",
        "Pinia",
        "NuxtJS",
        "TypeScript",
        "Docker",
        "Scss",
        "npm",
        "webpack",
        "bootstrap5",
        "vite",
        "опыт работы c API",
        "github/lub",
        "telegramWebApp",
        "БЭМ",
        "Leaflet",
        "tailwind",
      ],
      activeIndex: 0,
      imageLoading: true,
    };
  },
  methods: {
    checkImageLoading() {
      const img = this.$refs.experienceIMG;
      this.imageLoading = false;
      if (this.imageLoading === false) {
        img.style.display = "block";
        this.$emit("stopLoader", true);
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.words.length;
    }, 1500);
  },
};
</script>

<style lang="scss">
.experience {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 30px;
  padding-bottom: 0;
  &__image {
    max-width: 350px;
    position: relative;
    & img {
      width: 100%;
      position: relative;
      top: -56px;
      animation: animateIMG 3s ease-in-out infinite;
    }
    @keyframes animateIMG {
      0% {
        transform: rotate(10deg);
      }
      70% {
        transform: rotate(20deg);
      }
      100% {
        transform: rotate(10deg);
      }
    }
  }
  &__text {
    text-align: start;
    font-size: 20px;
    font-family: ActayRegular;
    line-height: 34px;
    & span {
      padding: 3px;
      transition: all 0.2s ease;
    }
  }
  .active {
    font-weight: bold;
    background-color: white;
    color: #1c1b1c;
    transition: all 0.2s ease;
  }
}

.active__img {
  max-width: 350px;
  position: relative;
  animation: showImage 0.7s ease;
  @keyframes showImage {
    0% {
      filter: blur(10px);
      transform: translate(200%, 200%);
    }
    100% {
      filter: blur(0px);
      transform: translate(0%, 0%);
    }
  }
  & img {
    width: 100%;
    position: relative;
    top: -56px;
    animation: animateIMG 3s ease-in-out infinite;
  }
}
@media (max-width: 600px) {
  .experience {
    flex-direction: column;
    align-items: center;
  }
  .experience__text {
    font-size: 17px;
    line-height: 27px;
  }
  .active__img img {
    top: -20px;
    max-width: 200px;
  }
}
</style>
