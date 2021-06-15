<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <alan-button alan-key="39cba4c426066c57084918704b30f9092e956eca572e1d8b807a3e2338fdd0dc/stage"></alan-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import alanBtn from '@alan-ai/alan-button/dist/alanaicomponents.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    alanBtn
  }
}
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
