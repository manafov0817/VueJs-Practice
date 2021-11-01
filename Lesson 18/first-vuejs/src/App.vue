<template>
  <div id="app">
     <h1>  {{title}}   </h1>

<p> {{greeting()}}  </p>
  </div>
</template>

<script>
export default {
 data(){
   return{
     title:'Your first vue changings'
   }   
 },
 methods: {
  greeting:function(){
    return 'hello booy';
  } 
 }
}
</script>

 