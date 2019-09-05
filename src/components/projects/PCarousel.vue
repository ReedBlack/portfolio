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
        <carousel-3d id="project-carousel" style="height:113%; margin-top: 50px;"
        :controls-visible="true"
        :controls-width="100"
        :display="5"
        :controls-height="0"
        :height="260"
        :width="210"
        :clickable="true"
        :perspective="200"
        :inverse-scaling="1500"
        :space="450"
        >
            <slide :index="2" id="dev" class="slide">
                <div class="hidebutton" >
                    <TitleSlide
                        isEarth="true"
                        color="orange"
                        theme="lava"
                    />
                </div>
            </slide>
            <slide :index="1" id="live" class="slide">
                <div class="hidebutton" v-b-modal.modal4>
                    <TitleSlide
                        title="livewire"
                        image="livewire.png"
                        theme="lava"
                        properties="lava"
                    />
                </div>
            </slide>
            <slide :index="4" id="taco" class="slide">
                <div class="hidebutton" v-b-modal.modal3>
                    <TitleSlide
                        title="taco-taco"
                        image="taco.png"
                        theme="lava"
                        properties="lava spins"
                    />
                </div>
            </slide>
            <slide :index="0" id="inkswell" class="slide">
                <div class="hidebutton" v-b-modal.modal7>
                    <TitleSlide
                        title="inskwell"
                        image="inkswell.png"
                        theme="lava"
                        properties="lava"
                    />
                </div>
            </slide>
            <slide :index="3" id="mixtap" class="slide">
                <div class="hidebutton" v-b-modal.modal6>
                    <TitleSlide
                        title="mixtap"
                        image="mixtap.png"
                        theme="lava"
                        properties="lava"
                        imageType="lavaphoto"
                    />
                </div>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import BootstrapVue from "bootstrap-vue";
import TacoModal from "@/components/TacoModal";
import LivewyreModal from "@/components/LivewyreModal";
import TitleSlide from "@/components/TitleSlide"
import InkswellModal from "@/components/InkswellModal";
import MixtapModal from "@/components/MixtapModal";

export default {
    name: "Carousel",
    components: {
        TitleSlide,
        Carousel3d,
        Slide,
        BootstrapVue,
        TacoModal,
        LivewyreModal,
        MixtapModal,
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
    width: 100%;
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
