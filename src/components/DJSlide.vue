 <template>
    <figure id="hide-bg">           
        <img id="record" src="/circle3.png">
        <figcaption id="solo" class="description">dj mixes</figcaption>
    </figure>
 </template>

 <script>
export default {};
</script>
 
 <style scoped>
#hide-bg {
  background: none;
  border: none;
}

#record {
  -webkit-filter: drop-shadow(2px 3px 2px rgb(1, 200, 194));
  filter: drop-shadow(2px 3px 2px rgb(1, 200, 194));
  -webkit-animation-name: spin;
  -webkit-animation-duration: 5000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 5000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 5000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#solo {
  bottom: 0;
  -webkit-font-smoothing: antialiased;
  margin-left: -12px;
  font-family: "Gothic A1", sans-serif;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 32px;
  font-weight: bolder;
  min-width: 100%;
  color: rgba(1, 200, 194, 0.6);
  -webkit-filter: drop-shadow(1px 1px 1px rgb(255, 0, 255));
  filter: drop-shadow(1px 1px 1px rgb(255, 0, 255));
  transform: rotate(5deg);
}
</style>