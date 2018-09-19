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
  color: rgba(255, 0, 255, 0.7);
  -webkit-font-smoothing: antialiased;

  -webkit-filter: drop-shadow(1px 2px 1px rgb(1, 200, 194));
  filter: drop-shadow(1px 2px 1px rgb(1, 200, 194));
}
</style>