<template>
    <div>
        <header class="about-livewyre">
            <h1 class="livetext">About LIVEWIRE</h1>
            <p class="livetext">A three-in-one full stack application for venue management, artist outreach, and slick event listings for the public to see the schedule at their favorite venue and gain exposure to new acts. A weeklong group project, for which I served as front-end lead.</p>
            <h2 class="livetext">tech used</h2>
             <div class="technologies">
              <img class="tech-icon" src="/icons/vue.png" alt="VueJS">
              <img class="tech-icon" src="/icons/node.png" alt="node.js">
              <img class="tech-icon" src="/icons/knex.png" alt="knex.js">
              <img class="tech-icon" src="/icons/psql.png" alt="PostgreSQL">
              <img class="tech-icon" src="/icons/express.png" alt="Express.js">
              <img class="tech-icon" src="/icons/heroku.png" alt="Heroku">
              <img class="tech-icon" src="/icons/cy.png" alt="Cypress">
            </div>
        </header>
        <img id="livewyre" src="/livewire-screen.png" alt="">
         <a href="https://livewire-f9c1f.firebaseapp.com/#/" target="blank"><b-button >Live Site</b-button></a>
          <a href="https://github.com/trujilloj/gigify" target="blank"><b-button >Github</b-button></a>
    </div>
</template>

<style scoped>
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
#livewyre {
  height: 100%;
  width: 100%;
  margin-bottom: 3px;
}

.livetext {
  color: orange;
}

.about-livewyre {
  padding: 10px;
  margin: 5px;
}

a {
  margin: 3px;
}

h1,
h2 {
  font-family: "Pathway Gothic One", sans-serif !important;
  text-align: center;
  text-shadow: 1px 1px 1px grey;
}
</style>