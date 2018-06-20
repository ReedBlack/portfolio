<template>
    <div>
        <header class="about-taco">
            <h1 class="tacotext">About ¡taco taco!</h1>
            <p class="tacotext">Let's be honest here...it's not the flashiest site you've ever seen, but I took the cutest taco drawing on the interwebs and I made it spin. Don't think about the programming, just look at the taco. Look at it!!! <br> Anyhow...¡taco taco! is a light app that takes the user's "feeling" and randomly generates and combines the various building blocks of a taco recipe based on user input. If you feel like your taco night needs some inspiration, give this a whirl.</p>
            <p class="tacotext">Technologies used: VueJS, HTML5, CSS</p>
        </header>
        <img id="big-taco" src="/BigTaco.png" alt="">
         <a href="https://taco-x-taco.firebaseapp.com/" target="blank"><b-button >Live Site</b-button></a>
          <a href="https://github.com/ReedBlack/taco-taco" target="blank"><b-button >Github</b-button></a>
    </div>
</template>

<style scoped>
#big-taco {
  height: 100%;
  width: 100%;
}

.about-taco {
  background: silver;
  background-size: cover;
  border: none;
  padding: 10px;
  margin: 5px;
}
.tacotext {
  color: green;
}

p {
  -webkit-font-smoothing: antialiased;
}

h1,
h2 {
  font-family: "Bowlby One SC", cursive !important;
  text-align: center;
  text-shadow: 1px 1px 1px grey;
}
</style>