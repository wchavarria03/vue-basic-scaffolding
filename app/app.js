// require('./favicon.ico'); // Tell webpack to load favicon.ico
import Vue from 'vue';
import MainComponent from './components/main-component/main-component.vue';

import './styles/index.css';

new Vue({
  el: '#app',
  components: {
    MainComponent
  }
});
