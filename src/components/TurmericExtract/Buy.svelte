<script>
  let quantity = 1;
</script>

<style>
  .ProductDetails {
    width: 100%;
  }
  @media (min-width: 1024px) {
    .ProductDetails {
      display: flex;
      padding: 6rem 0;
      justify-content: space-between;
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

  @media (min-width: 1024px) {
    .ProductDetails-images {
      padding-right: 4rem;
    }
  }

  .ProductDetails .current-image {
    max-height: 80vh;
    width: auto;
  }

  input[type="number"] {
    width: 50px;
  }

  .quantity {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-column-gap: 1rem;
  }
</style>

<section class="bg-white overflow-x-hidden">

  <div id="product" />
  <div id="product-subscription" />
  <div class="ProductDetails max-width-section mx-auto relative">
    <div class="ProductDetails-images">
      <img
        src="../images/product-detail@2x.png"
        class="current-image"
        alt="Box of Daily Joy Turmeric Extract with a stick pack leaning against
        it" />
    </div>
    <div class="ProductDetails-description px2">
      <h2 class="caps font-alt m0 mb3 sm-caps">Power powder</h2>
      <p class="caps h1 m0">
        <span class="nowrap">Turmeric Extract</span>
        <br />
      </p>
      <p class="line-height-4 lead">
        Each box contains 30 stick packs. Daily Joy’s powerful curcumin extract
        helps your body find balance and reduce inflammation. Nothing
        artificial—just your best you.
      </p>
      <div class="my2">
        <div class="py2 quantity">
          <label for="quantity">Quantity</label>
          <input type="number" bind:value={quantity} id="quantity" />
        </div>
        <button
          class="snipcart-add-item Button"
          data-item-name="Turmeric Extract Subscription"
          data-item-id="turmeric-extract-subscription"
          data-item-url="/products"
          data-item-price="65.00"
          data-item-payment-interval="Month"
          data-item-payment-interval-count="1"
          data-item-shippable="true">
          Subscribe now!
        </button>
        <button
          class="snipcart-add-item"
          data-item-id="turmeric-extract"
          data-item-price="65.00"
          data-item-quantity={quantity}
          data-item-url="/products"
          data-item-description="Each box contains 30 stick packs. Daily Joy’s
          powerful curcumin extract helps your body find balance and reduce
          inflammation. Nothing artificial—just your best you."
          data-item-shippable="true"
          data-item-name="Turmeric Extract">
          Add to cart
        </button>
      </div>
    </div>

    <svg
      class="pink-dot absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.811 18.131">
      <path
        fill="#f3adba"
        d="M1846.576,1660.122s1.791-3.546,1.813-4.7.55-2.083-.331-4.188-.976-3.836-3.151-4.781-3.581-1.911-5.772-1.061a13.641,13.641,0,0,0-5.524,4.224,14.687,14.687,0,0,0-1.564,4.056s-1.011,4.377.732,6,2.568,3,5.691,3.466S1845.555,1661.013,1846.576,1660.122Z"
        transform="translate(-1831.755 -1645.063)" />
    </svg>
    <svg
      class="yellow-blob absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140.63 126.322">
      <path
        fill="#ffc870"
        d="M942.043,2067.855s-3.423,27.381,0,34.91S944.1,2117.6,957.787,2129s19.851,22.361,40.386,23.045,34.91,3.423,49.97-7.529,28.065-29.435,31.488-41.071,0-30.119,0-30.119-5.477-30.8-24.643-36.964c-12.592-4.047-21.639-8.39-34.214-9.56a83.552,83.552,0,0,0-22.6,1.346C971.477,2032.945,947.519,2059.55,942.043,2067.855Z"
        transform="translate(-940.522 -2026.535)" />
    </svg>
  </div>
</section>
