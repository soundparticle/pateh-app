<template>
  <div id="app">
    <header>
      <h1>Pateh Parsons</h1>
    </header>
      <hr/>
    <nav>
      <section id="container">
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
      </section>
      <hr/>
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

body {
  padding-left: 0;
  background-image: url(./assets/psychadelic-ocean.jpg);
  background-size: cover;
  width: 100%;
  height: auto;
  padding-bottom: 30%;
}

h1 {
  text-align: center;
}

#container {
  margin-left: 130px;
  margin-right: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


</style>