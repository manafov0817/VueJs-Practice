<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
// Imports
import formHelper from "./Components/formHelper.vue";

export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {
      title: "This is dynamic slot title"
    };
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for submitting");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
