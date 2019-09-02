<template>
  <div class="title">
    <a href="mailto:black.reed.c@gmail.com?subject=from reedblack.io">
      <h3 class="contact">contact</h3>
    </a>
    <h1 class="raise">projects</h1>
  </div>
</template>

<script>
export default {
  name: "Title"
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
  -webkit-filter: drop-shadow(0px -1px 1px orange);
  filter: drop-shadow(0px -1px 1px orange);
}

h3 {
  font-family: "Bowlby One SC", cursive;
  width: 175px;
  margin-top: -27px;
  margin-left: 18px;
  font-size: 3vh;
  background: url("/lavabackground.jpg");
  background-repeat: repeat-x;
  background-size: 120%;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px -1px 0px orangered);
  filter: drop-shadow(1px -1px 0px orangered);
}
h1 {
  font-family: "Bowlby One SC", cursive;
  margin-top: 52px;
  font-weight: bold;
  font-size: 11.9vh;
  letter-spacing: 0.04vw;
  text-align: center;
  position: absolute;
  align-self: center;
  transition: all 0.1s ease-in-out 0s;
  background: url("/lavabackground.jpg");
  background-size: 75%;
  background-position: top;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px -1px 1px orangered);
  filter: drop-shadow(1px -1px 1px orangered);
}

.title {
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  width: 100%;
  height: 45%;
}

a:hover {
  text-decoration: none;
}
</style>
