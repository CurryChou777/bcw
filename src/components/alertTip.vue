<template>
  <div>
    <p :class="['alertBox' , alertShow ? 'on' : '']">{{alertText}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alertShow: false
    }
  },
  created () {

  },
  props: ['alertText'],
  methods: {
  },
  watch:{
    alertText : function(){
      if(this.alertText != ''){
        this.alertShow = true;
      }else{
        this.alertShow = false;
      }
    },
    alertShow: function(){
      if(this.alertShow){
        this.alertText = '';
//        setTimeout(function(){
//          console.log("aaa");
//          this.alertShow = false;
//          console.log("bbb");
//        },3000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alertBox{width:50%;line-height: 1.8rem;background: rgba(0,0,0,.5);color:#fff;position: fixed;top:50%;left:50%;padding:15px;border-radius: 5px;text-align: center;transform: translate(-50%, -50%);z-index: 999;display: none;font-size: 1.4rem;}
  .alertBox.on{display: block;}
</style>
