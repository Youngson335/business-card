<template>
  <div class="app__loading content" ref="refAPP">
    <div class="load--block" v-if="showLoader" ref="refLoader">
      <div class="loader"></div>
    </div>
    <router-view @getLoaderState="setLoaderState" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoader: true,
    };
  },
  methods: {
    setLoaderState(val) {
      const loader = this.$refs.refLoader;
      const app = this.$refs.refAPP;
      console.log("отработал");
      if (val === false) {
        loader.classList.add("hidden__loader");
        setTimeout(() => {
          this.showLoader = false;
          app.classList.remove("app__loading");
        }, 1500);
      }
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: ActayRegular;
  src: url(./assets/fonts/actay/Actay-Regular.otf);
}
@font-face {
  font-family: ActayBold;
  src: url(./assets/fonts/actay/ActayWide-Bold.otf);
}
@font-face {
  font-family: ActayThin;
  src: url(./assets/fonts/actay/ActayCondensed-Thin.otf);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: ActayBold;
  color: white;
  background: rgba(0, 0, 0, 0.7490196078);
}

body {
  background-image: url(./assets/background2.png);
  background-repeat: repeat;
  background-size: cover;
  -o-object-fit: cover;
  background-position: center;
  width: 100vw;
  overflow-x: hidden;
}
html {
  background-color: #060606;
}
</style>

<style scoped>
.load--block {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgb(24, 25, 25);
  z-index: 100;
}

.loader {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e6e6e6;
  box-shadow: 0 0 0 0 #0004;
  animation: l2 1.5s infinite linear;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(178, 178, 178, 0.267);
  animation: inherit;
  animation-delay: -0.5s;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l2 {
  100% {
    box-shadow: 0 0 0 40px #0000;
  }
}
.hidden__loader {
  transition: all 1s;
  opacity: 0;
}
.app__loading {
  max-height: 100vh;
  overflow: hidden;
}
</style>
