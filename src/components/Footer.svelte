<style>
  .SiteFooter {
    padding: 2rem;
    color: var(--white);
  }

  .SiteFooter-container {
    max-width: var(--max-content-width);
    margin: auto;
  }

  .Emblem-alt {
    width: 70px;
    display: block;
    margin-bottom: 4rem;
  }

  .Emblem-alt path {
    fill: white;
  }

  .Social {
    display: grid;
    grid-template-columns: repeat(2, 3rem);
    gap: 1rem;
    padding: 1rem 0;
  }

  .Social a:hover svg path {
    fill: var(--beige);
  }

  .Social svg {
    width: 3rem;
    height: 3rem;
  }
  .Social svg path {
    fill: var(--white);
  }

  .EmailSignup-input {
    padding: 1rem;
    border: none;
    margin-bottom: 1rem;
  }

  .EmailSignup-Button {
    border-color: var(--white);
    color: var(--white);
    appearance: none;
  }

  .EmailSignup-input,
  .EmailSignup-Button {
    width: 100%;
  }

  @media (min-width: 740px) {
    .EmailSignup-input,
    .EmailSignup-Button {
      width: auto;
    }

    .EmailSignup-form {
      display: grid;
      grid-template-columns: minmax(auto, 400px) auto;
      column-gap: 1rem;
    }
  }

  .Legal {
    display: grid;
    column-gap: 2rem;
    row-gap: 1rem;
    padding-top: 2rem;
  }

  @media (min-width: 1024px) {
    .Legal {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      column-gap: 2rem;
    }
  }

  .Nav {
    display: grid;
    align-content: start;
    grid-template-columns: max-content max-content;
    column-gap: 2rem;
    row-gap: 1rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    .FooterRow {
      display: grid;
      grid-template-columns: min-content auto;
      column-gap: 4rem;
    }
  }
</style>

<script>
  let segment;
  import Logos from "./Logos.svelte";
  import ProfileLink from "./ProfileLink.svelte";
</script>

