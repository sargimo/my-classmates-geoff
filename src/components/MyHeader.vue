<template>  
  <nav>
    <ul>
      <li><router-link v-bind:to="'/'" exact>Home</router-link></li>
      <li><router-link v-bind:to="'/geoff'" exact>Geoff's Screen</router-link></li>
    </ul>
  </nav> 
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
