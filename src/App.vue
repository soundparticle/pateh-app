<template>
  <div id="app">
    <header>
      <h1>Pateh Parsons</h1>
    </header>
      <hr/>
    <nav>
      <section id="container">
          <router-link to="/" class="routerLinks"><p class="hidden">Home</p>
            <svgicon icon="home" width="35" height="30"></svgicon>
          </router-link>
          &nbsp;

          <router-link to="/art" class="routerLinks"><p class="hidden">Art</p>
            <svgicon icon="paint-board-and-brush" width="36" height="32"></svgicon>
          </router-link>
          &nbsp;

          <router-link to="/music" class="routerLinks"><p class="hidden">Music</p>
            <svgicon icon="music-player" width="30" height="32"></svgicon>
          </router-link>
          &nbsp;

          <router-link to="/literature" class="routerLinks"><p class="hidden">Literature</p>
            <svgicon icon="book-icon" width="40" height="34"></svgicon>
          </router-link>
          &nbsp;

          <router-link to="/about" class="routerLinks"><p class="hidden">About</p>
            <svgicon icon="information-sign" width="40" height="34"></svgicon>
          </router-link>
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
import './compiled-icons';


export default {

};

</script>

<style>

body {
  background-color: lightblue;
}

body, html {
  padding-left: 0;
  background-image: url(./assets/psychadelic-ocean.jpg);
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: auto;
  /* padding-bottom: 30%; */
}

h1 {
  text-align: center;
  font-size: 3em;
  /* padding-bottom: 1px; */
  padding-top: .1vh;
}

hr {
  border: solid 3px;
  margin-left: -101%;
  color: rgba(11, 29, 111, 0.523);
}

.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

#container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.routerLinks {
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