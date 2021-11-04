<template>
  <div>
    <!-- <add-blog> </add-blog> -->
    <show-blogs> </show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import showBlogs from "./Components/showBlogs.vue";
import addBlog from "./Components/addBlog.vue";
import listBlogs from "./Components/listBlogs.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs
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
