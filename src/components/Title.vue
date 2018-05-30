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
.raise:hover {
  margin-top: 32px;
  transition: all 0.2s ease-in-out 0s;
  -webkit-filter: drop-shadow(1px 1px 1px #222);
  filter: drop-shadow(1px 1px 1px #222);
}

h1 {
  color: #dc7971;
  font-family: "Gothic A1", sans-serif;
  font-weight: bold;
  font-size: 5.9vw;
  letter-spacing: 0.04vw;
  text-align: center;
  display: block;
  position: absolute;
  align-self: center;
  z-index: 0;
  text-shadow: 2px 1px 1px #51897f;
  transition: all 0.5s ease-in-out 0s;
  border: none;
  background: none;
}

.fern-cover {
  max-height: 75%;
  max-width: 95%;
  position: absolute;
  margin-left: 20%;
  z-index: 1;
  margin-top: -11.5%;
  -webkit-filter: drop-shadow(7px 7px 6px #222);
  filter: drop-shadow(7px 7px 6px #222);
  transition: all 3.5s ease-in-out 12s;
}

.two {
  -ms-transform: rotate(50deg); /* IE 9 */
  -webkit-transform: rotate(50deg); /* Safari */
  transform: rotate(50deg);
  margin-left: 54%;
}

.two-show:hover {
  margin-top: 4.5%;
  max-height: 35%;
  max-width: 35%;
  margin-left: 56%;
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
  transition: all 0.222s ease-in-out 0s;
  -webkit-filter: drop-shadow(3px 3px 2px #222);
  filter: drop-shadow(3px 3px 2px #222);
}
.one {
  margin-left: 24%;

  -ms-transform: rotate(-50deg); /* IE 9 */
  -webkit-transform: rotate(-50deg); /* Safari */
  transform: rotate(-50deg);
}

.one-show:hover {
  margin-top: 5%;
  margin-left: 26%;
  max-height: 35%;
  max-width: 35%;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Safari */
  transform: rotate(-90deg);
  transition: all 0.1s ease-in-out 0s;
  -webkit-filter: drop-shadow(3px 3px 2px #222);
  filter: drop-shadow(3px 3px 2px #222);
}

.three {
  margin-left: 35%;
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
}

.three-show:hover {
  margin-top: 1%;
  max-height: 25%;
  max-width: 15%;
  margin-left: 19%;
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
