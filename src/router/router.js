import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const cart = r => require.ensure([], () => r(require('../page/cart/cart')), 'cart')
const cate = r => require.ensure([], () => r(require('../page/cate/cate')), 'cate')
const cateList = r => require.ensure([], () => r(require('../page/cate/cateList')), 'cateList')
const goods = r => require.ensure([], () => r(require('../page/cate/goods')), 'goods')
const substance = r => require.ensure([], () => r(require('../page/substance/substance')), 'substance')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
const collectList = r => require.ensure([], () => r(require('../page/user/collectList')), 'collectList')
const coupList = r => require.ensure([], () => r(require('../page/user/coupList')), 'coupList')
const integral = r => require.ensure([], () => r(require('../page/user/integral')), 'integral')
const userInfo = r => require.ensure([], () => r(require('../page/user/userInfo')), 'userInfo')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('../page/login/register')), 'register')
const findPassword = r => require.ensure([], () => r(require('../page/login/findPassword')), 'findPassword')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      component: home
    },
    // 搜索
    {
      path: '/search',
      component: search
    },
    // 购物车
    {
      path: '/cart',
      component: cart
    },
    // 吃乎
    {
      path: '/substance',
      component: substance
    },
    // 分类
    {
      path: '/cate',
      component: cate
    },
    // 分类列表
    {
      path: '/cateList',
      component: cateList
    },
    // 商品详情
    {
      path: '/goods',
      component: goods
    },
    // 个人中心
    {
      path: '/user',
      component: user
    },
    // 收藏
    {
      path: '/collectList',
      component: collectList
    },
    // 优惠券
    {
      path: '/coupList',
      component: coupList
    },
    // 积分
    {
      path: '/integral',
      component: integral
    },
    // 个人资料
    {
      path: '/userInfo',
      component: userInfo
    },
    // 登录
    {
      path: '/login',
      component: login
    },
    // 注册
    {
      path: '/register',
      component: register
    },
    // 找回密码
    {
      path: '/findPassword',
      component: findPassword
    }
  ]
}]
