<template>
    <div class="footer-flex">
        <nav class="site-nav--social">
            <a href="http://www.github.com/ReedBlack" target="blank"><i class="fab fa-github" :class="theme"></i></a>
            <br>
            <a href="https://www.linkedin.com/in/reed-black" target="blank"><i class="fab fa-linkedin" :class="theme"></i></a>
            <br>
            <a href="https://www.soundcloud.com/cielorhythms" target="blank"><i class="fab fa-soundcloud" :class="theme"></i></a>
        </nav>
        <div id="svg-container">
            <div class="smallbox">
                <Earth :color="color"></Earth>
            </div>
            <div class="smallbox">
                <Air :color="color"></Air>
            </div >
            <div class="smallbox">
                <Fire :color="color"></Fire>
            </div>
            <div class="smallbox">
                <Water :color="color"></Water>
            </div>
        </div>
    </div>
</template>

<script>
import Air from "@/svg/Air";
import Earth from "@/svg/Earth";
import Fire from "@/svg/Fire";
import Water from "@/svg/Water";

export default {

  name: "Footer",
  components: {
    Earth,
    Air,
    Fire,
    Water
  },
  props: ["theme", "isSelected", "color"],
}

</script>

<style>

.smallbox {
    height: 50px;
    margin-bottom: 2px;
    width: 50px;
}

#svg-container {
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -20px;
}

.footer-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-height: 230px;
    padding-bottom: 10px;
}

.fa-linkedin {
    margin-right: 7px;
}

.fa-github {
    margin-right: 7px;
}

.site-nav--social {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 200;
  line-height: 12px;
  margin-right: 20px;
  text-decoration-line: none;
  font-size: 7.0vh;
}

@media only screen and (max-width: 600px) {
  .site-nav--social {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  a {
    padding: 2.5%;
  }

    .smallbox {
        height: 32px;
        width: 32px;
    }

    .footer-flex {
        max-height: 220px;
    }
}
a {
  text-decoration: none;
}

.jungle {
  background: url("/leaf-texture.jpg");
  -webkit-filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
  filter: drop-shadow(0px -1px 2px rgb(99, 59, 25));
  text-decoration: none;
  background-repeat: repeat-x;
  background-size: cover;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.sky {
  background-color: white;
  -webkit-filter: drop-shadow(0px -1px 2px #14568F);
  filter: drop-shadow(0px -1px 2px #14568F);
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.lava {
  text-decoration: none;
  background: url("/lavabackground.jpg");
  background-repeat: repeat-x;
  background-size: auto;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-filter: drop-shadow(1px 2px 0px orangered);
  filter: drop-shadow(1px 2px 0px orangered);
}

.water {
    text-decoration: none;
    background: url("/water-texture.jpg");
    background-repeat: repeat-x;
    background-size: cover;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-filter: drop-shadow(1px 2px 0px #A4C9CB);
    filter: drop-shadow(1px 2px 0px #A4C9CB);
}
</style>
