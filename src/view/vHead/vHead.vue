<template>
  <div class="vHead">
    
  </div>
</template>

<script>
  import {getsellerdata} from '@/network/header'
  export default {
    name: 'vHead',
    data() {
      return {
        seller: {}
      }
    },
    created(){
      getsellerdata().then(res => {
        this.seller = res.data
        console.log(this.seller)
      })
    }
  }
</script>

<style>

</style>