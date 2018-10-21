<template>
  <div id="app">
    <header>
      <h1>Pateh Parsons</h1>
    </header>
      <hr/>
    <nav>
      <section id="container">
          <router-link to="/" class="routerLinks"><p class="hidden">Home</p>
            <svgicon icon="home" width="24" height="20"></svgicon>
          </router-link>
          &nbsp;
          <router-link to="/art" class="routerLinks">Art</router-link>
          &nbsp;
          <router-link to="/music" class="routerLinks">Music</router-link>
          &nbsp;
          <router-link to="/literature" class="routerLinks">Literature</router-link>
          &nbsp;
          <router-link to="/about" class="routerLinks">About</router-link>
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
import './compiled-icons/home';


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
  /* padding-bottom: 30%; */
}

h1 {
  text-align: center;
  font-size: 3em;
  padding-top: .1vh;
}

hr {
  border: solid 2px;
  margin-left: -101%;
  color: rgba(0, 255, 174, 0.714);
}

.hidden {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
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