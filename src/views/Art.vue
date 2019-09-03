<template>
    <div id="style-override" class="art page">
        <Title class="title" titleTheme="water" title="art" />
        <ACarousel class="cards" style="z-index:2;" />
        <Footer class="bottom" theme="water" color="lavender" isSelected="true"/>
    </div>
</template>

<script>
  import Title from "@/components/Title";
  import Footer from "@/components/Footer";
  import ACarousel from "@/components/ACarousel";

  export default {
    name: "home",
    components: {
      Title,
      Footer,
      ACarousel
    },
    data () {
      return {
        isSelected: false
      }
    }
  };
</script>

<style scoped>



    .bottom {
        bottom: 0;
    }

    a {
        text-decoration: none;
    }

    .art {
             height: 100%;
         }
</style>
