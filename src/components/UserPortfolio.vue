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
  <div class="portfolio">
    <div class="portfolio__image">
      <img src="../assets/items/people/img8.png" alt="" />
    </div>
    <div class="carousel__block">
      <div class="carousel">
        <Carousel>
          <Slide
            v-for="slide in checkActivePortfolio.images"
            :key="slide"
            class="portfolio__images"
          >
            <div class="slide__images">
              <div class="load-portfolio" v-if="loadImage === true">
                <div class="loader"></div>
              </div>
              <img :src="slide" alt="" @load="checkImageLoading" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
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
  name: "Basic",
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
  },
  methods: {
    selectPortfolio(id) {
      this.loadImage = true;
      this.activePortfolio = id;
      this.checkActivePortfolio;
      console.log(id);
    },
    checkImageLoading() {
      console.log("отработал");
      this.loadImage = false;
    },
  },
  mounted() {
    console.log(this.checkUserPortfolio);
  },
});
</script>

<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  await nextTick();

  const next = document.querySelectorAll(".carousel__next")[1];
  const prev = document.querySelectorAll(".carousel__prev")[1];
  const image = document.querySelector(".portfolio__image");
  const btn = [next, prev];
  for (let item of btn) {
    item.addEventListener("click", () => {
      image.classList.add("jump__active");
      setTimeout(() => {
        image.classList.remove("jump__active");
      }, 500);
    });
  }
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
  &__image {
    max-width: 350px;
    & img {
      width: 100%;
    }
  }
  & .carousel__block {
    align-items: center;
    margin-bottom: 0;
  }
}
.slide__images {
  position: relative;
  width: 100%;
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    padding: 5px;
    max-width: 600px;
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
.carousel {
  width: 100%;
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
      &:hover {
        color: black;
      }
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
</style>
