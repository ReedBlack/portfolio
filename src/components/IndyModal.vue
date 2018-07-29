
<template>
    <div>
        <ul>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Unataka</h1>
                    <audio :src="unataka" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Feat. Colin Nielsen (guitars) 2018</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Dusk Rat</h1>
                    <audio :src="duskRat" controls></audio>
                </div> 
                <h3 class="mix-date-loc">2014</h3>
            
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Power</h1>
                    <audio :src="power" controls></audio>
                </div> 
                <h3 class="mix-date-loc">2017</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Faux Suede</h1>
                    <audio :src="fauxSuede" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Feat. Derlee 2014</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Motel 6</h1>
                    <audio :src="motel6" controls></audio>
                </div> 
                <h3 class="mix-date-loc">2013</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Marble Animal</h1>
                    <audio :src="marbleAnimal" controls></audio>
                </div> 
                <h3 class="mix-date-loc">2016</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Bigfoot</h1>
                    <audio :src="bigfoot" controls></audio>
                </div> 
                <h3 class="mix-date-loc">2015</h3>
            </li>        
        </ul>     
    </div>
</template> 
<script>
export default {
  data() {
    return {
      unataka:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Unataka.m4a",
      duskRat:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Dusk+Rat.m4a",
      power:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Power+092617+mp3.mp3",
      fauxSuede:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Faux+Suede.m4a",
      motel6:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Motel+6.m4a",
      marbleAnimal:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Marble+Animal.m4a",
      bigfoot:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Bigfoot.m4a"
    };
  }
};
</script>

