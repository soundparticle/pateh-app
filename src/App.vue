<template>
  <div id="app">
    <h1>Pateh Parsons</h1>

    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/art">Art</router-link>
      &nbsp;
      <router-link to="/music">Music</router-link>
      &nbsp;
      <router-link to="/literature">Literature</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
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

body {
  background-color: lightblue;
}

h1 {
  text-align: center;
}

nav {
  text-align: center;
}
</style>