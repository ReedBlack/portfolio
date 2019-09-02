<template>
  <div id="project-override" class="projects page">
    <div>
      <PTitle class="title" style="z-index:0;" />
    </div>
    <PCarousel class="cards" style="z-index:2;" />
    <Footer class="bottom" theme="lava" />
  </div>
</template>

<script>
import PTitle from "@/components/projects/PTitle";
import Footer from "@/components/Footer";
import PCarousel from "@/components/projects/PCarousel";

export default {
  name: "home",
  components: {
    PTitle,
    Footer,
    PCarousel
  }
};
</script>

<style scoped>

.projectsw {
  height: 100%;
}

.bottom {
  bottom: 0;
}

a {
  text-decoration: none;
}
</style>
