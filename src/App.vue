<template>
  <div id="app">
    <router-view />
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
  import MainTarBar from "./components/content/maintarbar/MainTarBar";
  export default {
    components:{
      MainTarBar
    }
  }
</script>

<style>
</style>
