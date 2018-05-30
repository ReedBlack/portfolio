<template>
    
    <div id="turnt">
        <carousel-3d style="height:70%;" 
        :controls-visible="false" 
        :height="365" 
        :width="275" 
        :clickable="true"
        :inverse-scaling="1300" :space="400"
        >
            <slide v-for="(slide, i) in slides" :index="i" class="slide">
              <figure>
                  <img :src="slide.image">
                  <figcaption class="description">{{slide.title}}</figcaption>
              </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Carousel",
  components: {
    // "carousel-3d": Carousel3d.Carousel3d,
    // slide: Carousel3d.Slide,
    Carousel3d,
    Slide
  },
  data() {
    return {
      slides: [
        {
          title: "ABOUT ME",
          image: "/_MG_0747.JPG"
        },
        {
          title: "RESUME",
          image: "/Reed-Black-Resume.jpg"
        },
        {
          title: "Placeholder2",
          image: ""
        },
        {
          title: "TACO TACO",
          image: "taco-taco.png"
        },
        {
          title: "MUSIC",
          image: "/music.jpg"
        }
      ]
    };
  },
  props: ["showCards"]
};
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
  z-index: 5;
  padding-bottom: 60px;
}

.carousel-3d-container {
  padding: 30px;
  margin: 50px;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: #51897f;
  color: #51897f;
  bottom: 0;
  font-family: "Gothic A1", sans-serif;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 19px;
  color: #dc7971;
  min-width: 100%;
  box-sizing: border-box;
  z-index: 5;
}

.slide {
  box-shadow: 10px 10px 22px black;
  border-image-source: url("/rope-border.png");
  border-image-width: 450;
  border-image-slice: 230;
  border-image-outset: 8;
  border-radius: 8.9%;
  z-index: 100;
}
</style>
