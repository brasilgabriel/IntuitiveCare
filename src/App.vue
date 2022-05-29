<template>
    <Interface></Interface>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import Interface from './components/Interface.vue';

@Options({
  components: {
    Header,
    Interface
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: black;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #08c988;
    border-radius: 10px;
    border: 5px solid black;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Rubik', sans-serif;
  }
</style>
