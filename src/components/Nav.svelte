<style>
  .SiteHeader-container {
    max-width: var(--max-content-width);
    margin: auto;
    display: grid;
    grid-template-columns: 100px auto;
    justify-content: space-between;
    column-gap: 1rem;
    padding: 2rem 2rem 0;
  }

  @media (min-width: 1024px) {
    .SiteHeader-container {
      padding-top: 4rem;
    }
  }

  .MainNavigation {
    display: grid;
    column-gap: 2rem;
  }

  @media (min-width: 740px) {
    .MainNavigation {
      grid-template-columns: repeat(5, auto);
    }
  }

  .MainNavigation a {
    font-size: 1rem;
    color: var(--grey);
    opacity: 0.65;
  }

  .MainNavigation a:hover {
    color: var(--orange);
    opacity: 1;
  }

  .MainNavigation a[aria-current] {
    opacity: 1;
  }

  .Emblem {
    display: block;
    width: 100px;
    flex: 1;
  }

  .Emblem path {
    fill: var(--grey);
  }
</style>

<script>
  export let segment;
  let firstName;
  import { onMount } from "svelte";
  import ProfileLink from "./ProfileLink.svelte";
</script>

<header class="SiteHeader">
  <div class="SiteHeader-container">
    <a
      class="Emblem"
      aria-current="{segment === undefined ? 'page' : undefined}"
      href="."
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.8 449.876">
        <title>Daily Joy</title>
        <g transform="translate(-24.791 -23.552)">
          <path
            d="M24.791,23.552l.15,271.057V294.6c0,98.607,80.221,178.825,178.825,178.825,78.474,0,148.945-52.466,171.371-127.584a178.793,178.793,0,0,0,7.454-51.241V23.552ZM85.62,228.279a43.116,43.116,0,1,1,43.113-43.115A43.167,43.167,0,0,1,85.62,228.279Zm64.2-166.355A40.622,40.622,0,1,1,109.2,102.545,40.668,40.668,0,0,1,149.825,61.924Zm0,93.081a52.5,52.5,0,0,0,10.656-1.092,37.276,37.276,0,0,0-2.787,22.476l-23.917-23.916A52.234,52.234,0,0,0,149.825,155.005Zm19.07,14.614a26.291,26.291,0,1,1,26.289,26.289A26.321,26.321,0,0,1,168.9,169.619Zm26.289-38.128c-.574,0-1.133.061-1.7.086a52.131,52.131,0,0,0,8.127-21.038,215,215,0,0,0,9.727,24.591A37.859,37.859,0,0,0,195.184,131.491ZM203.8,55.8,355.084,229.321c-38.853-3.479-74.907-22.655-103.024-54.864C223.867,142.174,207.064,100.585,203.8,55.8Zm2.177-16.986c40.421,2.76,78.065,22.236,107.115,55.559,29.074,33.345,46.044,76.589,48.705,123.159Zm-13.559-1.711-2.006-.022a233.25,233.25,0,0,0,2.359,35.423,51.763,51.763,0,0,0-49.477-21.97l14.184-14.184H192.4ZM99.9,118.594,87.566,106.262l10.25-10.25A50.72,50.72,0,0,0,99.9,118.594ZM94.142,130.94A54.274,54.274,0,0,0,37.666,158.4l-.047-83.985ZM37.7,211.973a55.317,55.317,0,0,0,16.072,17.888H37.706Zm102.875-26.809a54.722,54.722,0,0,0-.731-8.527l53.225,53.224H117.471A54.879,54.879,0,0,0,140.571,185.164Zm70.6,44.7-22.752-22.752a37.913,37.913,0,0,0,44.807-35.662c2.939,3.906,5.973,7.741,9.194,11.429,18.392,21.066,40.024,36.9,63.574,46.985ZM369.79,181.2c-7.677-35.687-23.689-68.437-47.05-95.234-19.936-22.868-43.7-39.628-69.619-49.61H369.79ZM139.374,36.353,78.515,97.212,37.609,56.306,37.6,36.353ZM357.965,356.12a163.709,163.709,0,0,1-15.2,28.939L290.93,356.12Zm-233.031,0L66.942,388.5A165.81,165.81,0,0,1,49.607,356.12ZM74.673,398.841l76.515-42.721h49.925v23.745l-84.888,55.718A167.3,167.3,0,0,1,74.673,398.841Zm126.44,61.719a164.893,164.893,0,0,1-72.333-17.9l72.333-47.478Zm12.8-66.377,72.232,44.176A165.466,165.466,0,0,1,213.914,460.2Zm84.3,36.542-84.3-51.555V356.12h50.762l70.607,39.423A167.95,167.95,0,0,1,298.21,430.725Zm64.664-88.544c-.094.314-.223.611-.319.925H44.988a165.414,165.414,0,0,1-7.246-48.5l-.029-51.942H366.256c.157,0,.313.012.47.014l.414.474.515-.448c.207,0,.412.017.619.017.5,0,1.01-.007,1.516-.012v51.9A166.161,166.161,0,0,1,362.874,342.181Z"
          ></path>
          <path
            d="M67.916,259.741H54.75v61.475H67.157c10.652,0,16.283-5.888,16.283-17.036V275.838C83.44,265.608,77.784,259.741,67.916,259.741Zm6.051,45.291c0,5.066-1.806,7.131-6.223,7.131H64.219V268.794h3.525c4.417,0,6.223,2.044,6.223,7.044Z"
          ></path>
          <path
            d="M117.113,308.2l2.53,13.019h9.508l-8.8-39.769-4.726-21.36-.077-.346h-7.865L94.2,320.68l-.12.536h9.507l2.313-11.9.217-1.116Zm-5.167-26.75,3.4,17.7h-7.535l3.4-17.7.37-1.924Z"
          ></path>
          <path d="M150.524,321.216V259.741h-9.473v61.475Z"></path>
          <path d="M192.92,321.216v-9.564h-17.03V259.741h-9.469v61.475Z"></path>
          <path
            d="M206.3,321.216h9.473V295.23l4.652-13.784,7.326-21.706H217.708l-6.23,21.706-.434,1.514-.435-1.514-6.234-21.706H194.327l7.326,21.706L206.3,295.23Z"
          ></path>
          <path
            d="M253.868,312.163a6.72,6.72,0,0,1-4.412-2.082l-.275-.282-7.41,5.988.308.346c3.281,3.715,7.162,5.594,11.536,5.594,9.915,0,15.1-7.672,15.1-15.248V259.741h-9.473v45.547C259.246,311.83,254.765,312.163,253.868,312.163Z"
          ></path>
          <path
            d="M298.7,321.727c7.381,0,14.851-5.238,14.851-15.248v-32c0-10.01-7.47-15.249-14.851-15.249s-14.851,5.239-14.851,15.249v32C283.853,316.489,291.324,321.727,298.7,321.727Zm0-52.933c2.6,0,5.378,1.494,5.378,5.685v32c0,4.19-2.779,5.684-5.378,5.684s-5.382-1.494-5.382-5.684v-32C293.322,270.288,296.1,268.794,298.7,268.794Z"
          ></path>
          <path
            d="M339.933,282.96l-6.668-23.22H323.217l11.978,35.49v25.986h9.473V295.23l11.977-35.49H346.6Z"
          ></path>
        </g>
      </svg>
    </a>
    <nav class="MainNavigation">
      <a
        aria-current="{segment === 'products' ? 'page' : undefined}"
        href="products"
        class="font-alt caps"
      >
        Products
      </a>
      <!-- <a
        aria-current="{segment === 'learn' ? 'page' : undefined}"
        href="."
        class="font-alt caps"
      >
        Learn
      </a> -->

      <a
        aria-current="{segment === 'our-story' ? 'page' : undefined}"
        href="our-story"
        class="font-alt caps"
      >
        Our story
      </a>

      <a
        aria-current="{segment === 'contact' ? 'page' : undefined}"
        href="contact"
        class="font-alt caps"
      >
        Contact
      </a>

      <a href="#cart" class="snipcart-checkout font-alt caps">My cart</a>

      <ProfileLink />

      <!-- <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a> -->
    </nav>
  </div>
</header>
