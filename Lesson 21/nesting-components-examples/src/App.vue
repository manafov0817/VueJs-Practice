<template>
  <div id="app">
    <app-header></app-header>
    <app-coders></app-coders>
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
    return {};
  },
};
</script>

<style>
</style>
