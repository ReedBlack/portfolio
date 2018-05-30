<template>

  <div class="home">
    <div @click="toggleCards()">
      <Title class="title"  />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <template v-if="showCards === true">
      <Carousel class="cards"  />
    </template>
  </div>

</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";

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
.title {
  z-index: 0;
}

.cards {
  z-index: 2;
}
</style>
