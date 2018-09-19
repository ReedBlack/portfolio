<template>
   
    <nav class="site-nav--social">
        <a href="http://www.github.com/ReedBlack" target="blank"><i class="fab fa-github"></i></a>
        <br>
        <a href="https://www.linkedin.com/in/reed-black" target="blank"><i class="fab fa-linkedin"></i></a>
        <br>
        <a href="https://www.soundcloud.com/ReedBlack" target="blank"><i class="fab fa-soundcloud"></i></a>
    </nav>

</template>

<style scoped>
.site-nav--social {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 200;
  line-height: 12px;
  position: fixed;
  right: 0;
  margin-right: 12px;
  text-decoration-line: none;
  font-size: 7.5vh;
}

@media only screen and (max-width: 600px) {
  .site-nav--social {
    display: flex;
    flex-direction: row;
  }
  a {
    padding: 2.5%;
  }
}
a {
  text-decoration: none;
}

.fab {
  text-decoration: none;
  padding: 2%;
  background: url("/lavabackground.jpg");
  background-repeat: repeat-x;
  background-size: auto;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px 2px 0px orangered);
  filter: drop-shadow(1px 2px 0px orangered);
}
</style>