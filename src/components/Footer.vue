<template>
   
    <nav class="site-nav--social">
        <a href="http://www.github.com/ReedBlack" target="blank"><i class="fab fa-github"></i></a>
        <br>
        <a href="https://www.linkedin.com/in/reed-black" target="blank"><i class="fab fa-linkedin"></i></a>
        <br>
        <a href="https://www.soundcloud.com/ReedBlack" target="blank"><i class="fab fa-soundcloud"></i></a>
    </nav>

</template>

<style>
.site-nav--social {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 200;
  line-height: 12px;
  position: fixed;
  bottom: 1;
  right: 0;
  margin-right: 12px;
  text-decoration-line: none;
  font-size: 7vh;
}

@media only screen and (max-width: 600px) {
  .site-nav--social {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 0px;
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
  background: url("https://media.freestocktextures.com/cache/3c/c7/3cc78f214da259b2893d8fbf508a3fef.jpg");
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
}
</style>