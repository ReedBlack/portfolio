<template>
    <div>
        <header class="about-mixtap">
            <h1 class="livetext">About Mixtap</h1>
            <p class="livetext">A site for both DJs and music fans. Mixtap is intended to exist somewhere between Soundcloud and Mixcloud. The purpose is for DJs to post their mixes and get exposure to fans around the world based on search criteria instead of popularity. The "DJ" section is for DJs to upload their music to be stored and searched. The "Party People" section is for fans to store their favorite mixes and search for new ones.</p>
            <p class="livetext">Technologies used: VueJS, PostgreSQL, Knex.js, Express.js, Cypress, AWS</p>

        </header>
        <img id="mixtap" src="/mixtap-screen.png" alt="">
         <a href="https://mixtap-dj.firebaseapp.com/#/" target="blank"><b-button >Live Site</b-button></a>
          <a href="https://github.com/ReedBlack/mixtap-frontend" target="blank"><b-button >Frontend Repo</b-button></a>
          <a href="https://github.com/ReedBlack/mixtap-backend" target="blank"><b-button >Backend Repo</b-button></a>
    </div>
</template>

<style scoped>
#mixtap {
  height: 100%;
  width: 100%;
  margin-bottom: 3px;
}

.livetext {
  color: purple;
}

.about-mixtap {
  background-color: silver;
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
  text-shadow: 1px 1px 1px grey;
}
</style>