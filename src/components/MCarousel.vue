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
         id="modal5"
         >
           <MusicInfoModal />
        </b-modal>
         <b-modal 
             :header-bg-variant="headerBgVariant"
             :hide-footer="true"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             :footer-bg-variant="footerBgVariant"
             :footer-text-variant="footerTextVariant"
             size="lg"
             id="modal7">
           <IndyModal />
        </b-modal>
         <b-modal
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            
            size="sm"
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
            <StudioModal />
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
           <DjModal />
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
            <div class="hidebutton" v-b-modal.modal7>
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
import DjModal from "@/components/DjModal";
import IndyModal from "@/components/IndyModal";
import BootstrapVue from "bootstrap-vue";
import AboutMeModal from "@/components/AboutMeModal";
import MusicInfoModal from "@/components/MusicInfoModal";
import StudioModal from "@/components/StudioModal";

export default {
  name: "Carousel",
  components: {
    Carousel3d,
    Slide,
    SoloSlide,
    DJSlide,
    MusicSlideM,
    StudioSlide,
    BootstrapVue,
    MDev,
    DjModal,
    IndyModal,
    StudioModal,
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
#ableton,
#DJ,
#solo-cuts,
#dev,
#studio-cuts,
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

@media only screen and (max-width: 600px) {
  #music-c {
    margin-top: -70px;
    width: 100%;
  }
}
</style>