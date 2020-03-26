<template>
  <div class="classfiy-item" @click="itemclick">
    <div :style="activeStyle" class="shop"><slot name="goods"></slot></div>
    <!-- <div :style="activeStyle" class="shop"><slot name="star"></slot></div>
    <div :style="activeStyle" class="shop"><slot name="seller"></slot></div> -->
  </div>
</template>

<script>
  export default {
    name: 'classfiy-item',
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'deepPink'
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color: this.activecolor}: {}
      }
    },
    methods: {
      itemclick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
</style>