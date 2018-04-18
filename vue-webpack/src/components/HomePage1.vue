<template>
  <div>
    <div v-if="loggedIn">
      <todo/>
    </div>
    <div v-else>
      <home-page/>
    </div>
  </div>
</template>

<script>
 import HomePage from './HomePage';
 import Todo from './Todo';
 export default {
   name: 'HomePage1',
   components: {HomePage,Todo},
   computed: {
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
   },
 }
</script>

<style scoped>
</style>