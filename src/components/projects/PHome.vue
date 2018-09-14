<template>
  <router-link to="/">
    <figure>           
        <h1 id="dev-link" src="/ableton 2.png">~/</h1>
        <figcaption id="homelink" class="description">home</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
#dev-link {
  -webkit-filter: drop-shadow(5px 5px 4px #222);
  filter: drop-shadow(5px 5px 4px #222);
  font-size: 160px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-left: -18px;
}

#homelink {
  bottom: 0;
  -webkit-font-smoothing: antialiased;
  margin-left: -12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 32px;
  font-weight: bolder;
  min-width: 100%;
  z-index: 5;
  -webkit-filter: drop-shadow(silver);
  filter: drop-shadow(silver);
  transform: rotate(5deg);
}
</style>