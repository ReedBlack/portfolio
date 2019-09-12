<template>
    <div class="player">
        <div class=title-audio>
            <h1 class="mix-title">{{title}}</h1>
            <h3 class="mix-date-loc">{{date}}</h3>
            <p class="mix-description">{{description}}</p>
            <audio :src="soundSource" controls></audio>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["soundSource", "date", "additionalInfo", "title", "description"]
  };
</script>

<style>
    .mix-description {
        color: white;
        -webkit-font-smoothing: antialiased;
    }

    .mix-title {
        font-family: "Pacifico", cursive;
        color: white;
        -webkit-font-smoothing: antialiased;
        -webkit-filter: drop-shadow(0px 0px 1px #14568F);
        filter: drop-shadow(0px 0px 1px #14568F);
    }

    .mix-date-loc {
        color: white;
        -webkit-font-smoothing: antialiased;
        -webkit-filter: drop-shadow(0px 1px 0px #14568F);
        filter: drop-shadow(0px 1px 0px #14568F);
        font-size: 1.6vh;
        margin-right: 5px;
    }
    #ddown-sm {
        color: #14568F;
    }

    .mix-title {
        font-size: 2vh;
    }

    .player:hover,
    .player:focus,
    .player:active {
        -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    }

    audio {
        width: 565px;
        margin-bottom: 0;
    }
    .player {
        /*display: flex;*/
        /*justify-content: space-between;*/
        border: 2px solid gray;
        margin-top: 1%;
        padding: 1.9%;
        width: 100%;
        background: #80BDC8;
        border-radius: 4px;
    }

    @media only screen and (max-width: 800px) {
        audio {
            width: 100%;
        }

        .player {
            width: 100%;
            height: 35%;
            padding: 1%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .title-audio {
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
    }
</style>
