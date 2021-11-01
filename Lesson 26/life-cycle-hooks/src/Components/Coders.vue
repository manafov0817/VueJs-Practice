<template>
  <div id="coders">
    <ul>
      <li
        v-for="coder in coders"
        :key="coder.name"
        v-on:click="coder.show = !coder.show"
      >
        <h2>{{ coder.name }}</h2>
        <h3 v-show="coder.show">{{ coder.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteCoder">Delete Coder</button>
  </div>
</template>

<script>
export default {
  props: {
    coders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteCoder: function() {
      this.coders.pop();
    }
  },
  beforeCreate() {
    alert("before create");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("before mount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  }
};
</script>

<style scoped>
#coders {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
