<template>
  <div id="style-override" class="music page">
    <div>
      <MTitle class="title" style="z-index:0;"  />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <template id="center">
      <MCarousel class="cards" style="z-index:2;" />
    </template>   
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
#center {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.cards {
  align-self: center;
}
.bottom {
  bottom: 0;
}

a {
  text-decoration: none;
}
</style>
