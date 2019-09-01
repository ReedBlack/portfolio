<template>
   
    <nav class="site-nav--social">
        <a href="http://www.github.com/ReedBlack" target="blank"><i class="fab fa-github" :class="theme"></i></a>
        <br>
        <a href="https://www.linkedin.com/in/reed-black" target="blank"><i class="fab fa-linkedin" :class="theme"></i></a>
        <br>
        <a href="https://www.soundcloud.com/ReedBlack" target="blank"><i class="fab fa-soundcloud" :class="theme"></i></a>
    </nav>

</template>

<script>
export default {
  name: "Footer",
  props: ["theme"]
}
</script>

<style>
.site-nav--social {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 200;
  line-height: 12px;
  position: fixed;
  bottom: 1;
  right: 0;
  margin-right: 12px;
  text-decoration-line: none;
  font-size: 7.5vh;
}

@media only screen and (max-width: 600px) {
  .site-nav--social {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  a {
    padding: 2.5%;
  }
}
a {
  text-decoration: none;
}

.fab {
  text-decoration: none;
  padding: 2%;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.jungle {
  background: url("https://cdn.pixabay.com/photo/2016/11/14/22/52/james-1824888_960_720.jpg");
  -webkit-filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
  text-decoration: none;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.sky {
  background: url("https://www.pngkey.com/png/detail/32-323818_smoke-png-image-free-download-picture-smokes-smoke.png");
  -webkit-filter: drop-shadow(0px -1px 2px silver);
  filter: drop-shadow(0px -1px 2px silver);
  text-decoration: none;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.lava {
  text-decoration: none;
  background: url("/lavabackground.jpg");
  background-repeat: repeat-x;
  background-size: auto;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px 2px 0px orangered);
  filter: drop-shadow(1px 2px 0px orangered);
}
</style>