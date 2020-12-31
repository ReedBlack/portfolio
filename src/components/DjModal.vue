<template>
    <div>
        <small class="silver">All Mixes Available for Download</small>
        <AudioPlayer v-for="mix in mixes"
            :title="mix.title"
            :soundSource="mix.link"
            :date="mix.date"
            :description="mix.description"
        />
    </div>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer";

export default {
  name: "DjModal",
  components: {
    AudioPlayer,
  },
  data() {
    return {
      mixes: [
        {
          title: "Rhythm Sanctuary",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Rhythm+Sancutary+12_10_20.m4a",
          date: 'Dec 2020',
        },
        {
          title: "Sounds from the Stream",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Sounds+From+The+Stream+12.18.20.m4a",
          date: 'Dec 2020'
        },
        {
          title: "Yoga Mix",
          link: "https://mixtap-mixes.s3-ap-southeast-1.amazonaws.com/Feb2019YogaMix.m4a",
          date: 'Feb 2019',
          description: 'A textured Yoga journey.'
        },
        {
          title: "2016 Summer Lounge Promo Mix",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Summer+2016+Lounge+Promo+Mix.m4a",
          date: 'June 2016',
        },
        {
          title: "@Punch House",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Punch+House+mp3.mp3",
          date: "May 2016",
        },
        {
          title: "@Cetta's",
          link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Live+%40Cetta's+9%3A24%3A2016.m4a",
          date: "Oct 2016",
        }
      ]
    }
  }
};
</script>
