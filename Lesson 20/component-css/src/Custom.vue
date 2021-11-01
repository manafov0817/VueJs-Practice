<template>
  <ul>
    <li v-for="coder in coders">
      {{ coder }}
    </li>
  </ul>
</template>

<script>
export default {
  //   name: "coders",
  data() {
    return {
      coders: [
        "Mahammad",
        "Yasemen",
        "Togrul",
        "Fikret",
        "Elnur",
        "Qismet",
        "Temir",
        "Ceyhun",
      ],
    };
  },
};
</script>
 