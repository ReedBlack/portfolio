<template>
  <div id="style-override" class="music page">
    <MTitle class="title" style="z-index:0;"  />
    <MCarousel class="cards" style="z-index:2;" />
    <Footer class="bottom" theme="sky" />
  </div>
</template>

<script>
// @ is an alias to /src
import MTitle from "@/components/MTitle";
import Footer from "@/components/Footer";
import MCarousel from "@/components/MCarousel";

export default {
  name: "home",
  components: {
    MTitle,
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
