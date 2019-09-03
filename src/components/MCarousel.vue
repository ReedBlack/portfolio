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
    size="lg"
    id="modal3">
      <StudioModal />
    </b-modal>
    <b-modal
    :header-bg-variant="headerBgVariant"
    :hide-footer="true"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    size="lg"
    id="modal4">
      <DjModal />
    </b-modal>
    <b-modal
    :header-bg-variant="headerBgVariant"
    :hide-footer="true"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    size="lg"
    id="modal6">
      <SpotModal />
    </b-modal>
    <b-modal
    :header-bg-variant="headerBgVariant"
    :hide-footer="true"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    size="lg"
    id="modal8">
      <OutsideInModal />
    </b-modal>
    <carousel-3d id="music-c" style="height:113%; margin-top: 60px;"
    :controls-visible="true"
    :controls-width="100"
    :controls-height="0"
    :height="310"
    :width="255"
    :display="5"
    :perspective="200"
    :clickable="true"
    :inverse-scaling="1500"
    :space="500"
    >
      <slide :index="0" id="solo-cuts" class="slide">
        <div class="hidebutton" v-b-modal.modal7>
          <TitleSlide
                title="indie tracks"
                image="keys.png"
                imageType="png"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="1" id="dev" class="slide">
        <div class="hidebutton" v-b-modal.modal2>
          <TitleSlide
                title="home"
                image="tildewhite.png"
                imageType="png"
                linkTo="/"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="2" id="studio-cuts" class="slide">
        <div class="hidebutton" v-b-modal.modal3>
          <TitleSlide
                title="stonecutter"
                image="faders.png"
                imageType="png"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="3" id="DJ" class="slide">
        <div class="hidebutton" v-b-modal.modal4>
          <TitleSlide
                title="dj mixes"
                image="circle3.png"
                properties="spins white"
                imageType="png"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="4" id="music" class="slide music">
        <div class="hidebutton" v-b-modal.modal5>
          <TitleSlide
                title="about"
                image="rock-on.png"
                imageType="png"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="5" id="spot" class="slide">
        <div class="hidebutton" v-b-modal.modal6>
          <TitleSlide
                title="playlists"
                image="spotifylogo.png"
                imageType="png"
                theme="sky"
          />
        </div>
      </slide>
      <slide :index="6" id="outside" class="slide">
        <div class="hidebutton" v-b-modal.modal8>
          <TitleSlide
                  title="outside-in"
                  image="arrowsin.png"
                  imageType="png"
                  theme="sky"
          />
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import TitleSlide from "@/components/TitleSlide";
import DevNavModal from "@/components/DevNavModal";
import DjModal from "@/components/DjModal";
import IndyModal from "@/components/IndyModal";
import BootstrapVue from "bootstrap-vue";
import MusicInfoModal from "@/components/MusicInfoModal";
import StudioModal from "@/components/StudioModal";
import SpotModal from "@/components/SpotModal";
import OutsideInModal from "@/components/OutsideInModal";

export default {
  name: "Carousel",
  components: {
    Carousel3d,
    TitleSlide,
    Slide,
    BootstrapVue,
    DjModal,
    IndyModal,
    StudioModal,
    MusicInfoModal,
    DevNavModal,
    OutsideInModal,
    SpotModal
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
  color: white;
  font-size: 110px;
}

#music-c {
  width: 82%;
  margin-top: -1%;
}
#ableton,
#DJ,
#spot,
#outside,
#solo-cuts,
#dev,
#studio-cuts,
.hidebutton {
  background: none;
  border: none;
  box-shadow: none;
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
