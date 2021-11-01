<template>
  <footer>
    <p>
      {{ copyright }} {{title}}
    </p>
  </footer>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    }
  },
  data() {
    return {
      copyright: "Copyright 2021 M.Mahammad",
    };
  },
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