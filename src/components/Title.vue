<template>
  <div class="title"  >
    <div class="ferns">
      <!-- <img class="fern-cover one { one-show : showReed }" src="/fern3.png" alt="">
      <img class="fern-cover two { two-show : showReed }" src="/fern3.png" alt=""> -->
      <img class="fern-cover three { three-show : showReed }" src="/fern3.png" alt="">
    </div>
    <h1 class="raise">REED BLACK</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["showCards"],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 600px) {
  .three {
    display: none;
  }

  h1 {
    font-size: 15.9vw !important;
  }
}
.raise:hover {
  font-size: 15.7v;
  transition: all 0.2s ease-in-out 0s;
  -webkit-filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
}

h1 {
  font-family: "Bowlby One SC", cursive;
  margin-top: 45px;
  font-weight: bold;
  font-size: 15.9vh;
  letter-spacing: 0.04vw;
  text-align: center;
  position: absolute;
  align-self: center;
  transition: all 0.1s ease-in-out 0s;
  background: url("https://media.freestocktextures.com/cache/3c/c7/3cc78f214da259b2893d8fbf508a3fef.jpg");
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(0px -1px 3px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 3px rgb(99, 59, 25));
  /* -webkit-text-fill-color: transparent; */
}

.fern-cover {
  max-height: 85%;
  max-width: 95%;
  position: absolute;
  margin-left: 16%;
  z-index: 1;
  margin-top: -12.5%;
  -webkit-filter: drop-shadow(7px 7px 6px #222);
  filter: drop-shadow(7px 7px 6px #222);
  transition: all 3.5s ease-in-out 300s;
}

.three {
  margin-left: 30%;
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
}

.three-show:hover {
  margin-top: -44px;
  max-height: 20%;
  max-width: 12%;
  margin-left: 44%;
  -ms-transform: rotate(0deg); /* IE 9 */
  -webkit-transform: rotate(0deg); /* Safari */
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out 0s;
  -webkit-filter: drop-shadow(3px 3px 2px #222);
  filter: drop-shadow(3px 3px 2px #222);
}
.title {
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  width: 100%;
  height: 45%;
}
</style>
