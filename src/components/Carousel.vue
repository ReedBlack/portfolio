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
        id="modal3">
            <TacoModal />
        </b-modal>
        <b-modal
        :header-bg-variant="headerBgVariant"
        :hide-footer="true"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        size="lg"
        id="modal4">
           <LivewyreModal />
        </b-modal>
         <b-modal
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
         size="sm"
         id="modal5"
         >
           <MusicModal />
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
        :inverse-scaling="1300" :space="400"
        >
          <slide :index="0" id="about" class="slide">
            <div class="hidebutton" v-b-modal.modal1>
             <AboutMeSlide />
            </div> 
          </slide>
          <slide :index="1" id="resume" class="slide">
            <div class="hidebutton" v-b-modal.modal2>
              <ResumeSlide />
            </div> 
          </slide>
          <slide :index="2" id="live" class="slide">
            <div class="hidebutton" v-b-modal.modal4>
              <LivewyreSlide />
            </div>
          </slide>
          <slide :index="3" id="taco" class="slide">
            <div class="hidebutton" v-b-modal.modal3>
              <TacoSlide />
            </div>
          </slide>
          <slide :index="4" id="music" class="slide music">
            <div class="hidebutton" v-b-modal.modal5>

              <MusicSlide />
            </div>
          </slide>
          <slide :index="5" id="mixtap" class="slide">
            <div class="hidebutton" v-b-modal.modal6>

              <MixtapSlide />
            </div>
          </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import ResumeSlide from "@/components/ResumeSlide";
import TacoSlide from "@/components/TacoSlide";
import MusicSlide from "@/components/MusicSlide";
import AboutMeSlide from "@/components/AboutMeSlide";
import BootstrapVue from "bootstrap-vue";
import AboutMeModal from "@/components/AboutMeModal";
import ResumeModal from "@/components/ResumeModal";
import MusicModal from "@/components/MusicModal";
import TacoModal from "@/components/TacoModal";
import LivewyreModal from "@/components/LivewyreModal";
import LivewyreSlide from "@/components/LivewyreSlide";
import MixtapSlide from "@/components/MixtapSlide";
import MixtapModal from "@/components/MixtapModal";

export default {
  name: "Carousel",
  components: {
    // "carousel-3d": Carousel3d.Carousel3d,
    // slide: Carousel3d.Slide,
    Carousel3d,
    Slide,
    AboutMeSlide,
    ResumeSlide,
    MusicSlide,
    TacoSlide,
    BootstrapVue,
    AboutMeModal,
    ResumeModal,
    TacoModal,
    LivewyreSlide,
    LivewyreModal,
    MusicModal,
    MixtapSlide,
    MixtapModal
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
#style-override span {
  font-size: 80px;
}

#shorter {
  width: 85%;
}
@media only screen and (max-width: 600px) {
  #shorter {
    margin-top: -70px;
    width: 100%;
  }
}
#taco,
#music,
#resume,
#about,
#live,
#mixtap,
.hidebutton {
  background: none;
  border: none;
  box-shadow: none;
}

.carousel-3d-container figure {
  margin: 0;
  z-index: 5;
  padding-bottom: 60px;
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
  font-size: 30px;
  font-weight: bolder;
  min-width: 100%;
  box-sizing: border-box;
  z-index: 5;
  background: url("https://media.freestocktextures.com/cache/3c/c7/3cc78f214da259b2893d8fbf508a3fef.jpg");
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 1px rgb(99, 59, 25));
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