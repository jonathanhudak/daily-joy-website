<style>
  .ProductDetails {
    width: 100%;
    padding-bottom: 2rem;
  }
  @media (min-width: 740px) {
    .ProductDetails {
      display: grid;
      padding: 6rem 0;
      justify-content: space-between;
      grid-template-columns: 50% auto;
      grid-gap: 2rem;
    }
  }

  .ProductDetails-description {
    margin-left: auto;
  }

  .ProductDetails .pink-dot {
    right: 90px;
    height: 40px;
    top: 1rem;
  }

  .ProductDetails .yellow-blob {
    right: -151px;
    height: 160px;
    top: -83px;
  }

  .single-purchase {
    color: var(--orange);
    text-decoration: underline;
    font-size: 1.25rem;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  input[type="number"] {
    width: 50px;
  }

  .quantity {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-column-gap: 1rem;
    align-items: center;
  }

  .ImageGallery {
    max-width: 300px;
    margin: 0 1rem;
  }

  @media (min-width: 1000px) {
    .ImageGallery {
      max-width: 600px;
    }
  }

  .slide-content {
    position: relative;
  }

  .ImageGallery .slide-content img {
    max-width: 100%;
    height: auto;
  }

  .imageThumbnail {
    border: 1px solid transparent;
  }

  .activeSlideThumb {
    border-color: var(--orange);
  }

  input#quantity {
    padding: 0.5rem;
  }

  .buy-buttons {
    max-width: 300px;
    text-align: center;
  }

  .br-dots {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 150px;
  }

  @media (min-width: 1000px) {
    .br-dots {
      position: absolute;
      bottom: -30px;
      right: -200px;
      width: 250px;
    }
  }
</style>

<script>
  import Carousel from "@beyonk/svelte-carousel";
  let carousel;
  let quantity = 1;
  let images = [
    {
      path: "images/turmeric-gallery/main@2x.png",
      alt: "turmeric extract box",
    },
    {
      path: "images/turmeric-gallery/box-front@2x.png",
      alt: "turmeric extract box front",
    },
    {
      path: "images/turmeric-gallery/box-back@2x.png",
      alt: "turmeric extract box back",
    },
    { path: "images/turmeric-gallery/stick-pack@2x.jpg", alt: "stick pack" },
    {
      path: "images/turmeric-gallery/Side1_DailyJoyTurmericExtractLabel@2x.png",
      alt: "turmeric extract box side 1",
    },
    {
      path: "images/turmeric-gallery/Side2_suggested_use_DailyJoy@2x.png",
      alt: "turmeric extract box side 2",
    },
    {
      path: "images/turmeric-gallery/glass-ingredients@2x.jpg",
      alt: "turmeric extract ingredients whole in a glass",
    },
    {
      path: "images/turmeric-gallery/hand-stir@2x.jpg",
      alt: "turmeric extract in a glass being hand stirred with a stick",
    },
  ];
  let currentSlide = 0;

  function handleCarouselChange(event) {
    currentSlide = event.detail.currentSlide;
  }
</script>

