
<template>
    <div>
        <p class="silver">I played a critical role in the production of these tracks during my time as lead staff producer at Stonecutter. They range from full-blown beats to overseeing subtle instrumentation and effects.</p>
        <small class="silver">All tracks recorded and produced at Stonecutter Recording Studios, Chicago, IL</small>
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
          title: "Wichoni",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/01+Wichoni+Remix+feat.+Twista.mp3",
          date: 'Primeaux and Mike (feat. Twista)'
        },
        {
          title: "In Beauty",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/In+Beauty+Remix+Feat.+Twista.mp3",
          date: 'Primeaux and Mike (feat. Twista)',
        },
        {
          title: "Blue Eyes",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/Blue+Eyes.m4a",
          date: 'Heidie Fifield'
        },
        {
          title: "Baby But",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/01+Baby+But.mp3",
          date: "Eddy Birth",
        },
        {
          title: "What I Like",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/What+I+Like.m4a",
          date: "George",
        }
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
