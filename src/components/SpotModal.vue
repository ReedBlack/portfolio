<template>
    <div class="water">
        <h1 class="color">Spotify Playlists</h1>
        <p class="color">These Spotify playlists are always evolving. More is added by the week, and other tracks are removed before they grow stale. Give 'em a follow and be treated to something continuously fresh. Chill Electric, Modern Funk, and Lounge House.</p>
        <section id="embedded-players">  
            <iframe src="https://open.spotify.com/embed/user/black.reed.c/playlist/0xBfzRIzGIHRqID6C7IrmX" width="31.5%" height="500" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe id="center-player" src="https://open.spotify.com/embed/user/black.reed.c/playlist/2o4NB7RfqC6DPqHlUnmHBH" width="31.5%" height="500" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/user/black.reed.c/playlist/3kCUuRi4zIGyFPFP2VYyfj" width="31.5%" height="500" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>
    </div>
</template>

<style scoped>
iframe {
    margin: 1%;
}
#embedded-players {
    display: flex;
}

p {
  color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h1,
h2 {
  font-family: "Pathway Gothic One", sans-serif !important;
  text-align: center;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.color {
  color: silver;
}
.water {
  padding: 10px;
  margin: 0;
}

@media only screen and (max-width: 800px) {
    #embedded-players {
    display: flex;
    flex-direction: column;
    }

    iframe {
        width: 100%;
    }
}
</style>