 <template>
    <figure id="hide-bg">
                
        <img id="photo" src="/me.jpg">
        <figcaption id="me" class="description">about me</figcaption>

    </figure>
 </template>

 <style scoped>
#photo {
  border: none;
  background: none;
  border-radius: 50%;
  -webkit-filter: drop-shadow(5px 5px 4px #222);
  filter: drop-shadow(5px 5px 4px #222);
}

#me {
  bottom: 0;
}
</style>