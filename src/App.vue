<template>
  <div id="app">
    <transition name="router-anim"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated hinge"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

#turnt {
  max-height: 230px;
}

@media only screen and (max-width: 600px) {
#turnt {
  margin-top: -65px;
}
}

.home {
  height: 100%;
  width: 100%;
  background-image: url("/jungle.jpg");
  position: fixed;
  background-size: cover;
}

.music {
  height: 100%;
  width: 100%;
  background-image: url("/clouds.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
}

.art {
  height: 100%;
  width: 100%;
  background-image: url("/water.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
}

.construction {
  height: 100%;
  width: 100%;
  background-color: white;
  background-position: center;
  position: fixed;
  background-size: cover;
}

.projects {
  height: 100%;
  width: 100%;
  background-image: url("/cooling-lava.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
  /*z-index: 1000000;*/
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a:hover {
  border-bottom: none;
}

.carousel-3d-container{
  /*position: fixed;*/
}

transition {
  animation-duration: 3000;
}
</style>
