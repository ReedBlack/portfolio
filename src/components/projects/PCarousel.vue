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
        <carousel-3d id="project-carousel" style="height:70%;" 
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
            <slide :index="2" id="dev" class="slide">
                <div class="hidebutton" >
                    <PHome />
                </div> 
            </slide>
            <slide :index="1" id="live" class="slide">
                <div class="hidebutton" v-b-modal.modal4>
                    <LivewyreSlide />
                </div>
            </slide>
            <slide :index="4" id="taco" class="slide">
                <div class="hidebutton" v-b-modal.modal3>
                    <TacoSlide />
                </div>
            </slide>
            <slide :index="0" id="inkswell" class="slide">
                <div class="hidebutton" v-b-modal.modal7>
                    <InkswellSlide />
                </div>
            </slide>
            <slide :index="3" id="mixtap" class="slide">
                <div class="hidebutton" v-b-modal.modal6>
                    <MixtapSlide />
                </div>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import TacoSlide from "@/components/TacoSlide";
import MusicSlide from "@/components/MusicSlide";
import BootstrapVue from "bootstrap-vue";
import PHome from "@/components/projects/PHome";
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
        MusicSlide,
        TacoSlide,
        BootstrapVue,
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
#project-override span {
    font-size: 110px;
    color: orangered;
    background: url("/movinglava.gif");
    background-size: 150%;
    background-position: top;
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
}

#project-carousel {
    width: 65%;
}

@media only screen and (max-width: 600px) {
    #project-carousel {
    margin-top: -70px;
    width: 100%;
    }
}

#taco,
#live,
#inkswell,
#mixtap,
#dev,
.hidebutton {
    background: none;
    border: none;
    box-shadow: none;
}

.widen {
    width: 90%;
    background-color: orangered;
}

.slide {
    background: none;
}
</style>