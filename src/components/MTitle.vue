<template>
  <div class="title">
    <a href="mailto:black.reed.c@gmail.com?subject=from reedblack.io">
      <h3 class="contact">contact</h3>
    </a>
   
    <h1 class="raise">Reed Black</h1>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 800px) {
  h1 {
    font-size: 17.9vw !important;
    margin-top: 28px !important;
  }
  h3 {
    font-size: 3vh;
  }
}

a {
  width: 20%;
}

h3 {
  font-family: "Pacifico", cursive;
  width: 145px;
  margin-top: -27px;
  margin-left: 18px;
  font-size: 4vh;
  color: white;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px 1px 0px #14568F);
  filter: drop-shadow(1px 1px 0px #14568F);
}

h1 {
  font-family: "Pacifico", cursive;
  margin-top: 52px;
  font-weight: bold;
  font-size: 11.9vh;
  letter-spacing: 0.04vw;
  text-align: center;
  position: absolute;
  align-self: center;
  transition: all 0.1s ease-in-out 0s;
  color: white;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(3px 4px 1px #14568F);
  filter: drop-shadow(3px 4px 1px #14568F);
}

.title {
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  width: 100%;
  height: 45%;
}
</style>