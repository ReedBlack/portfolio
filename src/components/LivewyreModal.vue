<template>
    <div>
        <header class="about-livewyre">
            <h1 class="livetext">About LiveWyre</h1>
            <p class="livetext">The product of a hackathon, I'm proud of what myself and a team of three others were able to put together in 5 hours. For my team I served as project manager and front-end lead. The requirements were to build a full-stack application with a functioning database. We began by spitballing ideas, and quickly settled on the concert poster idea, as none of us were familiar with the existance of such an app. We then moved to wire-framing, and began building the front end in VueJS, and the back end with Express, Knex, and PostgresQL.</p>
            <p class="livetext">For future implementation, I would like to beef up the back-end to allow to  any number of users, as well as full CRUD capability. In addition, I would like to create a random desktop wallpaper generator so that users can get some more practical use out of the app.</p>
        </header>
        <img id="livewyre" src="/livewyre.png" alt="">
         <a href="https://live-wyre.firebaseapp.com/#/" target="blank"><b-button >Live Site</b-button></a>
          <a href="https://github.com/ReedBlack/LiveWyre" target="blank"><b-button >Github</b-button></a>
    </div>
</template>

<style scoped>
#livewyre {
  height: 100%;
  width: 100%;
}

.livetext {
  color: purple;
}

.about-livewyre {
  background-color: silver;
  padding: 10px;
  margin: 5px;
}

p {
  font-weight: bold;
}

h1,
h2 {
  font-family: "Bowlby One SC", cursive !important;
  text-align: center;
  text-shadow: 1px 1px 1px grey;
}
</style>