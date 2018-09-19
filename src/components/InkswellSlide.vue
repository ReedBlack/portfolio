<template>
  <figure>        
    <img id="fish" src="/inkswell.png">
    <figcaption class="description" id="live-text">inkswell</figcaption>
  </figure>
</template>

 <style>
#live-text {
  bottom: 0;
  font-weight: 900;
  background: url("/lavabackground.jpg");
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
}
#fish {
  margin-top: -20px;
  border: none;
  background: none;
  border-radius: 50%;
  -webkit-filter: drop-shadow(4px 4px 3px orangered);
  filter: drop-shadow(4px 4px 2px orangered);
}
</style>