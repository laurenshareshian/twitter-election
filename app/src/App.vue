<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/tweets">Tweets</router-link>
    </header>

    <router-view></router-view>

    <footer> 
      <img class="heart-image" :src="('/made-with-love.png')" />
      <p> Made @ alchemy code lab PDX</p>
    </footer>
    
  </div>
</template>



<script>
export default {
};
</script>

<style>
footer p {
  text-align: center !important;
}
</style>