import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Art from './components/Art.vue';
import Music from './components/Music.vue';
import Literature from './components/Literature.vue';
import About from './components/About.vue';



export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/art', component: Art },
    { path: '/music', component: Music },
    { path: '/literature', component: Literature },
    { path: '/about', component: About }
  ]
});