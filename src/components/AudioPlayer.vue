<template>
    <div class="player">
        <div class=title-audio>
            <h1 class="mix-title">{{title}}</h1>
            <audio :src="soundSource" controls></audio>
        </div>
        <h3 class="mix-date-loc">{{date}}</h3>
    </div>
</template>

<script>
  export default {
    props: ["soundSource", "date", "additionalInfo", "title"]
  };
</script>

<style>
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
        margin-left: -400px;
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
        /*-webkit-transform: scale(1.02);*/
        /*-moz-transform: scale(1.02);*/
        /*transform: scale(1.02);*/
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
        /*margin-left: -1%;*/
        padding: 1%;
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

        .mix-date-loc {
            display: none;
        }
    }
</style>
