<template>
    <div class="wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/b7/1e9c4ca462741f02.jpg_750x200_842d5261.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/e0/7aed5dde53dabe02.jpg_750x200_92afe34c.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrap >>> .swiper-pagination-bullet-active
        background : #fff
    .wrap {
        overflow : hidden;
        width : 100%;
        height : 0;
        padding-bottom : 31.25%;
        background : #eee;
    }
        .swiper-img {
            width : 100%
        }
</style>
