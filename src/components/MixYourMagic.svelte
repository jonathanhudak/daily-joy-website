<style>
  .Story-Content {
    order: 2;
    padding: 0 2rem;
    margin: auto;
    position: relative;
  }

  .image {
    order: 1;
    position: relative;
    z-index: 2;
    max-width: 400px;
    margin: 0 2rem;
  }

  .image img {
    max-width: 100%;
    height: auto;
  }

  .Story-Section-A {
    /* background-image: url("./images/story-section-A-background.svg"); */
    background-size: auto 100%;
    background-position: 0 340px;
    background-repeat: no-repeat;
    padding-bottom: 300px;
    position: relative;
  }

  @media (min-width: 1000px) {
    .wrapper {
      display: flex;
    }

    .Story-Section-A {
      background-size: cover;
      background-position: center;
      padding-top: 4rem;
      padding-bottom: 20rem;
    }
  }

  .Story-Section-A .Story-Content {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: var(--max-content-width);
  }

  .Story-Section-A .Story-Copy {
    max-width: 500px;
    margin-left: auto;
  }

  @media (min-width: 1024px) {
    .Story-Section-A .Story-Copy {
      bottom: 0;
      margin-right: 0;
    }
  }

  .Story-Section-A .bg-br {
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 30%;
  }

  @media (min-width: 1000px) {
    .Story-Section-A .bg-br {
      bottom: 0;
      width: 20%;
    }
  }

  .Story-Section-A .bg-l {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100px;
  }

  @media (min-width: 1000px) {
    .Story-Section-A .bg-l {
      top: 20%;
      width: 200px;
    }
  }
</style>

<div class="Story-Section Story-Section-A">
  <div class="wrapper max-width-section mx-auto">
    <div class="Story-Content">
      <div class="Story-Copy">
        <p class="caps font-alt m0 mb3 line-height-4">It's easy</p>
        <p class="caps h1 m0">Mix your magic.</p>
        <p class="line-height-4 lead">
          Enjoy Daily Joy in your favorite beverage like water, juice,
          smoothies, or yogurt. Our powerful and nutritious drink mix doesn’t
          need added sugar.
        </p>
        <p class="line-height-4 lead">
          We’ve added organic ginger, lemon, papaya, amla berry, and mango so
          it’s naturally delicious.
        </p>
      </div>
    </div>
    <div class="image">
      <img
        src="images/product-hero@2x.jpg"
        alt="Box of Daily Joy Turmeric Extract on a glossy surface"
      />
    </div>

  </div>
  <svg
    class="bg-l rellax"
    data-rellax-speed="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 89.593 247.288"
  >
    <path
      fill="#f3adba"
      d="M479.691,2086.834l30.111-9.445s42.059-20.282,50.553-55.321c3.49-14.394,18.216-62.741,0-90.4s-18.02-27.66-22.5-30.358-2.124-4.048-10.706-8.1-20.02-17.74-20.02-17.74l-4.79-10.142s-2.7-9.9-6.072-13.271-4.812-10.489-16.573-12.513Z"
      transform="translate(-479.691 -1839.546)"
    ></path>
  </svg>

  <svg
    class="bg-br rellax"
    data-rellax-speed="1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 151.061 132.879"
  >

    <g transform="translate(-882.938 -2020.12)">
      <path
        fill="#ffc870"
        class="a"
        d="M73.147,132.5c-3.169-.158-6.482-.334-9.974-.45-20.534-.684-26.7-11.636-40.386-23.045S10.466,90.3,7.043,82.765s0-34.91,0-34.91c5.476-8.305,29.434-34.91,56.129-39.7C78.7,5.365,88.908,6.516,98.5,9.18V131.387A48.671,48.671,0,0,1,91.9,132.5Z"
        transform="translate(935 2020)"
      ></path>
      <path
        fill="#ea6d30"
        class="b"
        d="M898.981,2051.062s6.4-1.731,7.809-3.086,3.155-1.725,4.616-5.493,3.421-5.978,1.939-10.177-2.015-7.338-5.664-9.405a22.425,22.425,0,0,0-11.7-2.715c-2.876.339-6.738,2.663-6.738,2.663s-6.454,3.826-6.306,8.234-.51,7.22,2.688,12.176S896.687,2050.693,898.981,2051.062Z"
      ></path>
    </g>
  </svg>
</div>
