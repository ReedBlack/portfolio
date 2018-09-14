<template>
    
    <div id="turnt">
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
        size="lg"
        id="modal6"
        >
            <MixtapModal />
        </b-modal>
        <b-modal
            :header-bg-variant="headerBgVariant"
            :hide-footer="true"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
        size="lg"
        id="modal7"
        >
            <InkswellModal />
        </b-modal>
        <carousel-3d id="shorter" style="height:70%;" 
        :controls-visible="true" 
        :controls-width="100"
        :display="3"
        :controls-height="0"
        :height="325" 
        :width="280" 
        :clickable="true"
        :perspective="200"
        :inverse-scaling="1500" 
        :space="720"
        >        
            <slide :index="0" id="dev" class="slide">
                <div class="hidebutton" >
                    <PHome />
                </div> 
            </slide>
            <slide :index="1" id="live" class="slide">
                <div class="hidebutton" v-b-modal.modal4>
                    <LivewyreSlide />
                </div>
            </slide>
            <slide :index="2" id="taco" class="slide">
                <div class="hidebutton" v-b-modal.modal3>
                    <TacoSlide />
                </div>
            </slide>
            <slide :index="3" id="inkswell" class="slide">
                <div class="hidebutton" v-b-modal.modal7>
                    <InkswellSlide />
                </div>
            </slide>
            <slide :index="4" id="mixtap" class="slide">
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
import BootstrapVue from "bootstrap-vue";
import PHome from "@/components/projects/PHome";
import AboutMeModal from "@/components/AboutMeModal";
import ResumeModal from "@/components/ResumeModal";
import TacoModal from "@/components/TacoModal";
import LivewyreModal from "@/components/LivewyreModal";
import LivewyreSlide from "@/components/LivewyreSlide";
import MixtapSlide from "@/components/MixtapSlide";
import InkswellSlide from "@/components/InkswellSlide";
import InkswellModal from "@/components/InkswellModal";
import MixtapModal from "@/components/MixtapModal";

export default {
    name: "Carousel",
    components: {
        Carousel3d,
        Slide,
        PHome,
        ResumeSlide,
        MusicSlide,
        TacoSlide,
        BootstrapVue,
        ResumeModal,
        TacoModal,
        LivewyreSlide,
        LivewyreModal,
        MixtapSlide,
        MixtapModal,
        InkswellSlide,
        InkswellModal
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
    width: 75%;
}

@media only screen and (max-width: 600px) {
    #shorter {
    margin-top: -70px;
    width: 100%;
    }
}

#taco,
#music,
#live,
#inkswell,
#mixtap,
#dev,
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
    background: url("/black-steel1.jpg");
    background-repeat: repeat-x;
    background-size: cover;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-filter: drop-shadow(0px -1px 1px silver);
    filter: drop-shadow(0px -1px 1px silver);
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