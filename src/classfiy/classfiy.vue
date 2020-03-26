<template>
  <div class="classfiy">
    <classfiy-item class="classfiy-item" path="/goods">
      <div slot="goods" >商品</div>
    </classfiy-item>
    <classfiy-item class="classfiy-item"  path = '/star'>
      <div slot="goods" >评论</div>
    </classfiy-item>
    <classfiy-item class="classfiy-item"  path = '/seller'>
      <div slot="goods">商家</div>
    </classfiy-item>
  </div>
</template>

<script>
  import classfiyItem from './classfiy-item'

  export default {
    name: 'classfiy',
    components: {
      classfiyItem
    }
  }
</script>

<style>
  .classfiy{
    display: flex;
    height: 49px;
    background: rgb(184, 115, 115);
  }
  
  .classfiy-item{
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
</style>