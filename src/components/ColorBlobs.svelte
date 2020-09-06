<style>
  svg {
    vertical-align: top;
  }

  section {
    position: relative;
    padding: 8rem 2rem;
    background: var(--sand);
  }

  .content {
    position: relative;
  }

  .bg-l {
    left: 0;
    top: 10%;
    width: 10%;
    height: 20%;
  }

  .bg-br {
    position: absolute;
    bottom: -10%;
    right: 0;
    width: 30%;
    height: 40%;
  }
</style>

<section>
  <div class="bg-l absolute">
    <svg
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

  </div>

  <div class="bg-br absolute">
    <svg
      data-rellax-speed="1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151.061 132.879"
    >

      <g transform="translate(-882.938 -2020.12)">
        <path
          fill="#ffc870"
          d="M73.147,132.5c-3.169-.158-6.482-.334-9.974-.45-20.534-.684-26.7-11.636-40.386-23.045S10.466,90.3,7.043,82.765s0-34.91,0-34.91c5.476-8.305,29.434-34.91,56.129-39.7C78.7,5.365,88.908,6.516,98.5,9.18V131.387A48.671,48.671,0,0,1,91.9,132.5Z"
          transform="translate(935 2020)"
        ></path>
        <path
          fill="#ea6d30"
          d="M898.981,2051.062s6.4-1.731,7.809-3.086,3.155-1.725,4.616-5.493,3.421-5.978,1.939-10.177-2.015-7.338-5.664-9.405a22.425,22.425,0,0,0-11.7-2.715c-2.876.339-6.738,2.663-6.738,2.663s-6.454,3.826-6.306,8.234-.51,7.22,2.688,12.176S896.687,2050.693,898.981,2051.062Z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="content">
    <slot />
  </div>
</section>
