<template>
  <div class="user__info">
    <div class="user__title">
      <h2 class="user__title--h2">Frontend developer</h2>
    </div>
    <div class="user__description">
      <p>- Толстов Владислав Денисович</p>
      <p>- 19 лет</p>
      <p>- Опыт работы: 2 года</p>
      <div class="description__copy">
        <p>- telegram: <strong>@young_son335</strong></p>
        <img
          :src="getCopyIcon('telegram')"
          alt="Copy Telegram"
          @click="copyText('telegram', 'young_son335')"
          :class="{ copied: copiedStatus.telegram }"
        />
      </div>
      <div class="phone__copy">
        <p>- телефон: + 7 (914)-576-69-73</p>
        <img
          :src="getCopyIcon('phone')"
          alt="Copy Phone"
          @click="copyText('phone', '79145766974')"
          :class="{ copied: copiedStatus.phone }"
        />
      </div>
      <div class="description__copy">
        <p>- почта: <strong>tolstovvlad335@gmail.com</strong></p>
        <img
          :src="getCopyIcon('mail')"
          alt="Copy Mail"
          @click="copyText('mail', 'tolstovvlad335@gmail.com')"
          :class="{ copied: copiedStatus.mail }"
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
      copiedStatus: {
        telegram: false,
        mail: false,
        phone: false,
      },
    };
  },
  methods: {
    async copyText(type, text) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback для старых браузеров
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }
        this.copiedStatus[type] = true;
        setTimeout(() => {
          this.copiedStatus[type] = false;
        }, 2000); // Сброс статуса через 2 секунды
      } catch (error) {
        console.error("Ошибка при копировании текста:", error);
        alert(
          "Не удалось скопировать текст. Пожалуйста, скопируйте его вручную."
        );
      }
    },
    getCopyIcon(type) {
      return this.copiedStatus[type] ? doneCopy : copy;
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
.phone__copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
