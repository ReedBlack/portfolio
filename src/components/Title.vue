<template>
  <div class="title">
    <a href="mailto:black.reed.c@gmail.com?subject=from reedblack.io">
      <h3 class="contact" :class="titleTheme">contact</h3>
    </a>
    <h1 class="raise" :class="titleTheme">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["titleTheme", "title"]
};

</script>

<style scoped>

@media only screen and (max-width: 800px) {
  h1 {
    font-size: 14.9vw !important;
    margin-top: 28px !important;
  }
  h3 {
    font-size: 3vh;
  }
}
.raise:hover {
  font-size: 15.7v;
  transition: all 0.2s ease-in-out 0s;
  -webkit-filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
}

h3, .jungle {
  font-family: 'Rock Salt', cursive;
  background: url("/leaf-texture.jpg");
  -webkit-filter: drop-shadow(1px 0px 1px rgb(99, 59, 25));
  filter: drop-shadow(1px 0px 1px rgb(99, 59, 25));
}

h1, .jungle {
  font-family: 'Rock Salt', cursive;
  background: url("/leaf-texture.jpg");
  -webkit-filter: drop-shadow(2px -1px 2px rgb(99, 59, 25));
  filter: drop-shadow(2px -1px 2px rgb(99, 59, 25));
}

.sky {
  font-family: "Pacifico", cursive;
  color: white;
  -webkit-filter: drop-shadow(3px 2px 1px #14568F);
  filter: drop-shadow(3px 2px 1px #14568F);
}

.water {
  font-family: "Permanent Marker", cursive;
  background: url("/water-texture.jpg");
  background-repeat: repeat-x;
  background-size: cover;
  width: 40%;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(3px 2px 1px #A4C9CB);
  filter: drop-shadow(3px 2px 1px #A4C9CB);
}

.lava {
  font-family: "Bowlby One SC", cursive;
  background: url("/lavabackground.jpg");
  -webkit-filter: drop-shadow(1px -1px 1px orangered);
  filter: drop-shadow(1px -1px 1px orangered);
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

h3 {
  width: 195px;
  margin-top: -27px;
  margin-left: 18px;
  font-size: 3vh;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

}
h1 {
  margin-top: 30px;
  font-weight: bold;
  font-size: 9.5vh;
  letter-spacing: 0.01vw;
  text-align: center;
  position: absolute;
  align-self: center;
  transition: all 0.1s ease-in-out 0s;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.title {
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  width: 100%;
}

a:hover {
  text-decoration: none;
}
</style>
