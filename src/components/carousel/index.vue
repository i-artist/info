<template>
  <div id="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="http://dreamwq.com/wp-content/uploads/2016/03/img02.jpg" alt="">
                    
                </div>
                <div class="swiper-slide">
                    <img src="http://dreamwq.com/wp-content/uploads/2016/02/img01.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://dreamwq.com/wp-content/uploads/2016/01/tran.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://dreamwq.com/wp-content/themes/xd/timthumb.php?src=http://dreamwq.com/wp-content/themes/xd/images/random/3.jpg&h=160&w=240&zc=1" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import cursor1 from '@/image/carousel1.jpg'
export default {
  name:'zgCarousel',

  data(){
      return{
          swiperOption:{
              notNextTick: true,
              autoplay:'3000'
          }
      }
  },
  created(){
        this.swiperInit();
  },
  mounted(){
        this.swiperInit();
  },
  methods:{
        swiperInit(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay:3000,
                },
                effect : 'cube',
                // cubeEffect: {
                //     slideShadows: true,
                //     shadow: true,
                //     shadowOffset: 100,
                //     shadowScale: 0.6
                // },
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                slidesPerView: 3,
                centeredSlides: true,
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                // scrollbar: {
                // el: '.swiper-scrollbar',
                // },
            })
        }
  }
}
</script>
<style scoped>
#swiper{
    position:relative;
    height:390px;
}
.swiper-container{
    min-width: 1000px;
    height:390px;
    max-width: 1200px;
}
.swiper-slide img{
    width:100%;
    height:100%;
}
@keyframes fadeinright{
	from{transform: translateX(500px);opacity: 0;}
	to{transform: translate(0);opacity: 1;}
}
</style>
