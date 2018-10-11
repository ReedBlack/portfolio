<template>
    <figure>                
        <img id="spinner" src="/taco.png">
        <figcaption class="description" id="taco-text">¡taco taco!</figcaption>
    </figure>
</template>

<style scoped>
#spinner {
  -webkit-filter: drop-shadow(4px 4px 3px orangered);
  filter: drop-shadow(4px 4px 3px orangered);
  -webkit-animation-name: spin;
  -webkit-animation-duration: 13000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 13000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 13000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  animation-name: spin;
  animation-duration: 13000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#taco-text {
  bottom: 0;
  font-weight: 900;
  background: url("/lavabackground.jpg");
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
}
</style>