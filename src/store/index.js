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

import img11_1 from "../assets/portfolio/work9/1.png";
import img11_2 from "../assets/portfolio/work9/2.png";
import img11_3 from "../assets/portfolio/work9/3.png";
import img11_4 from "../assets/portfolio/work9/4.png";
import img11_5 from "../assets/portfolio/work9/5.png";
import img11_6 from "../assets/portfolio/work9/6.png";
import img11_7 from "../assets/portfolio/work9/7.png";

import img12_1 from "../assets/portfolio/work10/1.png";
import img12_2 from "../assets/portfolio/work10/2.png";
import img12_3 from "../assets/portfolio/work10/3.png";
import img12_4 from "../assets/portfolio/work10/4.png";
import img12_5 from "../assets/portfolio/work10/5.png";
import img12_6 from "../assets/portfolio/work10/6.png";

import img13_1 from "../assets/portfolio/work11/1.png";
import img13_2 from "../assets/portfolio/work11/2.png";
import img13_3 from "../assets/portfolio/work11/3.png";
import img13_4 from "../assets/portfolio/work11/4.png";

import img14_1 from "../assets/portfolio/work12/1.png";
import img14_2 from "../assets/portfolio/work12/2.png";
import img14_3 from "../assets/portfolio/work12/3.png";
import img14_4 from "../assets/portfolio/work12/4.png";
import img14_5 from "../assets/portfolio/work12/5.png";
import img14_6 from "../assets/portfolio/work12/6.png";
import img14_7 from "../assets/portfolio/work12/7.png";
import img14_8 from "../assets/portfolio/work12/8.png";
import img14_9 from "../assets/portfolio/work12/9.png";
import img14_10 from "../assets/portfolio/work12/10.png";

import img15_1 from "../assets/portfolio/work13/1.png";
import img15_2 from "../assets/portfolio/work13/2.png";
import img15_3 from "../assets/portfolio/work13/3.png";
import img15_4 from "../assets/portfolio/work13/4.png";
import img15_5 from "../assets/portfolio/work13/5.png";

import img16_1 from "../assets/portfolio/work14/1.png";
import img16_2 from "../assets/portfolio/work14/2.png";
import img16_3 from "../assets/portfolio/work14/3.png";
import img16_4 from "../assets/portfolio/work14/4.png";
import img16_5 from "../assets/portfolio/work14/5.png";
import img16_6 from "../assets/portfolio/work14/6.png";
import img16_7 from "../assets/portfolio/work14/7.png";
import img16_8 from "../assets/portfolio/work14/8.png";
import img16_9 from "../assets/portfolio/work14/9.png";
import img16_10 from "../assets/portfolio/work14/10.png";
import img16_11 from "../assets/portfolio/work14/11.png";
import img16_12 from "../assets/portfolio/work14/12.png";
import img16_13 from "../assets/portfolio/work14/13.png";
import img16_14 from "../assets/portfolio/work14/14.png";
import img16_15 from "../assets/portfolio/work14/15.png";
import img16_16 from "../assets/portfolio/work14/16.png";

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
      {
        id: 11,
        name: "work11",
        title: "Лендинг",
        description:
          "Разработка ознакомительного лендинга для компании по разработке мобильных приложений!",
        link: "https://nmnh-front.vercel.app/",
        gitHub: "https://github.com/Youngson335/currency-converter",
        images: [img11_1, img11_2, img11_3, img11_4, img11_5, img11_6, img11_7],
      },
      {
        id: 12,
        name: "work12",
        title: "Админ-панель",
        description: "Разработка мини-админ панели для управления api",
        link: "https://tg-admin-panel.vercel.app/",
        gitHub: "https://github.com/Youngson335/tg-admin-panel",
        images: [img12_1, img12_2, img12_3, img12_4, img12_5, img12_6],
      },
      {
        id: 13,
        name: "work13",
        title: "Лендинг",
        description:
          "Разработка ознакомительного лендинга для компании на привлечение новых рабочих",
        link: null,
        gitHub: null,
        images: [img13_1, img13_2, img13_3, img13_4],
      },
      {
        id: 14,
        name: "work14",
        title: "Сервис записи в barbershops Москвы",
        description:
          "Разработка сервиса для выбора и записи в разные барбершовы Москвы! Данный сервис разрабатывался на Nuxt/TypeScript/Pinia",
        link: null,
        gitHub: null,
        images: [
          img14_1,
          img14_2,
          img14_3,
          img14_4,
          img14_5,
          img14_6,
          img14_7,
          img14_8,
          img14_9,
          img14_10,
        ],
      },
      {
        id: 15,
        name: "work15",
        title: "Разработка регистрации!",
        description:
          "Разработал на vue3 регистрацию для сервиса! На стадии заполнения формы все необходимые данные сохраняются в query параметры, что дает гаранитую их сохранения после случайного или целенаправленного их обновления!",
        link: null,
        gitHub: null,
        images: [img15_1, img15_2, img15_3, img15_4, img15_5],
      },
      {
        id: 16,
        name: "work16",
        title: "Разработка благотворительного фонда",
        description:
          "Разработал на vue3 за 2 дня по макету figma данный фонд. Без связи с бекендом, но с симуляцией локальной базы данных!",
        link: "https://russian-cross-dev.vercel.app/",
        gitHub: null,
        images: [
          img16_1,
          img16_2,
          img16_3,
          img16_4,
          img16_5,
          img16_6,
          img16_7,
          img16_8,
          img16_9,
          img16_10,
          img16_11,
          img16_12,
          img16_13,
          img16_14,
          img16_15,
          img16_16,
        ],
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
