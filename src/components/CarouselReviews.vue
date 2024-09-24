<template>
  <div class="carousel__block">
    <div class="carousel">
      <Carousel>
        <Slide v-for="slide in reviews" :key="slide">
          <div class="carousel__item">
            <img
              v-if="slide.id % 2 === 0"
              class="carousel__image"
              src="../assets/items/people/img7.png"
              alt=""
            />
            <img
              src="../assets/items/people/img3.png"
              alt=""
              v-if="slide.id % 2 !== 0"
              class="carousel__image"
            />
            <div style="position: relative; z-index: 2">
              <img
                class="carousel__item--img"
                :key="slide.id"
                :src="slide.img"
                alt=""
              />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import img1 from "../assets/reviews/1.png";
import img2 from "../assets/reviews/2.png";
import img3 from "../assets/reviews/3.png";
import img4 from "../assets/reviews/4.png";
import img5 from "../assets/reviews/5.png";

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
      reviews: [
        {
          id: 1,
          img: img1,
        },
        {
          id: 2,
          img: img2,
        },
        {
          id: 3,
          img: img3,
        },
        {
          id: 4,
          img: img4,
        },
        {
          id: 5,
          img: img5,
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.carousel {
  &__block {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;
    margin-bottom: 100px;
    width: 100%;
  }
  &__pagination {
    display: none;
  }
  &__item {
    min-height: 200px;
    background-color: #433d3db8;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px;
    &--img {
      width: calc(100% - 10%);
      border-radius: 25px;
      max-height: 160px;
      object-fit: cover;
    }
  }
  &__slide {
    padding: 10px;
  }
  &__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    z-index: 3;
  }
  &__image {
    max-width: 300px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
    max-height: 100% !important;
    top: -100px;
    & img {
      width: 100% !important;
    }
  }
  &__track {
    z-index: 2;
    &::after {
      content: "";
      width: 130px;
      height: 130px;
      background-color: white;
    }
  }
  &__viewport {
    overflow: visible;
  }
}
</style>
