
<template>
    <div>
        <p class="silver">In the Spring of 2017, upon first moving to Colorado, I got involved with Outside In, a collective of forward-thinking musicians, producers and audio engineers focused on re-thinking the way we approach sound and music as an art form. Our primary project was Outside In, a 360-degree immersive sound array, similar to, but more advanced than the audio systems found in modern planetariums. Dolby surround is 5.1. What we were building was 16.1.</p>
        <p class="silver">I had the opportunity to build a 35-minute progressive composition produced from scratch. It is a journey of sound design and beats, meant to ease the listener, build up tension, and loosen them back up with dance. The original composition features panning effects utilising the 360 degree degree and top-to-bottom panning so that the listener could truly be 'in' the music.</p>
        <p class="silver">Provided below is my composition for Outside In. The panning effects cannot be heard without the array hardware, but the composition is a cool journey nonetheless. Available for free download</p>
        <AudioPlayer
                v-for="track in tracks"
                :title="track.title"
                :soundSource="track.link"
                :date="track.date"
        />
    </div>
</template>

<script>
  import AudioPlayer from "@/components/AudioPlayer";

  export default {
    components: {
      AudioPlayer,
    },
    data() {
      return {
        tracks: [
          {
            title: "Outside-In Composition",
            link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/01+Wichoni+Remix+feat.+Twista.mp3",
            date: '2017'
          },
        ],
      };
    }
  };
</script>

<style>
    .silver {
        color: silver;
    }
</style>
