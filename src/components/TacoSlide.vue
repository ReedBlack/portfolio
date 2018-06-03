 <template>
    <figure>
                
        <img id="spinner" src="/taco.png">
        <figcaption class="description" id="taco-text">¡taco taco!</figcaption>

    </figure>
 </template>

 <style>
#spinner {
  -webkit-filter: drop-shadow(5px 5px 4px #222);
  filter: drop-shadow(5px 5px 4px #222);
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
  transform: rotate(5deg);
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
</style>