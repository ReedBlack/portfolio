<template>
  <div id="project-override" class="projects page">
    <Title class="title" title="projects" titleTheme="lava" />
    <PCarousel class="cards" style="z-index:2;" />
    <Footer class="bottom" theme="lava" />
  </div>
</template>

<script>
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import PCarousel from "@/components/projects/PCarousel";

export default {
  name: "home",
  components: {
    Title,
    Footer,
    PCarousel
  }
};
</script>

<style scoped>

.projects {
  height: 100%;
}

.bottom {
  bottom: 0;
}

a {
  text-decoration: none;
}
</style>
