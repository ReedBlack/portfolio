<template>
    <div>
        <h1 class="color">Spotify Playlists</h1>
        <p class="silver">As a software developer, one of my favorite aspects of the job is my ability to consume new music an additional 40 hours each week while I work. The best of what I hear is always saved and organized. These Spotify playlists are always evolving. Give 'em a follow and be treated to something continuously fresh. Deep Latin Club, Chill Electric, Modern Funk, and Lounge House.</p>
        <section id="embedded-players">
            <h3 class="mix-title">Hondo Amazonía</h3>
            <p>A deep South American Sound. Think of the underground clubs of Lima and Bogotà.</p>
            <iframe src="https://open.spotify.com/embed/playlist/1FxKVpXQZDR04QyzHiyjVA" width="100%" height="400" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
            <br/>
            <br/>
            <h3 class="mix-title">Lifted Vibes: Essential Chill Electronic</h3>
            <p>This playlist is an authority on the genre. over 20 hours long</p>
            <iframe src="https://open.spotify.com/embed/user/black.reed.c/playlist/0xBfzRIzGIHRqID6C7IrmX" width="100%" height="400" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
            <br/>
            <br/>
            <h3 class="mix-title">Modern Funk</h3>
            <p>From electro to throw-back instrumentals, this playlist has only one requirement of its funk: that it was made in the last 10 years.</p>
            <iframe id="center-player" src="https://open.spotify.com/embed/user/black.reed.c/playlist/2o4NB7RfqC6DPqHlUnmHBH" width="100%" height="400" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
            <br/>
            <br/>
            <h3 class="mix-title">Deep, Organic, and Lounge</h3>
            <p>A mellow, dusty type of House Music</p>
            <iframe src="https://open.spotify.com/embed/user/black.reed.c/playlist/3kCUuRi4zIGyFPFP2VYyfj" width="100%" height="400" frameborder="2" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>
    </div>
</template>

<style>
iframe {
    margin: 1%;
}

p {
  color: silver;
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
    text-shadow: none;
}

h1,
h2 {
  font-family: "Pathway Gothic One", sans-serif;
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
