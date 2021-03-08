<template>
    <div>
      <h1 class="tacotext">About taconinja</h1>
      <p>taconinja is my current passion project and my first major post-tech-education independent project. Think of it as a new concept for a recipe book.</p>
      <p>It packs the content quantity of a comprehensive recipe book on tacos. First, it breaks the concept of the 'taco recipe' down into its fundamental components.
          Then, using its custom algorithms, it filters and compounds and organizes these recipe components by ingredient content, dietary restrictions, user preferences, and signature flavor profiles from 10 different global cuisine varieties.
          Finally, it randomizes these components into a single tangible taco recipe that can then be converted to a pdf recipe document, or shared on social media.</p>

      <p>It's fun, funny, useful, and it aims to improve your life by the tiniest margins...by improving the quality of your taco night.</p>
        <p>Check back soon. Tons of new recipes will be added, the algorithm will be tightened, and the experience will be streamlined. Anticipating launch in late Spring of 2021 at <b>taco.ninja</b></p>
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
