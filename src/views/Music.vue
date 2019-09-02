<template>
  <div id="style-override" class="music page">
    <Title class="title" titleTheme="sky" title="music" />
    <MCarousel class="cards" style="z-index:2;" />
    <Footer class="bottom" theme="sky" />
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
  }
};
</script>

<style scoped>

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
