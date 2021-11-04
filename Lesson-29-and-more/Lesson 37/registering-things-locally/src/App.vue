<template>
  <div >
    <!-- <add-blog> </add-blog> -->
    <show-blogs> </show-blogs>
  </div>
</template>

<script>
import showBlogs from "./Components/showBlogs.vue";
import addBlog from "./Components/addBlog.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs
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
