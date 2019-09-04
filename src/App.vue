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

.projects {
  height: 100%;
  width: 100%;
  background-image: url("/cooling-lava.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
  z-index: 1000000;
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

.page {
  /*position: fixed;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a:hover {
  border-bottom: none;
}

transition {
  animation-duration: 3000;
}
</style>
