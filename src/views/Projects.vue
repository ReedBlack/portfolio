<template>
  <div id="project-override" class="projects page">     
    <div>
      <PTitle class="title" style="z-index:0;" />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <template id="center">
      <PCarousel class="cards" style="z-index:2;" />
    </template>   
    <PFooter class="bottom" />
  </div>
</template>

<script>
import PTitle from "@/components/projects/PTitle";
import PFooter from "@/components/projects/PFooter";
import PCarousel from "@/components/projects/PCarousel";

export default {
  name: "home",
  components: {
    PTitle,
    PFooter,
    PCarousel
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
