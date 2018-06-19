<template>
    
    <div id="turnt">
         <b-modal 
             :header-bg-variant="headerBgVariant"
             :hide-footer="true"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             :footer-bg-variant="footerBgVariant"
             :footer-text-variant="footerTextVariant"
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
            :footer-bg-variant="footerBgVariant"
            
            size="lg"
            id="modal2"
         >
           <DevNavModal />
        </b-modal>
        <b-modal
        :header-bg-variant="headerBgVariant"
        :hide-footer="true"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
        size="lg"
        id="modal3">
            <TacoModal />
        </b-modal>
        <b-modal
        :header-bg-variant="headerBgVariant"
        :hide-footer="true"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
        size="lg"
        id="modal4">
           <LivewyreModal />
        </b-modal>
         <b-modal
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
         size="lg"
         id="modal5"
         >
           <MusicInfoModal />
        </b-modal>
        <carousel-3d id="music-c" style="height:70%;" 
        :controls-visible="true" 
        :controls-width="60"
        :controls-height="0"
        :height="325" 
        :width="255" 
        :clickable="true"
        :inverse-scaling="1300" :space="400"
        >
          <slide :index="0" id="solo-cuts" class="slide">
            <div class="hidebutton" v-b-modal.modal1>
             <SoloSlide />
            </div> 
          </slide>
          <slide :index="1" id="dev" class="slide">
            <div class="hidebutton" v-b-modal.modal2>
              <MDev />
            </div> 
          </slide>
          <slide :index="2" id="studio-cuts" class="slide">
            <div class="hidebutton" v-b-modal.modal3>
              <StudioSlide />
            </div>
          </slide>
          <slide :index="3" id="DJ" class="slide">
            <div class="hidebutton" v-b-modal.modal4>
              <DJSlide />
            </div>
          </slide>
          <slide :index="4" id="music" class="slide music">
            <div class="hidebutton" v-b-modal.modal5>

              <MusicSlideM />
            </div>
          </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

import StudioSlide from "@/components/StudioSlide";
import MusicSlideM from "@/components/MusicSlideM";
import SoloSlide from "@/components/SoloSlide";
import MDev from "@/components/MDev";
import DevNavModal from "@/components/DevNavModal";
import DJSlide from "@/components/DJSlide";

import BootstrapVue from "bootstrap-vue";
import AboutMeModal from "@/components/AboutMeModal";
import ResumeModal from "@/components/ResumeModal";
import MusicInfoModal from "@/components/MusicModal";
import TacoModal from "@/components/TacoModal";
import LivewyreModal from "@/components/LivewyreModal";
import LivewyreSlide from "@/components/LivewyreSlide";

export default {
  name: "Carousel",
  components: {
    // "carousel-3d": Carousel3d.Carousel3d,
    // slide: Carousel3d.Slide,
    Carousel3d,
    Slide,
    SoloSlide,
    DJSlide,
    MusicSlideM,
    StudioSlide,
    BootstrapVue,
    AboutMeModal,
    MDev,
    TacoModal,
    LivewyreSlide,
    LivewyreModal,
    MusicInfoModal,
    DevNavModal
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
@media only screen and (max-width: 600px) {
  #music-c {
    margin-top: -70px !important;
    width: 100% !important;
  }
}

#style-override span {
  color: fuchsia;
  font-size: 80px;
}

#music-c {
  width: 90%;
  margin-top: -1%;
}
.slide,
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

#style-override .widen {
  width: 90%;
  background-color: rgb(255, 0, 255);
}

figure:hover {
  margin-top: 10px;
}
</style>