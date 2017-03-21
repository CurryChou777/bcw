<template>
  <div>
    <p>this is home</p>
    <swiper :options="swiperTab" class="swiper-box">
      <swiper-slide class="swiper-item">1</swiper-slide>
      <swiper-slide class="swiper-item">2</swiper-slide>
      <swiper-slide class="swiper-item">3</swiper-slide>
      <swiper-slide class="swiper-item">4</swiper-slide>
      <swiper-slide class="swiper-item">4</swiper-slide>
      <swiper-slide class="swiper-item">5</swiper-slide>
      <swiper-slide class="swiper-item">5</swiper-slide>
      <swiper-slide class="swiper-item">6</swiper-slide>
      <swiper-slide class="swiper-item">6</swiper-slide>
    </swiper>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item"><img src="http://img2.vipbcw.com/2017/03/a407284fbb7cfabb2b3a266ac0c29a4d?imageView2/1/w/640/h/307" alt="..."></swiper-slide>
      <swiper-slide class="swiper-item"><img src="http://img2.vipbcw.com/2017/03/375440d08adef9933e25f681f35e9306?imageView2/1/w/640/h/307" alt="..."></swiper-slide>
      <swiper-slide class="swiper-item"><img src="http://img2.vipbcw.com/2017/03/375440d08adef9933e25f681f35e9306?imageView2/1/w/640/h/307" alt="..."></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <p @click="showConfirm()">是否删除购物车商品</p>
    <p @click="showConfirm2()">是否删除商品</p>
    <p @click="showAlert()">提示成功</p>
    <p @click="showAlert2()">提示错误</p>
    <footer-box></footer-box>
    <vConfirm ref='dialog'></vConfirm>
    <vAlert ref='alertDialog'></vAlert>
  </div>
</template>

<script>
  import footerBox from 'components/footerBox'
  import vConfirm from 'components/confirmDialog'
  import vAlert from 'components/alertDialog'
  import {homeTab,indexModuleData} from 'service/getData'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          autoplay: 5000,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true
        },
        swiperTab: {
          slidesPerView : 3.5
        }
      }
    },
    components: {
      footerBox,
      vConfirm,
      vAlert,
      swiper,
      swiperSlide
    },
    created () {
      homeTab().then(response => {
//        console.log(response)
      })
      indexModuleData(0).then(response => {
//        console.log(response)
      })
    },
    updated () {
    },
    mounted () {
    },
    methods: {
      showConfirm(){
        console.log("aaa");
        this.$refs.dialog.confirm({
          text:"提示文案",
          cancelButtonText:'删除'
        }).then((res) => {
          // 点击确定按钮的回调处理
          console.log(res);
          this.$refs.dialog.show = false;
        }).catch(() => {
          // 点击取消按钮的回调处理
          console.log("关闭弹窗")
        });
      },
      showConfirm2(){
        this.$refs.dialog.confirm({
          text:"提示文案删除商品",
          cancelButtonText:'取消'
        }).then((res) => {
          // 点击确定按钮的回调处理
          console.log("vbv");
          this.$refs.dialog.show = false;
        }).catch(() => {
          // 点击取消按钮的回调处理
          console.log("aaa")
        });
      },
      showAlert() {
        this.$refs.alertDialog.alert('加入购物车成功');
      },
      showAlert2() {
        this.$refs.alertDialog.alert('网络链接错误');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{font-size: 2rem;}
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
    width:30%;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
    width:30%;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    width:30%;
  }
  .tab-content{width:100%;overflow: hidden;}
  .tab-content ul{width:900px;height:30px;line-height: 30px;}
  .tab-content li{width:100px;border-right:1px solid #000;float:left;}

</style>
