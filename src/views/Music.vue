<template>
  <div id="style-override" class="music page">
    <Title class="title" titleTheme="sky" title="music" />
    <MCarousel class="cards music-carousel" style="z-index:2;" />
    <Footer class="bottom" theme="sky" color="white" isSelected="true"/>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import MCarousel from "@/components/MCarousel";

export default {
  name: "home",
  components: {
    Title,
    Footer,
    MCarousel
  },
  data () {
    return {
      isSelected: false
    }
  }
};
</script>

<style scoped>
.music-carousel {
  margin-top: 45px;
}


.music {
  height: 100%;
}

.bottom {
  bottom: 0;
}

a {
  text-decoration: none;
}
</style>
