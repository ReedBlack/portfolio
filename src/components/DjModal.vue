
<template>
  <div>
    <ul>
        <li class="player">
            <div class=title-audio>
                <h1 class="mix-title">That Funk Noise</h1>
                <audio :src="emilys2017" controls></audio>
            </div> 
            <h3 class="mix-date-loc">Somewhere Dirty</h3>
        </li>
        <li class="player">
            <div class=title-audio>
                <h1 class="mix-title">Feed the Fish</h1>
                <audio :src="punchHouse2016" controls></audio>
            </div> 
            <h3 class="mix-date-loc">@Punch House, May 2016</h3>
        </li>
        <li class="player">
            <div class=title-audio>
                <h1 class="mix-title">Cetta's Saturday</h1>
                <audio :src="cettasSat2016" controls></audio>
            </div> 
            <h3 class="mix-date-loc">@Cetta's, October 2016</h3>
        </li>
        <li class="player">
            <div class=title-audio>
                <h1 class="mix-title">Yoga Mix</h1>
                <audio :src="decYoga2017" controls></audio>
            </div> 
            <h3 class="mix-date-loc">Home, Dec 2017</h3>
        </li>
        <li class="player">
            <div class=title-audio>
                <h1 class="mix-title">Promo Lounge Mix</h1>
                <audio :src="loungePromo2016" controls></audio>
            </div> 
            <h3 class="mix-date-loc">Home, June 2016</h3>
        </li>
    </ul>
      
 </div>
</template> 
<script>
export default {
  data() {
    return {
      emilys2017:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Reed+Black+at+Emily's+101316.mp3",
      loungePromo2016:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Summer+2016+Lounge+Promo+Mix.m4a",
      decYoga2017:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Dec2017++Yoga+Mix.m4a",
      punchHouse2016:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Punch+House+mp3.mp3",
      cettasSat2016:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Live+%40Cetta's+9%3A24%3A2016.m4a"
    };
  }
};
</script>

<style>
.mix-title {
  font-family: "Mr Dafoe", cursive;

  color: rgb(1, 200, 194);
  -webkit-font-smoothing: antialiased;
  -webkit-filter: drop-shadow(0px 0px 1px rgb(255, 0, 255));
  filter: drop-shadow(0px 0px 1px rgb(255, 0, 255));
}

.mix-date-loc {
  color: rgb(1, 200, 194);
  -webkit-font-smoothing: antialiased;
  -webkit-filter: drop-shadow(0px 1px 0px rgb(255, 0, 255));
  filter: drop-shadow(0px 1px 0px rgb(255, 0, 255));
  margin-left: -400px;
  font-size: 3.4vh;
  margin-right: 5px;
}
#ddown-sm {
  color: hotpink;
}

.mix-title {
  font-size: 6vh;
}

.player:hover,
.player:focus,
.player:active {
  -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.05);
}

audio {
  width: 375px;
  margin-bottom: 0;
}
.player {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid gray;
  margin-top: 1%;
  margin-left: -1%;
  border-radius: 6px;
  padding: 1%;
  width: 96%;
  background: #291829; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fef6fe', endColorstr='#ffc9ef',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  -webkit-transition: all 0.11s linear;
  -moz-transition: all 0.11s linear;
  -o-transition: all 0.11s linear;
  transition: all 0.11s linear;
  -moz-box-shadow: 2px 2px 4px 0px #006773;
  -webkit-box-shadow: 2px 2px 4px 0px #006773;
  box-shadow: 2px 2px 4px 0px #006773;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border-radius: 7px 7px 7px 7px;
}

@media only screen and (max-width: 800px) {
  audio {
    width: 100%;
  }

  .player {
    width: 118%;
    height: 35%;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: -48px;
  }

  .title-audio {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .mix-date-loc {
    display: none;
  }
}
</style>