<section class="bg-white overflow-x-hidden relative">

  <div id="product"></div>
  <div id="product-subscription"></div>

  <div class="ProductDetails max-width-section mx-auto relative">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83.74 90.74"
      class="br-dots"
    >
      <g transform="translate(-1821 -1939.885)">
        <path
          fill="#f1ede4"
          d="M1837.331,2030.625s5.793-1.4,7-2.767,2.792-1.635,3.869-5.6,2.727-6.216,1.048-10.867-2.4-8.086-5.93-10.589-8.385-3.95-11.021-3.794-6.039,2.387-6.039,2.387-5.692,3.667-5.232,8.445.057,7.773,3.379,13.369S1835.182,2030.057,1837.331,2030.625Z"
        ></path>
        <path
          fill="#f1ede4"
          d="M1901.028,1947.6a7.72,7.72,0,0,0,1.946-.769,2.8,2.8,0,0,0,1.151-1.369c.364-.939.852-1.49.483-2.536s-.5-1.829-1.412-2.344a5.577,5.577,0,0,0-2.915-.677,5.412,5.412,0,0,0-1.679.663s-1.609.954-1.572,2.053a4.631,4.631,0,0,0,.67,3.035A5.713,5.713,0,0,0,1901.028,1947.6Z"
        ></path>
      </g>
    </svg>

    <div class="ImageGallery">
      <Carousel
        perPage="{1}"
        bind:this="{carousel}"
        on:change="{handleCarouselChange}"
      >
        {#each images as image, i}
          <div class="slide-content">
            <img src="{image.path}" alt="{image.alt}" />
          </div>
        {/each}
      </Carousel>
      {#each images as image, i}
        <img
          tabindex="0"
          class="imageThumbnail"
          class:activeSlideThumb="{currentSlide === i}"
          src="{image.path}"
          alt="{image.alt}"
          height="67px"
          on:click="{() => {
            carousel.go(i);
          }}"
        />
      {/each}
    </div>
    <div class="ProductDetails-description px2">
      <h2 class="caps font-alt m0 mb3 sm-caps">Power powder</h2>
      <p class="caps h1 m0 nowrap">Turmeric Extract</p>

      <p class="color-orange lead">
        <strong class="regular">Subscription: $49</strong>
        <br />
        <strong class="regular">One time order: $58</strong>
      </p>
      <p class="line-height-4 lead">
        Each box contains 30 stick packs. Daily Joy’s powerful curcumin extract
        helps your body find balance and reduce inflammation. Nothing
        artificial—just your best you.
      </p>
      <div class="my2">
        <div class="py2 quantity">
          <label for="quantity">Quantity</label>
          <input type="number" bind:value="{quantity}" id="quantity" />
        </div>
        <div class="buy-buttons">
          <div class="my2">
            <button
              class="snipcart-add-item Button Button-action"
              data-item-name="Turmeric Extract Subscription"
              data-item-id="turmeric-extract-subscription"
              data-item-url="/products"
              data-item-price="49.00"
              data-item-payment-interval="Month"
              data-item-payment-interval-count="1"
              data-item-shippable="true"
            >
              Subscribe now!
            </button>
          </div>

          <button
            class="snipcart-add-item single-purchase"
            data-item-id="turmeric-extract"
            data-item-price="58.00"
            data-item-quantity="{quantity}"
            data-item-url="/products"
            data-item-shippable="true"
            data-item-name="Turmeric Extract"
          >
            One time purchase
          </button>
        </div>
      </div>
    </div>

    <svg
      class="pink-dot absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.811 18.131"
    >
      <path
        fill="#f3adba"
        d="M1846.576,1660.122s1.791-3.546,1.813-4.7.55-2.083-.331-4.188-.976-3.836-3.151-4.781-3.581-1.911-5.772-1.061a13.641,13.641,0,0,0-5.524,4.224,14.687,14.687,0,0,0-1.564,4.056s-1.011,4.377.732,6,2.568,3,5.691,3.466S1845.555,1661.013,1846.576,1660.122Z"
        transform="translate(-1831.755 -1645.063)"
      ></path>
    </svg>
    <svg
      class="yellow-blob absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140.63 126.322"
    >
      <path
        fill="#ffc870"
        d="M942.043,2067.855s-3.423,27.381,0,34.91S944.1,2117.6,957.787,2129s19.851,22.361,40.386,23.045,34.91,3.423,49.97-7.529,28.065-29.435,31.488-41.071,0-30.119,0-30.119-5.477-30.8-24.643-36.964c-12.592-4.047-21.639-8.39-34.214-9.56a83.552,83.552,0,0,0-22.6,1.346C971.477,2032.945,947.519,2059.55,942.043,2067.855Z"
        transform="translate(-940.522 -2026.535)"
      ></path>
    </svg>

  </div>

</section>