<footer class="SiteFooter bg-orange">
  <div class="SiteFooter-container">
    <a href="." class="Emblem-alt">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.8 449.876">
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
    <div class="Social">
      <a href="https://www.facebook.com/dailyjoy.health" title="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.605 22.605">
          <defs>
            <style>
              .a {
                fill: #fecb8b;
              }
            </style>
          </defs>
          <path
            class="a"
            d="M517.421,3680.242a11.3,11.3,0,1,0,11.3,11.3A11.3,11.3,0,0,0,517.421,3680.242Zm3.155,6.875h-1.248c-.979,0-1.168.465-1.168,1.148v1.5h2.334l-.3,2.357h-2.03v6.048h-2.434v-6.048h-2.035v-2.357h2.035v-1.738a2.839,2.839,0,0,1,3.031-3.115,16.594,16.594,0,0,1,1.819.093Z"
            transform="translate(-506.118 -3680.242)"
          ></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/dailyjoy.health" title="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.605 22.605">
          <defs>
            <style>
              .a {
                fill: #fecb8b;
              }
            </style>
          </defs>
          <g transform="translate(-543.964 -3680.242)">
            <path
              class="a"
              d="M557.43,3691.545a2.163,2.163,0,1,1-2.164-2.164A2.163,2.163,0,0,1,557.43,3691.545Z"
            ></path>
            <path
              class="a"
              d="M560.326,3687.717a2.149,2.149,0,0,0-1.232-1.231,3.585,3.585,0,0,0-1.205-.224c-.685-.031-.89-.038-2.623-.038s-1.938.007-2.622.038a3.578,3.578,0,0,0-1.2.224,2.142,2.142,0,0,0-1.232,1.231,3.6,3.6,0,0,0-.224,1.205c-.031.685-.037.89-.037,2.623s.006,1.938.037,2.623a3.6,3.6,0,0,0,.224,1.205,2.146,2.146,0,0,0,1.231,1.231,3.588,3.588,0,0,0,1.206.224c.684.031.889.038,2.622.038s1.939-.007,2.623-.038a3.586,3.586,0,0,0,1.205-.224,2.15,2.15,0,0,0,1.232-1.231,3.626,3.626,0,0,0,.223-1.205c.031-.685.038-.89.038-2.623s-.007-1.938-.038-2.623A3.6,3.6,0,0,0,560.326,3687.717Zm-5.06,7.16a3.333,3.333,0,1,1,3.333-3.332A3.333,3.333,0,0,1,555.266,3694.877Zm3.465-6.018a.778.778,0,1,1,.778-.779A.779.779,0,0,1,558.731,3688.859Z"
            ></path>
            <path
              class="a"
              d="M555.266,3680.242a11.3,11.3,0,1,0,11.3,11.3A11.3,11.3,0,0,0,555.266,3680.242Zm6.451,13.979a4.766,4.766,0,0,1-.3,1.575,3.321,3.321,0,0,1-1.9,1.9,4.78,4.78,0,0,1-1.575.3c-.692.031-.913.039-2.676.039s-1.983-.008-2.675-.039a4.792,4.792,0,0,1-1.576-.3,3.325,3.325,0,0,1-1.9-1.9,4.764,4.764,0,0,1-.3-1.575c-.032-.693-.04-.914-.04-2.676s.008-1.984.039-2.676a4.758,4.758,0,0,1,.3-1.575,3.319,3.319,0,0,1,1.9-1.9,4.742,4.742,0,0,1,1.576-.3c.692-.032.913-.039,2.675-.039s1.984.007,2.676.039a4.758,4.758,0,0,1,1.575.3,3.322,3.322,0,0,1,1.9,1.9,4.762,4.762,0,0,1,.3,1.575c.032.692.039.913.039,2.676S561.749,3693.528,561.717,3694.221Z"
            ></path>
          </g>
        </svg>
      </a>
      <!-- <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.605 22.605"><defs><style>.a{fill:#fecb8b;}</style></defs><path class="a" d="M593.871,3680.242a11.3,11.3,0,1,0,11.3,11.3A11.3,11.3,0,0,0,593.871,3680.242Zm5.5,9.622c0,.111.007.223.007.336a7.386,7.386,0,0,1-11.37,6.222,5.293,5.293,0,0,0,.619.037,5.216,5.216,0,0,0,3.226-1.112,2.6,2.6,0,0,1-2.426-1.8,2.592,2.592,0,0,0,1.173-.044,2.6,2.6,0,0,1-2.084-2.547v-.033a2.578,2.578,0,0,0,1.177.325,2.6,2.6,0,0,1-.8-3.467,7.374,7.374,0,0,0,5.353,2.713,2.6,2.6,0,0,1,4.426-2.368,5.213,5.213,0,0,0,1.649-.631,2.6,2.6,0,0,1-1.142,1.437,5.191,5.191,0,0,0,1.492-.409A5.278,5.278,0,0,1,599.366,3689.864Z" transform="translate(-582.569 -3680.242)"/></svg>
        </a> -->
    </div>

    <div class="FooterRow">
      <nav class="Nav">
        <a
          class="font-alt caps"
          aria-current="{segment === undefined ? 'page' : undefined}"
          href="."
        >
          Home
        </a>
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

        <!-- <a href="#noop" class="snipcart-user-profile font-alt caps">
          User profile
        </a> -->
        <a href="#cart" class="snipcart-checkout font-alt caps">My cart</a>

        <ProfileLink />

        <a href="#noop" class="snipcart-user-logout font-alt caps">Logout</a>
        <!-- <a href="#noop" class="snipcart-user-logout font-alt caps">Logout</a> -->

        <!-- <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a> -->
      </nav>

      <div id="mc_embed_signup" class="EmailSignup">
        <div>
          <h3 class="font-alt caps color-white mb2">Join our mailing list</h3>
          <form
            action="https://gmail.us20.list-manage.com/subscribe/post?u=feefd94d57044141f703a9216&amp;id=9fd6cab219"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >

            <div id="mc_embed_signup_scroll" class="EmailSignup-form">

              <input
                aria-label="Enter your email for monthly updates from our
                Founders."
                type="email"
                value=""
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Enter your email"
                class="EmailSignup-input"
                required
              />

              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_feefd94d57044141f703a9216_9fd6cab219"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="EmailSignup-Button Button"
                />
              </div>
            </div>
          </form>
          <p>Sign up for monthly updates from our Founders.</p>
        </div>

      </div>

    </div>
    <div class="Legal">
      <strong class="font-alt body-3">
        © 2020 DAILY JOY, SPC ALL RIGHTS RESERVED
      </strong>
      <a class="font-alt body-3 caps" href="privacy-policy">Privacy policy</a>
      <a class="font-alt body-3 caps" href="terms-conditions">
        Terms & Conditions
      </a>
    </div>
  </div>

  <Logos />
</footer>
