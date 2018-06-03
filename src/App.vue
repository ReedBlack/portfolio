<template>
  <div id="app">
    <div id="dirtlayer">
      <router-view/>
      <Footer class="footer" />
    </div>
  </div>
</template>


<script>
import Footer from "@/components/Footer";

export default {
  components: {
    Footer
  }
};
</script>

<style>
.home {
  height: 100%;
}
#dirtlayer {
  height: 100%;
  background-image: url("/dirt.png");

  background-repeat: no-repeat;
  margin-left: 0;
  display: flex;
  flex-direction: column;
}

#app {
  height: 100%;
  width: 100%;

  background-image: url("/wood-background.jpg");
  position: fixed;

  background-color: #ffffe8;
  background-size: cover;
}
.footer {
  align-self: flex-end;
  bottom: 0;
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
