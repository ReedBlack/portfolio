<template>
    <div>
        <header class="about-taco">
          <h1 class="tacotext">About ¡taco taco!</h1>
          <p class="tacotext">Let's be honest here- it's not the flashiest site you've ever seen, but I took the cutest taco drawing on the interwebs and I made it spin. <br><br>¡taco taco!, arguably the greatest taco generation app ever concieved by an intelligent being anywhere in the multiverse, ever, is a light app that takes the user's "feeling" and randomly generates and combines the various building blocks of a taco recipe based on user input. At the time of creation, I may have bitten off more than I could chew, as the taco-matching algorithm I was seeking to create proved to be quite the challenge. I'm glad I did though, as my taco nights haven't been the same since (and I suppose I grew as a developer in the process, too). If you feel like your taco night needs some inspiration, give it a whirl!</p>
          <h2 class="tacotext">tech used</h2>
          <div class="technologies">
            <img class="tech-icon" src="/icons/vue.png" alt="VueJS">
            <img class="tech-icon" src="/icons/HTML5.png" alt="html 5">
            <img class="tech-icon" src="/icons/css3.png" alt="CSS 3">
            <img class="tech-icon" src="/icons/cy.png" alt="Cypress">    
          </div>
        </header>
        <div class="container">
          <img id="big-taco" src="/taco-taco.gif" alt="">
        </div>
        <a href="https://taco-x-taco.firebaseapp.com/" target="blank"><b-button >Live Site</b-button></a>
        <a href="https://github.com/ReedBlack/taco-taco" target="blank"><b-button >Github</b-button></a>
    </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.technologies {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tech-icon {
  height: 10%;
  width: 10%;
}

#big-taco {
  height: auto;
  width: auto;
}

.about-taco {
  background-size: cover;
  border: none;
  padding: 10px;
  margin: 5px;
}
.tacotext {
  color: #fcff73;
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

a {
  margin: 5px;
}
</style>