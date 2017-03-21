<template>
  <div class="footer-box">
    <ul>
      <!--<router-link v-for="item in bottomIcon" to="/home" tag="li">-->
        <!--<img v-if="$route.path == '/home'" :src="item.image_url"/>-->
        <!--<img v-else :src="item.image_url_select"/>-->
        <!--<p>{{item.nav_name}}</p>-->
      <!--</router-link>-->
      <router-link to="/home" tag="li">
        <img v-if="$route.path == '/home'"
             src="http://img2.vipbcw.com/2017/03/6a023b4f43a70a59f2a07febadf51def"/>
        <img v-else
             src="http://img2.vipbcw.com/2017/03/196d573ec3b763c697fd68910a09a19c"/>
        <p>首页</p>
      </router-link>
      <router-link to="/cate" tag="li" >
        <img v-if="$route.path == '/cate'"
             src="http://img2.vipbcw.com/2017/03/c9cfbd1e82e80813f5e92ebbfe6ac19d"/>
        <img v-else
             src="http://img2.vipbcw.com/2017/03/4b0d1a54aa0c757b9a9289889792dacd"/>
        <p>分类</p>
      </router-link>
      <router-link to="/substance" tag="li">
        <img v-if="$route.path == '/substance'"
             src="http://img2.vipbcw.com/2017/03/9e99665a2b4dc5747f031845c6838e2e"/>
        <img v-else
             src="http://img2.vipbcw.com/2017/03/879081bf4dc4c4adfa0ed53f256821fc"/>
        <p>吃乎</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <img v-if="$route.path == '/cart'"
             src="http://img2.vipbcw.com/2017/03/c5537d00ae98193a23d79e04cffca10e"/>
        <img v-else
             src="http://img2.vipbcw.com/2017/03/9df933139fd2e56d3ec17942ca6ed544"/>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <img v-if="$route.path == '/user'"
             src="http://img2.vipbcw.com/2017/03/fe41c69f7fdf7ea1546a3a6d627d9195"/>
        <img v-else
             src="http://img2.vipbcw.com/2017/03/58d3978b520113c57bb0b0a256e44d9d"/>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {getBottomBanner} from 'service/getData'
  import {setSessionStore,getSessionStore} from 'plugins/mUtils'
export default {
  data () {
    return {
      bottomIcon: []
    }
  },
  created () {
      if(getSessionStore("bottomIcon") == null){
        getBottomBanner().then(promise => {
          this.bottomIcon = promise.data.result_data.banner;
          setSessionStore("bottomIcon",promise.data.result_data);
        })
      }else{
        this.bottomIcon = JSON.parse(getSessionStore('bottomIcon')).banner;
      }

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-box{position: fixed;width:100%;height:50px;left:0;bottom:0;z-index: 888;background:#fff;}
  .footer-box ul{display: flex;}
  .footer-box ul li{flex: 1;text-align: center;}
  .footer-box ul li.active{color:#f00;}
  .footer-box ul li img{width:35%;}
</style>
