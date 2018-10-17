<template>
  <div id="app">
    <header>
      <h1>Pateh Parsons</h1>
    </header>
      <hr/>
    <nav>
      <section id="container">
          <router-link to="/" class="routerLink">Home</router-link>
          &nbsp;
          <router-link to="/art" class="routerLink">Art</router-link>
          &nbsp;
          <router-link to="/music" class="routerLink">Music</router-link>
          &nbsp;
          <router-link to="/literature" class="routerLink">Literature</router-link>
          &nbsp;
          <router-link to="/about" class="routerLink">About</router-link>
          &nbsp;
      </section>
      <!-- <hr/> -->
    </nav>

    <div>
      <p></p>
    </div>

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
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: auto;
  padding-bottom: 30%;
}

h1 {
  text-align: center;
  font-size: 3em;
  padding-top: 6vh;
}

hr {
  border: solid 2px;
  color: rgba(0, 255, 174, 0.714);
}

#container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.routerLink {
  color: black;
  font-size: 1.2em;;
}

@media (min-width: 768px) {
  #container {
    display: flex;
    margin-left: 130px;
    margin-right: 130px;
    flex-direction: row;
    justify-content: space-evenly;
  }

}

</style>