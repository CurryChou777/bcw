<template>
  <div>
    <p>this is cate</p>
    <p>{{msg}}</p>
    <router-link :to="{ path: 'cateList', query: { searchKey: 123 }}">搜索：百草味</router-link>
    <footer-box></footer-box>
  </div>
</template>

<script>
  import footerBox from 'components/footerBox'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      footerBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{font-size: 2rem;}
</style>
