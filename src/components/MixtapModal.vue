<template>
    <div>
        <header class="about-mixtap">
            <h1 class="livetext">About Mixtap</h1>
            <p class="livetext">A site for both DJs and music fans. Mixtap is intended to exist somewhere between Soundcloud and Mixcloud. The purpose is for DJs to post their mixes and get exposure to fans around the world based on search criteria instead of popularity. The "DJ" section is for DJs to upload their music to be stored and searched. The "Party People" section is for fans to store their favorite mixes and search for new ones.</p>
            <h2 class="livetext">tech used</h2>
            <div class="technologies">
              <img class="tech-icon" src="/icons/vueNative.png" alt="Vue Native">
              <img class="tech-icon" src="/icons/reactNative.png" alt="React Native">
              <img class="tech-icon" src="/icons/node.png" alt="node.js">
              <img class="tech-icon" src="/icons/knex.png" alt="knex.js">
              <img class="tech-icon" src="/icons/psql.png" alt="PostgreSQL">
              <img class="tech-icon" src="/icons/express.png" alt="Express.js">
              <img class="tech-icon" src="/icons/cy.png" alt="Cypress">
              <img class="tech-icon" src="/icons/heroku.png" alt="Heroku">
              <img class="tech-icon" src="/icons/aws.png" alt="Amazon Web Services">
            </div>
            

        </header>
        <div class="container">
        <img id="mixtap" src="/mixtap.gif" alt="">
        </div>
         <a href="https://mixtap-dj.firebaseapp.com/#/" target="blank"><b-button >Live Site</b-button></a>
          <a href="https://github.com/ReedBlack/mixtap-frontend" target="blank"><b-button >Frontend Repo</b-button></a>
          <a href="https://github.com/ReedBlack/mixtap-backend" target="blank"><b-button >Backend Repo</b-button></a>
    </div>
</template>

<style scoped>
.container {
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
#mixtap {
  height: auto;
  width: auto;
  margin-bottom: 10px;
}

.livetext {
  color: rgb(49, 75, 96);
}

.about-mixtap {
  background-color: white;
  padding: 10px;
  margin: 5px;
}

a {
  margin: 3px;
}

h1,
h2 {
  font-family: "Mr Dafoe", cursive !important;
  text-align: center;
  text-shadow: 2px 1px 2px rgb(1, 200, 194);
}
</style>