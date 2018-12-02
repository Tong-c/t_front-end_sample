<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe735;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe720;</span>
      輸入城市/景點/遊玩主題</div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe731;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header {
  display: flex;
  line-height: 0.86rem;
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
    width: 1.24rem;
    float: right;
    text-align : center
  }
}
</style>
