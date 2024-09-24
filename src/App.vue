<template>
  <router-view />
</template>

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
}
html {
  background-color: #060606;
}
</style>
