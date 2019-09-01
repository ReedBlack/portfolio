<template>
  <div id="app">
    <transition name="router-anim" 
    enter-active-class="animated bounceInDown"
    leave-active-class="animated hinge" 
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

.home {
  height: 100%;
  width: 100%;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b5eed03-3715-42fd-8716-9b189aa554ad/dancgdl-62c18593-7e18-4d8e-a7c0-42e34ac515c8.jpg/v1/fill/w_1280,h_853,q_75,strp/jungle_background_by_papillonstudio_dancgdl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODUzIiwicGF0aCI6IlwvZlwvNWI1ZWVkMDMtMzcxNS00MmZkLTg3MTYtOWIxODlhYTU1NGFkXC9kYW5jZ2RsLTYyYzE4NTkzLTdlMTgtNGQ4ZS1hN2MwLTQyZTM0YWM1MTVjOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g3bCY1GwWglBnp6LuEEpndIGzWTSxHNBnkJIDyf6L34");
  position: fixed;
  background-size: cover;
}

.music {
  height: 100%;
  width: 100%;
  background-image: url("/clouds.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
}

.projects {
  height: 100%;
  width: 100%;
  background-image: url("/cooling-lava.jpg");
  background-position: center;
  position: fixed;
  background-size: cover;
  z-index: 1000000;
}
.footer {
  align-self: flex-end;
  bottom: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  position: fixed;
}

a:hover {
  border-bottom: none;
}

transition {
  animation-duration: 3000;
}
</style>
