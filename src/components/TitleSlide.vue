<template>
  <div>
    <router-link v-if="linkTo" :to="linkTo">
      <figure>
          <img :id="imageType" :class="properties" :src="image" >
          <figcaption id="bottom" :class="theme">{{title}}</figcaption>
      </figure>
    </router-link >
    <router-link v-if="isEarth" to="/">
      <figure>
          <Earth :color="color" />
          <figcaption id="bottom" :class="theme">home</figcaption>
      </figure>
    </router-link >
      <router-link v-if="isAir" to="/Music">
          <figure>
              <Air :color="color" />
              <figcaption id="bottom" :class="theme">music</figcaption>
          </figure>
      </router-link >
      <router-link v-if="isFire" to="/Projects">
          <figure>
              <Fire :color="color" />
              <figcaption id="bottom" :class="theme">projects</figcaption>
          </figure>
      </router-link >
      <router-link v-if="isWater" to="/ArtConstruction">
          <figure>
              <Water :color="color" />
              <figcaption id="bottom" :class="theme">art</figcaption>
          </figure>
      </router-link >
    <figure v-if="!linkTo">
        <img :id="imageType" :class="properties" :src="image" >
        <figcaption id="bottom" :class="theme">{{title}}</figcaption>
    </figure>
  </div>
</template>

<script>
import Earth from '@/svg/Earth';
import Air from '@/svg/Air';
import Fire from '@/svg/Fire';
import Water from '@/svg/Water';

export default {
    name: "Slide",
    props: ["linkTo", "image", "title", "scene", "imageType", "properties", "theme", "isEarth", "isAir", "isFire", "isWater", "color"],
    components: {
      Earth,
      Air,
      Fire,
      Water
    }
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

#junglephoto {
  border: none;
  background: none;
  border-radius: 50%;
}

#lavaphoto {
  border: none;
  background: none;
  border-radius: 50%;
}

#bottom {
  bottom: 0;
}

.jungle {
  background: url("/leaf-texture.jpg");
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
  background-color: white;
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
}

.water {
    font-family: "Permanent Marker", cursive;
    background: url("/water-texture.jpg");
    background-repeat: repeat-x;
    background-size: cover;
    width: 100%;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
}
</style>
