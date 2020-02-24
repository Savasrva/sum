<template>
  <div id="app">
    <Cleaning />
  </div>
</template>

<script>
import Cleaning from './components/Cleaning.vue';

export default {
  name: 'App',
  components: {
    Cleaning,
  },
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
