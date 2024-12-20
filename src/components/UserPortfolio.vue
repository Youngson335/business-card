<template>
  <div class="select__portfolio">
    <div class="select__title">
      <h3>Выбрать работу</h3>
    </div>
    <div class="select__items">
      <button
        class="select__items--btn"
        v-for="item of checkUserPortfolio"
        :key="item.id"
        @click="selectPortfolio(item.id)"
        :class="{ active__item: item.id === activePortfolio }"
      >
        {{ item.title }}
      </button>
    </div>
  </div>
  <div class="select__description">
    <h4>
      Описание:
      <p>{{ checkActivePortfolio.description }}</p>
    </h4>
    <p v-if="checkActivePortfolio.link !== null">
      ccылка на проект:
      <a :href="checkActivePortfolio.link" target="_blank">клик</a>
    </p>
    <p v-if="checkActivePortfolio.link === null">
      Ссылка на проект <span>не доступна</span>
    </p>
    <p v-if="checkActivePortfolio.gitHub !== null">
      ccылка на gitHub:
      <a :href="checkActivePortfolio.link" target="_blank">клик</a>
    </p>
    <p v-if="checkActivePortfolio.gitHub === null">
      ccылка на gitHub <span>не доступна</span>
    </p>
  </div>

  <div class="clue">
    <div class="clue__text">
      <p>смотреть</p>
    </div>
    <div class="clue__images">
      <img src="../assets/arrow-icon.svg" class="clue__images-one" alt="" />
      <img src="../assets/arrow-icon.svg" class="clue__images-two" alt="" />
      <img src="../assets/arrow-icon.svg" class="clue__images-three" alt="" />
    </div>
  </div>

  <div class="portfolio">
    <div class="portfolio__image">
      <img src="../assets/items/people/img8.png" alt="" />
    </div>
    <div class="carousel__block">
      <div class="portfolio__carousel" ref="refScroll">
        <div
          class="portfolio__images"
          v-for="(slide, index) in checkActivePortfolio.images"
          :key="index"
        >
          <div class="slide__images">
            <div class="load-portfolio" v-if="loadImage === true">
              <div class="loader"></div>
            </div>
            <img
              :src="slide"
              :class="{ start__scroll: !isScrolling }"
              alt=""
              @load="checkImageLoading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { mapGetters } from "vuex";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      activePortfolio: 1,
      loadImage: true,
      config: {
        slideWidth: 400,
      },
      isScrolling: true,
    };
  },
  computed: {
    ...mapGetters(["getPortfolio"]),
    checkUserPortfolio() {
      return this.getPortfolio;
    },
    checkActivePortfolio() {
      return this.getPortfolio.find((item) => item.id === this.activePortfolio);
    },
    checkActiveImages() {
      if (this.checkActivePortfolio) {
        return this.checkActivePortfolio.images;
      }
    },
  },
  methods: {
    selectPortfolio(id) {
      this.loadImage = true;
      this.activePortfolio = id;
      this.checkActivePortfolio;
      // Сброс скролла
      this.$nextTick(() => {
        this.$refs.refScroll.scrollLeft = 0;
      });
    },
    checkImageLoading() {
      this.loadImage = false;
    },
  },
});
</script>

<style lang="scss">
.portfolio {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  margin-bottom: 100px;
  backdrop-filter: contrast(0.5);
  &__image {
    max-width: 350px;
    & img {
      width: 100%;
    }
  }
  &__images {
    position: relative;
  }
  & .carousel__block {
    align-items: center;
    margin-bottom: 0;
  }
  &__carousel {
    width: 100%;
    overflow-x: scroll;
    overflow-y: clip;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 40px;
  }
}
.slide__images {
  position: relative;
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    object-fit: cover;
    border-radius: 25px;
    padding: 5px;
    max-width: 600px;
    max-width: 450px;
    border: 1px solid white;
    margin: 0 20px;
    box-shadow: 0px 0px 10px #ffffff59;
  }
}
.select {
  &__description {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: start;
    max-width: 700px;
    font-size: 19px;
    margin-bottom: 20px;
    & h4 {
      & p {
        background: #efefef;
        color: black;
        padding: 3px;
      }
    }
    & span {
      color: #bf1616;
      background: #efefef;
      padding: 3px;
    }
    & a {
      color: #bf1616;
      background: #efefef;
      padding: 3px;
      text-decoration: none;
    }
    & p {
      margin-bottom: 7px;
    }
  }

  &__portfolio {
    margin-bottom: 30px;
  }
  &__title {
    text-align: center;
    font-size: 30px;
  }
  &__items {
    &--btn {
      background: none;
      border: none;
      color: white;
      font-family: ActayRegular;
      padding: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        color: rgb(167, 167, 167);
        transition: all 0.2s ease;
      }
    }
  }
}
.active__item {
  background-color: #efefef;
  color: black;
  border-radius: 25px;
}

.jump__active {
  & img {
    animation: jumpImage 0.5s ease;
  }
  @keyframes jumpImage {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
@media (max-width: 600px) {
  .select {
    &__title {
      margin-bottom: 20px;
      font-size: 25px;
    }
    &__items--btn {
      padding: 5px;
      // &:hover {
      //   color: black;
      // }
    }
    &__description {
      font-size: 16px;
    }
  }
  .portfolio {
    flex-direction: column;
    position: relative;
    margin-bottom: 0px;
    &__image {
      max-width: 200px;
      order: 2;
      position: absolute;
      bottom: 31px;
      z-index: 4;
      left: -33px;
    }
  }
  .portfolio .carousel__block {
    align-items: start;
  }
}
@media (max-width: 420px) {
  .portfolio {
    &__image {
      bottom: 80px;
    }
  }
}
@media (max-width: 900px) {
  .portfolio {
    &__image {
      max-width: 40%;
    }
  }
}
@media (max-width: 800px) {
  .slide__images img {
    max-width: 400px;
  }
}
@media (max-width: 720px) {
  .slide__images img {
    max-width: 350px;
  }
}
@media (max-width: 635px) {
  .slide__images img {
    max-width: 300px;
  }
}
</style>
<style scoped>
.load-portfolio {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  border-radius: 20px;
  height: 97%;
}
.loader {
  color: #e4e4e4;
  width: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: l21 0.5s infinite alternate linear;
}

@keyframes l21 {
  50% {
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
  }
  100% {
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
  }
}
.clue {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20%;
  margin-bottom: 10px;
  position: relative;
}
.clue__images {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.clue__images img {
  display: block;
  width: 10px;
  position: absolute;
}
.clue__text {
  margin-right: 20px;
  font-size: 20px;
}
.clue__text::after {
  content: "";
  display: block;
  height: 1px;
  width: 0px;
  background: white;
  color: white;
  transition: all 0.5s ease;
  animation: afterWidth 4s ease infinite;
}
@keyframes afterWidth {
  0% {
    opacity: 0;
    width: 0px;
  }
  50% {
    opacity: 1;
    width: 108px;
  }
  100% {
    opacity: 0;
  }
}
.clue__images-one {
  left: 0px;
}
.clue__images-two {
  left: 0px;
  animation: arrowsTwo 4s ease infinite;
}
.clue__images-three {
  animation: arrowsThree 4s ease infinite;
}

@keyframes arrowsTwo {
  0% {
    left: 0px;
  }
  50% {
    left: 15px;
  }
  100% {
    left: 0px;
  }
}
@keyframes arrowsThree {
  0% {
    left: 0px;
  }
  50% {
    left: 30px;
  }
  100% {
    left: 0px;
  }
}
</style>
