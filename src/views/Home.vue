<template>
  <div id="home-override" class="home page">
    <div >
      <Title class="title" style="z-index:0;"  />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <template>
      <Carousel class="cards" style="z-index:2;" />
    </template>
    <Footer class="bottom" />
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
