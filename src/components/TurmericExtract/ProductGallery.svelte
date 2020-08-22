<style>
  .swiper-container {
    position: relative;
    width: 500px;
    height: 300px;
  }
</style>

<script>
  import Swiper from "swiper";

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
</script>

<!-- Initialize Swiper -->
<div class="swiper-container gallery-top">
  <div class="swiper-wrapper">
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"
    ></div>
  </div>
  <!-- Add Arrows -->
  <div class="swiper-button-next swiper-button-white"></div>
  <div class="swiper-button-prev swiper-button-white"></div>
</div>
<div class="swiper-container gallery-thumbs">
  <div class="swiper-wrapper">
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"
    ></div>
    <div
      class="swiper-slide"
      style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"
    ></div>
  </div>
</div>
