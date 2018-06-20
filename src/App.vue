<template>
  <div id="app">
   
      <router-view/>
      
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  height: 100%;
}

@media only screen and (max-width: 600px) {
  #dirtlayer {
    background: none;
  }
}

.home {
  height: 100%;
  width: 100%;

  background-image: url("/wood-background.jpg");
  position: fixed;
  background-size: cover;
}
.music {
  height: 100%;
  width: 100%;

  background-image: url("/vaportropBG.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
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
</style>
