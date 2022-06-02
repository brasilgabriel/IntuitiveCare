<template>
    <Header></Header>
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
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #08c988;
    border-radius: 15px;
    border: 2px solid white;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Rubik', sans-serif;
  }
</style>
