<template>
  <div id="app">
    <h1>Pateh Parsons</h1>

    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/">Art</router-link>
      &nbsp;
      <router-link to="/">Music</router-link>
      &nbsp;
      <router-link to="/">Literature</router-link>
      &nbsp;
      <router-link to="/">Abhout</router-link>
      &nbsp;
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

};
</script>

<style>

h1 {
  text-align: center;
}

nav {
  text-align: center;
}
</style>