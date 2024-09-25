<template>
  <div class="user__info">
    <div class="user__title">
      <h2 class="user__title--h2">Frontend developer</h2>
    </div>
    <div class="user__description">
      <p>- Толстов Владислав Денисович</p>
      <p>- 19 лет</p>
      <p>- Опыт работы: 1,5 года</p>
      <div class="description__copy">
        <p>- telegram: <strong>@young_son335</strong></p>
        <img :src="copyTelegram" alt="" @click="copyText(1, 'young_son335')" />
      </div>
      <p>+ 7 (914)-576-69-73</p>
      <div class="description__copy">
        <p>- почта: <strong>tolstovvlad335@gmail.com</strong></p>
        <img
          :src="copyMail"
          alt=""
          @click="copyText(2, 'tolstovvlad335@gmail.com')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import doneCopy from "../assets/copy.svg";
import copy from "../assets/done-copy.svg";
export default {
  data() {
    return {
      telegram: 0,
      mail: 0,
    };
  },
  computed: {
    copyTelegram() {
      if (this.telegram === 0) {
        return copy;
      } else {
        return doneCopy;
      }
    },
    copyMail() {
      if (this.mail === 0) {
        return copy;
      } else {
        return doneCopy;
      }
    },
  },
  methods: {
    copyText(id, text) {
      if (id === 1) {
        this.telegram = id;
        navigator.clipboard.writeText(text);
      } else if (id === 2) {
        this.mail = id;
        navigator.clipboard.writeText(text);
      }
    },
  },
};
</script>
<style lang="scss">
.user {
  &__title {
    font-size: calc(2.5vw + 3px);
    text-align: start;
  }
  &__description {
    max-width: 500px;
    text-align: start;
    font-size: 21px;
    font-family: ActayRegular;
    & p {
      margin-bottom: 2px;
    }
  }
}
.description__copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
