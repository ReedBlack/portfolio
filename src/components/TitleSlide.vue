<template>
  <router-link to="/Music">
    <figure>           
        <img id="png" :src="image" >
        <figcaption id="bottom" class="description">{{title}}</figcaption>
    </figure>
  
  </router-link >
</template>

<script>
export default {
    name: "Slide",
    props: ["linkTo", "image", "title", "scene", "isPng"]
};
</script>

<style scoped>
#png {
  -webkit-filter: drop-shadow(5px 5px 4px #222);
  filter: drop-shadow(5px 5px 4px #222);
}

#photo {
  border: none;
  background: none;
  border-radius: 50%;
  -webkit-filter: drop-shadow(5px 5px 4px #222);
  filter: drop-shadow(5px 5px 4px #222);
}

#bottom {
  bottom: 0;
}
</style>