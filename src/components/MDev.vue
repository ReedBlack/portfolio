<template>
  <router-link to="/">
    <figure>           
        <img id="dev-link" src="/tilde.png" />
        <figcaption id="solo" class="description">home</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
#dev-link {
  -webkit-filter: drop-shadow(5px 5px 4px rgb(1, 200, 194));
  filter: drop-shadow(5px 5px 4px rgb(1, 200, 194));
  text-align: center;
  margin-left: -18px;
}

#solo {
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
  color: rgba(1, 200, 194, 0.6);
  -webkit-filter: drop-shadow(1px 1px 1px rgb(255, 0, 255));
  filter: drop-shadow(1px 1px 1px rgb(255, 0, 255));
  transform: rotate(5deg);
}
</style>