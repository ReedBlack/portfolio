<template>
    <div>
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
          title: "Unataka",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Unataka.m4a",
          date: 'Feat. Colin Nielsen (guitars) 2018'
        },
        {
          title: "Dusk Rat",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Dusk+Rat.m4a",
          date: '2014',
        },
        {
          title: "Power",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Power+092617+mp3.mp3",
          date: '2017'
        },
        {
          title: "Faux Suede",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Faux+Suede.m4a",
          date: "Feat. Derlee 2014",
        },
        {
          title: "Motel 6",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Motel+6.m4a",
          date: "2013",
        },
        {
          title: "Marble Animal",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Marble+Animal.m4a",
          date: "2017",
        },
        {
          title: "Big Foot",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Bigfoot.m4a",
          date: "2015",
        }
    ]
    }
  }
};
</script>

