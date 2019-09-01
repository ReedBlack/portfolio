<template>    
    <div id="turnt">
        <b-modal 
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            size="lg"
            id="modal1">
          <AboutMeModal />
        </b-modal>
        <b-modal
            :body-close-label="close"
            :hide-footer="true"
            :header-bg-variant="headerBgVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            size="lg"
            id="modal2"
        >
          <ResumeModal />
        </b-modal>
        <b-modal
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
        size="lg"
        id="modal6"
        >
          <MixtapModal />
        </b-modal>
        <carousel-3d id="shorter" style="height:70%;" 
        :controls-visible="true" 
        :controls-width="80"
        :controls-height="0"
        :height="325" 
        :width="255" 
        :clickable="true"
        :display="3"
        :perspective="200"
        :inverse-scaling="1500" 
        :space="720"
        >
          <slide :index="0" id="about" class="slide">
            <div class="hidebutton" v-b-modal.modal1>
              <TitleSlide
                title="about me"
                image="me.jpg"
                imageType="junglephoto"
                theme="jungle"
                />
            </div> 
          </slide>
          <slide :index="2" id="resume" class="slide">
            <div class="hidebutton" v-b-modal.modal2>
              <TitleSlide
                title="resume"
                image="Reed-Black-Resume.jpg"
                imageType="junglephoto"
                theme="jungle"
                />
            </div> 
          </slide>        
          <slide :index="1" id="music" class="slide">
            <div class="hidebutton" v-b-modal.modal5>
              <TitleSlide
                title="music"
                image="rock-on-dark.png"
                linkTo="./Music"
                imageType="png"
                theme="jungle"
                />
            </div>
          </slide>         
          <slide :index="3" id="projectlink" class="slide">
            <div class="hidebutton" v-b-modal.modal7>
              <TitleSlide
                title="projects"
                image="hammer.png"
                linkTo="./Projects"
                imageType="png"
                theme="jungle"
                />
            </div>
          </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import TitleSlide from "@/components/TitleSlide";
import BootstrapVue from "bootstrap-vue";
import AboutMeModal from "@/components/AboutMeModal";
import ResumeModal from "@/components/ResumeModal";

export default {
  name: "Carousel",
  components: {
    // "carousel-3d": Carousel3d.Carousel3d,
    // slide: Carousel3d.Slide,
    Carousel3d,
    TitleSlide,
    Slide,
    BootstrapVue,
    AboutMeModal,
    ResumeModal,
  },
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ],
      headerBgVariant: "dark",
      headerTextVariant: "success",
      bodyBgVariant: "dark",
      bodyTextVariant: "success",
      footerBgVariant: "secondary",
      footerTextVariant: "dark",
      cancelDisabled: true
    };
  }
};
</script>

<style>
#home-override span {
    font-size: 110px;
    background: url("https://cdn.pixabay.com/photo/2016/11/14/22/52/james-1824888_960_720.jpg");
    background-size: 150%;
    background-position: top;
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
}

#home-override span {
  font-size: 100px;
}

#shorter {
  width: 70%;
  padding-bottom: 10px;
  
}
@media only screen and (max-width: 600px) {
  #shorter {
    margin-top: -70px;
    width: 100%;
  }
}
#music,
#resume,
#about,
#projectlink,
.hidebutton {
  background: none;
  border: none;
  box-shadow: none;
}

.carousel-3d-container figure {
  margin: 0;
  z-index: 5;
  padding-top: 0px;
  margin-top: 0px;
  padding: 17px;
}
.carousel-3d-container {
  padding: 30px;
  margin: 50px;
}
.carousel-3d-container figcaption {
  position: absolute;
  margin-top: 32px;
  margin-left: -12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 32px;
  font-weight: 900;
  min-width: 100%;
  box-sizing: border-box;
  z-index: 5;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  transform: rotate(5deg);
}

.widen {
  width: 90%;
  background-color: silver;
}

figure:hover {
  margin-top: 10px;
}
</style>