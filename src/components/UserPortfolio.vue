<template>
  <div class="portfolio">
    <div class="portfolio__image">
      <img src="../assets/items/people/img8.png" alt="" />
    </div>
    <div class="carousel__block">
      <div class="carousel">
        <Carousel>
          <Slide v-for="slide in 10" :key="slide">
            {{ slide }}
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
    return {};
  },
});
</script>

<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  await nextTick(); // Ждем, пока компонент смонтируется

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
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
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
</style>
