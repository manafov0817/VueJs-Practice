<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  //   name: "coders",
  data() {
    return {
      title: "Vue Learner",
    };
  },
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