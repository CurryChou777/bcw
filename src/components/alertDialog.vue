<template>
  <div>
    <p class="alertBox" v-show="show">{{alertText}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      alertText: '提示文案'
    }
  },
  created () {

  },
  methods: {
    alert(text) {
      var that = this;
      if(!this.show){
        this.alertText = text;
        this.show = true;
        var timer = setTimeout(function(){
          that.show = false;
          clearTimeout(timer);
        },1500)
      }else{
        return false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alertBox{width:45%;line-height: 2rem;background: rgba(0,0,0,.5);color:#fff;position: fixed;top:50%;left:50%;padding:20px 15px;border-radius: 5px;text-align: center;transform: translate(-50%, -50%);z-index: 999;font-size: 1.4rem;animation: opacity2 1s forwards; -webkit-animation:opacity2 1s forwards;-moz-animation: opacity2 1s forwards;}
  @keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.7;}
    100%{opacity:1;}
  }
  @-webkit-keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.7;}
    100%{opacity:1;}
  }
  @-moz-keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.7;}
    100%{opacity:1;}
  }
</style>
