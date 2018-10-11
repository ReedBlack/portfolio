
<template>
    <div>
        <small id="silver">All tracks recorded and produced at Stonecutter Recording Studios, Chicago, IL</small>
        <ul>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Wichoni</h1>
                    <audio :src="wichoni" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Primeaux and Mike (feat. Twista)</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">In Beauty</h1>
                    <audio :src="inBeauty" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Primeaux and Mike (feat. Twista)</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Blue Eyes</h1>
                    <audio :src="blueEyes" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Heidie Fifield</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">Baby But</h1>
                    <audio :src="babyBut" controls></audio>
                </div> 
                <h3 class="mix-date-loc">Eddy Birth</h3>
            </li>
            <li class="player">
                <div class=title-audio>
                    <h1 class="mix-title">What I Like</h1>
                    <audio :src="whatILike" controls></audio>
                </div> 
                <h3 class="mix-date-loc">George</h3>
            </li>
        </ul>      
    </div>
</template> 

<script>
export default {
  data() {
    return {
      wichoni:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/01+Wichoni+Remix+feat.+Twista.mp3",
      inBeauty:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/In+Beauty+Remix+Feat.+Twista.mp3",
      blueEyes:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/Blue+Eyes.m4a",
      babyBut:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/01+Baby+But.mp3",
      whatILike:
        "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Indy+Cuts/What+I+Like.m4a"
    };
  }
};
</script>

<style>
#silver {
  color: silver;
}
</style>