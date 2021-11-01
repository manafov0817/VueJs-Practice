<template>
  <footer>
    <p v-on:click="changeTitle">{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Copyright 2021 M.Mahammad"
    };
  },
  methods: {
    changeTitle: function() {
      // this.$emit('changeTitle', 'Ma Maaan');
      this.title = "Footer's boy";
      bus.$emit("titleChanged", "Footer's boy");
    }
  },
  created() {
    bus.$on("titleChanged", data => (this.title = data));
  }
};
</script>

<style scoped>
footer {
  border: 2px solid #03045e !important;
  border-radius: 5px;
  background: #023e8a;
  padding: 6px;
}
p {
  font-family: "Roboto", sans-serif;
  color: #caf0f8;
  text-align: center;
}
</style>
