<template>
  <div id="app">
    <vHead></vHead>
    <classfiy></classfiy>
    <router-view/>
  </div>
</template>

<script>
  import classfiy from '@/classfiy/classfiy'
  import vHead from '@/view/vHead/vHead'

  export default {
    name: 'App',
    components: {
      classfiy,
      vHead
    }
  }
</script>

<style>
  @import 'assets/css/reset.css';
</style>
