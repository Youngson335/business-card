import { createStore } from "vuex";

// Импортируем изображения
import img1_1 from "../assets/portfolio/work1/1.png";
import img1_2 from "../assets/portfolio/work1/2.png";
import img1_3 from "../assets/portfolio/work1/3.png";
import img1_4 from "../assets/portfolio/work1/4.png";
import img1_5 from "../assets/portfolio/work1/5.png";
import img1_6 from "../assets/portfolio/work1/6.png";
import img1_7 from "../assets/portfolio/work1/7.png";
import img1_8 from "../assets/portfolio/work1/8.png";
import img1_9 from "../assets/portfolio/work1/9.png";

import img2_1 from "../assets/portfolio/work2/test1/1.png";
import img2_2 from "../assets/portfolio/work2/test1/2.png";
import img2_3 from "../assets/portfolio/work2/test1/3.png";
import img2_4 from "../assets/portfolio/work2/test1/4.png";
import img2_5 from "../assets/portfolio/work2/test1/5.png";

import img3_1 from "../assets/portfolio/work2/test2/1.png";
import img3_2 from "../assets/portfolio/work2/test2/2.png";
import img3_3 from "../assets/portfolio/work2/test2/3.png";
import img3_4 from "../assets/portfolio/work2/test2/4.png";
import img3_5 from "../assets/portfolio/work2/test2/5.png";

import img4_1 from "../assets/portfolio/work2/test3/1.png";
import img4_2 from "../assets/portfolio/work2/test3/2.png";
import img4_3 from "../assets/portfolio/work2/test3/3.png";
import img4_4 from "../assets/portfolio/work2/test3/4.png";
import img4_5 from "../assets/portfolio/work2/test3/5.png";

import img5_1 from "../assets/portfolio/work3/1.png";
import img5_2 from "../assets/portfolio/work3/2.png";

import img6_1 from "../assets/portfolio/work4/1.png";
import img6_2 from "../assets/portfolio/work4/2.png";
import img6_3 from "../assets/portfolio/work4/3.png";
import img6_4 from "../assets/portfolio/work4/4.png";

import img7_1 from "../assets/portfolio/work5/1.png";
import img7_2 from "../assets/portfolio/work5/2.png";
import img7_3 from "../assets/portfolio/work5/3.png";
import img7_4 from "../assets/portfolio/work5/4.png";
import img7_5 from "../assets/portfolio/work5/5.png";
import img7_6 from "../assets/portfolio/work5/6.png";
import img7_7 from "../assets/portfolio/work5/7.png";

import img8_1 from "../assets/portfolio/work6/1.png";
import img8_2 from "../assets/portfolio/work6/2.png";
import img8_3 from "../assets/portfolio/work6/3.png";
import img8_4 from "../assets/portfolio/work6/4.png";
import img8_5 from "../assets/portfolio/work6/5.png";
import img8_6 from "../assets/portfolio/work6/6.png";
import img8_7 from "../assets/portfolio/work6/7.png";

import img9_1 from "../assets/portfolio/work7/1.png";
import img9_2 from "../assets/portfolio/work7/2.png";
import img9_3 from "../assets/portfolio/work7/3.png";
import img9_4 from "../assets/portfolio/work7/4.png";
import img9_5 from "../assets/portfolio/work7/5.png";

import img10_1 from "../assets/portfolio/work8/1.png";
import img10_2 from "../assets/portfolio/work8/2.png";
import img10_3 from "../assets/portfolio/work8/3.png";

export default createStore({
  state: {
    portfolio: [
      {
        id: 1,
        name: "work1",
        title: "Сервис доставки",
        description: "Разработка сервиса доставки для telegram webApp",
        link: null,
        gitHub: null,
        images: [
          img1_1,
          img1_2,
          img1_3,
          img1_4,
          img1_5,
          img1_6,
          img1_7,
          img1_8,
          img1_9,
        ],
      },
      {
        id: 2,
        name: "work2",
        title: "Тестовое задание №1",
        description: "Разработка тестового задания для it компании",
        link: "https://test-pricing-plans.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-pricing-plans",
        images: [img2_1, img2_2, img2_3, img2_4, img2_5],
      },
      {
        id: 3,
        name: "work3",
        title: "Тестовое задание №2",
        description: "Разработка тестового задания для it компании",
        link: "https://test-app-book-build.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-app-books",
        images: [img3_1, img3_2, img3_3, img3_4, img3_5],
      },
      {
        id: 4,
        name: "work4",
        title: "Тестовое задание №3",
        description: "Разработка тестового задания для it компании",
        link: "https://alef-build.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-alef",
        images: [img4_1, img4_2, img4_3, img4_4, img4_5],
      },
      {
        id: 5,
        name: "work5",
        title: "Разработка анимации",
        description: "Разработка анимации для главной страницы",
        link: "https://delivery-murom-build.vercel.app/",
        gitHub: null,
        images: [img5_1, img5_2],
      },
      {
        id: 6,
        name: "work6",
        title: "Ознакомительный лендинг",
        description: "Разработка ознакомительного лендинга",
        link: "https://meme-coin-build.vercel.app/",
        gitHub: null,
        images: [img6_1, img6_2, img6_3, img6_4],
      },
      {
        id: 7,
        name: "work7",
        title: "telegram webApp игра",
        description: "Разработка telegram webApp игры",
        link: null,
        gitHub: null,
        images: [img7_1, img7_2, img7_3, img7_4, img7_5, img7_6, img7_7],
      },
      {
        id: 8,
        name: "work8",
        title: "Интернет магазин",
        description: "Разработка интернет магазина",
        link: null,
        gitHub: null,
        images: [img8_1, img8_2, img8_3, img8_4, img8_5, img8_6, img8_7],
      },
      {
        id: 9,
        name: "work9",
        title: "Интернет магазин",
        description: "Разработка интернет магазина",
        link: null,
        gitHub: null,
        images: [img9_1, img9_2, img9_3, img9_4, img9_5],
      },
      {
        id: 10,
        name: "work10",
        title: "Интернет магазин",
        description: "Командная разработка интернет магазина",
        link: null,
        gitHub: null,
        images: [img10_1, img10_2, img10_3],
      },
    ],
  },
  getters: {
    getPortfolio(state) {
      return state.portfolio;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
