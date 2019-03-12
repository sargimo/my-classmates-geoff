<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view >
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import Geoff from "./components/geoff/Geoff";
import Home from "./components/Home"

export default {
  name: "App",
  components: {
    MyHeader,
    Home,
    Geoff
  }
};
</script>

<style scoped>
</style>
