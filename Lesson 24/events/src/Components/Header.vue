<template>
  <header>
    <h1 v-on:click="changeTitle">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },

  data() {
    return {
      // title: "Vue Learner"
    };
  },

  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', 'Hell Yeah');
    }
  }
};
</script>

<style scoped>
header {
  border: 2px solid #03045e !important;
  border-radius: 5px;

  background: #023e8a;
  padding: 10px;
}

h1 {
  font-family: "Roboto", sans-serif;

  color: #caf0f8;
  text-align: center;
}
</style>
