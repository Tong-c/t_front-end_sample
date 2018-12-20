<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe735;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe720;</span>
      輸入城市/景點/遊玩主題</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
      <span class="iconfont">&#xe731;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color:#fff
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align : center;
      font-size : .4rem;
    }
  }

  .header-input {
    flex: 1;
    height : .64rem
    line-height : .64rem
    margin-top : .12rem
    margin-left : .2rem
    padding-left : .2rem
    background : #fff
    border-radius : .1rem
    color : #ccc
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align : center
    color: #fff;
  }
}
</style>
