<template>
    <div id="style-override" class="construction page">
        <Title class="title" title="art" />
        <h3>my upcoming art page is under construction...check back soon!</h3>
        <Footer class="bottom" color="black"/>
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
