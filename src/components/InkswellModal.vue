<template>
    <div>
        <header class="about-livewyre">
            <h1 class="livetext">About Inkswell</h1>
            <p class="livetext">My capstone project from my time at Galvanize, Inkswell uses tinder-like swiping to match tattoo artists and clients. Clients swipe on the design styles posted by tattoo artists. If they feel the design style captures the essence of their idea, they will swipe right. If not, they swipe left. On the other side of the app, artists are presented with the ideas that clients have, and swipe right on those ideas they feel will inspire them to do their best work. If both users swipe right on each other, you have a match, and a channel of communication opens up.</p>
            <h2 class="livetext">tech used</h2>
             <div class="technologies">
              <img class="tech-icon" src="/icons/vueNative.png" alt="Vue Native">
              <img class="tech-icon" src="/icons/reactNative.png" alt="React Native">
              <img class="tech-icon" src="/icons/node.png" alt="node.js">
              <img class="tech-icon" src="/icons/knex.png" alt="knex.js">
              <img class="tech-icon" src="/icons/psql.png" alt="PostgreSQL">
              <img class="tech-icon" src="/icons/express.png" alt="Express.js">
              <img class="tech-icon" src="/icons/heroku.png" alt="Heroku">
             <img class="tech-icon" src="/icons/aws.png" alt="Amazon Web Services">
            </div>
        </header>
        <div class="videos">
          <div class="container">
            <h1 class="livetext">Capstone Presentation</h1>
            <iframe 
            class="embed-player"
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://youtube.com/embed/QcHeAaErCKg">
            </iframe>
          </div>
          <br>
          <div class="container">
            <h1 class="livetext">Demo</h1>
            <iframe 
            class="embed-player"
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://www.youtube.com/embed/1azJR8YQozU">
          </iframe>
        </div>
      </div>
      <a href="https://github.com/ReedBlack/inkswell" target="blank"><b-button >Github Front-End</b-button></a>
      <a href="https://github.com/ReedBlack/inkswell-server" target="blank"><b-button >Github Backend</b-button></a>
    </div>
</template>

<style scoped>
.videos {
  display: flex;
  flex-direction: column;
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#livewyre {
  height: auto;
  width: auto;
  margin-bottom: 10px;
}

.livetext {
  color: #fffede;
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