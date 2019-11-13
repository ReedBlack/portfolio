<template>
    <div>
      <h1 class="tacotext">About ¡taco taco!</h1>
      <p>¡taco taco! is my current passion project and my first major post-tech-education project. It aims to evolve the ways we conceive recipes by harnessing the possibilities of randomized data.</p>
      <p>It's fun, funny, useful, and it aims to improve your life by the tiniest margins...by improving the quality of your taco night.</p>
        <a href="https://taco-taco-stage.firebaseapp.com/#/" target="blank"><b-button >Live Stage/QA Site</b-button></a>
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
