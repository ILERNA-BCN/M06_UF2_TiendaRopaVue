<template>
  <div>
    <PHeader />
    <router-view />
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';

export default {
  name: 'App',
  components: {
    PHeader,
    PFooter,
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
