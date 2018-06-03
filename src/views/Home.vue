<template>

  <div class="home">
    <div @click="toggleCards()">
      <Title class="title" style="z-index:0;"  />
    </div>
  
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <template v-if="showCards === true">
      <Carousel class="cards" style="z-index:2;" />
    </template>
    

  </div>

</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";
// import Footer from "@/components/Footer";

export default {
  name: "home",
  components: {
    Title,
    Carousel
  },
  data() {
    return {
      showCards: false
    };
  },
  methods: {
    toggleCards() {
      this.showCards = !this.showCards;
    }
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
</style>
