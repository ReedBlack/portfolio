<template>
    <figure>           
        <img id="poster" src="/livewire.png">
        <figcaption class="description" id="live-text">livewire</figcaption>
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

#poster {
  border: none;
  background: none;
  border-radius: 50%;
  -webkit-filter: drop-shadow(5px 5px 4px orangered);
  filter: drop-shadow(5px 5px 4px orangered);
}
</style>