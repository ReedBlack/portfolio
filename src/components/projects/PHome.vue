<template>
  <router-link to="/">
    <figure>           
        <img id="dev-link" src="/tilde.png" />
        <figcaption id="homelink" class="description">home</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
#dev-link {
  -webkit-filter: drop-shadow(5px 5px 4px orangered);
  filter: drop-shadow(5px 5px 4px orangered);
  font-size: 250px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-left: -12px;
}

#homelink {
  bottom: 0;
  -webkit-font-smoothing: antialiased;
  margin-left: -12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 32px;
  font-weight: 900;
  min-width: 100%;
  z-index: 5;
  font-weight: 900;
  background: url("/lavabackground.jpg");
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-filter: drop-shadow(orangered);
  filter: drop-shadow(orangered);
  transform: rotate(5deg);
}
</style>