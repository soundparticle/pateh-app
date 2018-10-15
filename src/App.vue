<template>
  <div id="app">
    <h1>Pateh Parsons</h1>

    <nav>
      <router-link to="/">Home</router-link>
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