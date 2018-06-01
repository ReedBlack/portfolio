<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.home {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
html {
  background-image: url("/wood-background.jpg");
  background-color: #ffffe8;
  background-size: cover;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
