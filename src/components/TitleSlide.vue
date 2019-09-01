<template>
  <div>
    <router-link v-if="linkTo" :to="linkTo">
      <figure>           
          <img :id="imageType" :class="properties" :src="image" >
          <figcaption id="bottom" :class="theme">{{title}}</figcaption>
      </figure>
    </router-link >
    <figure v-if="!linkTo">           
        <img :id="imageType" :class="properties" :src="image" >
        <figcaption id="bottom" :class="theme">{{title}}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
    name: "Slide",
    props: ["linkTo", "image", "title", "scene", "imageType", "properties", "theme"]
};
</script>

<style>
.white {
  color: white;
}

.spins {
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

img {
  box-shadow: none !important;
}

#png {
  filter: drop-shadow(3px 3px 3px black);
}

#junglephoto {
  border: none;
  background: none;
  border-radius: 50%;
  filter: drop-shadow(3px 3px 3px black);
}

#lavaphoto {
  border: none;
  background: none;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 2px orangered);
}

#bottom {
  bottom: 0;
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