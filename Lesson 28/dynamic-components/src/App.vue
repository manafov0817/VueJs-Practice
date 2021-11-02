<template>
  <div class="center-div">
    <keep-alive>
      <component v-bind:is="component"> </component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from "./Components/formOne.vue";
import formTwo from "./Components/formTwo.vue";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
  }
};
</script>

<style>
.center-div {
  width: 60%;
  margin: auto;
}
</style>
