<template>
  <div id="home-override" class="home page" style="backgroundColor: 'theme.jungle.backgroundImage'">
    <Title class="title" style="z-index:0;"  />
    <Carousel class="cards" style="z-index:2;" />
    <Footer class="bottom" theme="jungle" />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";

export default {
  name: "home",
  components: {
    Title,
    Carousel,
    Footer
  }
};
</script>

<style>
.home {
  height: 100%;
}

.bottom {
  bottom: 0;
}

a {
  text-decoration: none;
}
</style>
