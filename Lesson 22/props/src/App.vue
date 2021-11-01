<template>
  <div id="app">
    <app-header></app-header>
    <app-coders v-bind:coders='coders'></app-coders>
    <app-footer></app-footer>
   </div>
</template>

<script>
import Header from "./Components/Header.vue";
import Footer from "./Components/Footer.vue";
import Coders from "./Components/Coders.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-coders": Coders
  },
  data() {
    return {
       coders: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style></style>
