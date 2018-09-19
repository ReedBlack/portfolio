<template>
    <figure>           
        <img id="poster" src="/mixtap.png">
        <figcaption id="description" class="description">mixtap</figcaption>
    </figure>
 </template>

 <script>
export default {};
</script>
 
 <style scoped>
h2 {
  font-size: 75px;
  -webkit-filter: drop-shadow(5px 5px 4px orangered);
  filter: drop-shadow(5px 5px 4px orangered);
  font-weight: 900;
  text-align: center;
}
#description {
  bottom: 0;
  font-weight: 900;
  background: url("/lavabackground.jpg");
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
}
</style>