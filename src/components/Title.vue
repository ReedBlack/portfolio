<template>
  <div class="title">
    <a href="mailto:black.reed.c@gmail.com?subject=from reedblack.io">
      <h3 class="contact">contact</h3>
    </a>
    <h1 class="raise">Reed blacK</h1>
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
  -webkit-filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
}

h3 {
  font-family: "Bowlby One SC", cursive;
  width: 195px;
  margin-top: -27px;
  margin-left: 18px;
  font-size: 4vh;
  background: url("https://media.freestocktextures.com/cache/3c/c7/3cc78f214da259b2893d8fbf508a3fef.jpg");
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
}
h1 {
  font-family: "Bowlby One SC", cursive;
  margin-top: 52px;
  font-weight: bold;
  font-size: 13.9vh;
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
