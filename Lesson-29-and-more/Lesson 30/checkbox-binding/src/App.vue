<template>
  <div id="add-blog">
    <add-blog> </add-blog>
  </div>
</template>

<script>
import addBlog from "./Components/addBlog.vue";

export default {
  components: {
    "add-blog": addBlog
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}
</style>
