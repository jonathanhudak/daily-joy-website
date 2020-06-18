<script>
  import MixYourMagic from "../components/MixYourMagic.svelte";
  import StayBalanced from "../components/StayBalanced.svelte";
  import NewRitual from "../components/NewRitual.svelte";
</script>

<style>
  .Hero-Copy {
    font-size: 24px;
  }

  .Hero {
    position: relative;
    padding-top: 1rem;
    width: 100%;
    overflow: visible;
    margin: auto;
  }
  @media (min-width: 1000px) {
    .Hero {
      max-height: 900px;
    }
  }

  .Hero-A {
    margin-top: 10vh;
    padding-bottom: 10vh;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-image: url("images/MainHeader_Hero.png");
    background-size: contain;
    margin-bottom: 5rem;
  }

  @media (min-width: 740px) {
    .Hero-A {
      margin-bottom: 0rem;
      margin-top: 80px;
      background-size: 500px auto;
      background-position: top right;
    }
  }

  @media (min-width: 1024px) {
    .Hero-A {
      margin-bottom: 10vh;
      background-size: 650px auto;
      background-position: top right;
    }
  }

  @media (min-width: 1280px) {
    .Hero-A {
      background-size: 900px auto;
    }
  }

  .Hero-A .Hero-Content {
    max-width: var(--max-content-width);
    margin: auto;
  }

  .Hero-A .Hero-Copy {
    max-width: 80%;
    padding-bottom: 10rem;
  }

  @media (min-width: 500px) {
    .Hero-A .Hero-Copy {
      padding-bottom: 10rem;
    }
  }

  @media (min-width: 740px) {
    .Hero-A .Hero-Copy {
      max-width: 45%;
    }
  }

  .sparkles {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    transform: translateY(-60%);
    pointer-events: none;
  }

  @media (min-width: 740px) {
    .sparkles {
      transform: translateY(-10%);
    }
  }

  @media (min-width: 1024px) {
    .sparkles {
      width: 600px;
      transform: translateY(20%);
    }
  }
</style>

<svelte:head>
  <title>Daily Joy</title>
</svelte:head>

<div class="Hero Hero-A">
  <div class="Hero-Content">
    <div class="Hero-Copy">
      <p class="caps font-alt m0 mb3 line-height-4">
        Ancient wisdom
        <br />
        meets modern science
      </p>
      <p class="caps h1 m0">Less inflammation.</p>
      <p class="caps h1 m0">More Joy.</p>

      <p class="line-height-4 lead">
        A daily turmeric supplement to support your body’s natural resilience.
        By keeping inflammation in check, you’ll get glowing skin, more energy,
        and a clear mind.
      </p>
      <a href="products" class="Button">Try it</a>
    </div>
    <svg
      class="sparkles"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 144.34 99.147">
      <defs>
        <clipPath id="a">
          <rect
            class="a"
            width="144.34"
            height="99.147"
            transform="translate(479.691 1564.355)" />
        </clipPath>
      </defs>
      <g transform="translate(-479.691 -1564.355)">
        <g class="b">
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M535.085,1598.162c-1.2-.974-3.161-3.308-1.956-4.348s2.97-1.284,3.781-.738,5.538,4.655,5.008,6.066-1.541,2.415-2.934,1.982S535.085,1598.162,535.085,1598.162Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M549.563,1604.8c.912.908,3.3,3.482,4.445,2.151s1.522-2.511.252-4.377-3.968-4.86-5.131-4.633-3.1.624-2.922,2.039S548.455,1603.693,549.563,1604.8Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M545.883,1618.9c1.184.155,2.094-2.12,1.962-2.8a8.114,8.114,0,0,0-1.36-3.357c-.752-.759-2.987-4.474-4.452-3.219a3.761,3.761,0,0,0-1.4,4.06C541.052,1614.809,544.032,1618.655,545.883,1618.9Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M530.167,1607.749c1.529.546,4.209,1.924,5.217.551s-.022-2.349-.881-3.022-6.056-3.468-6.868-2.749-1.42,1.622-.38,2.932A6.529,6.529,0,0,0,530.167,1607.749Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M559.854,1598.413c-.237,1.562.168,3.464.765,3.919s3.214-.145,3.814-2.283,1.749-4.715,1.534-5.817-.827-2.933-1.988-2.367S560.8,1592.189,559.854,1598.413Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M554.28,1615.776c.3,1.107,1.425,1.445,3.165.911s7.414-2.405,7.057-4.56-2.221-1.283-3.14-1.1S553.354,1612.333,554.28,1615.776Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M536.456,1620.209c.869-.609,1.878-.475,2.2.184s2.562,2.7,2.441,5.013.35,4.255-1.482,4.549-3.735-3.594-3.855-4.206S533.939,1621.972,536.456,1620.209Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M521.038,1621.339c.284-.9,1.247-.779,2.226-.971a20.578,20.578,0,0,1,6.29-.02c1.613.448,2.891,1.13,2.411,2.581-.181.546-1.146,1.622-3.655,1.794a16.857,16.857,0,0,1-5.649-.931l-.6-.137S520.41,1623.333,521.038,1621.339Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M526.747,1634.628a2.293,2.293,0,0,1,2.94-.574c1.477.729,6.505,4.133,5.991,6.649s-3.153,1.379-4.031.787S524.312,1637.455,526.747,1634.628Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M543.264,1641.243c-1.06-.113-2.364-.657-2.651-1.719s.887-2.409,2.426-2.709a23.018,23.018,0,0,1,6.319-.116c.982.287,3.406,1.252,2.292,2.907s-2.683,1.8-4.406,1.978A14.848,14.848,0,0,1,543.264,1641.243Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M547.636,1630.349a2,2,0,0,1,.033-2.305,34.965,34.965,0,0,1,3.8-3.872c.841-.7,2.062-1.967,3.5-1.612s1.55,2.729,1.279,3.32-2.6,2.413-3.5,3.1S549.116,1631.918,547.636,1630.349Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M560.352,1617.765a2.567,2.567,0,0,0,.549,2.815,20.056,20.056,0,0,0,3.474,2.828c.665.41,3,1.571,3.626-.079s-.989-3.223-1.721-3.979S561.73,1615.383,560.352,1617.765Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M572.219,1599.541a2.394,2.394,0,0,1,2.918,1.618c.619,1.654,2.4,5.323,2.081,6.719s-.766,2.442-2.093,2.31-2.618-1.594-3.157-3.145-1.778-4.563-1.42-5.757A2.215,2.215,0,0,1,572.219,1599.541Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M583.734,1609.741a1.61,1.61,0,0,1,2.494,1.011c.347,1.191,2,6.438,2.076,7.4s.522,2.968-1.149,4.114-2.855-1.093-3.376-3.173S581.961,1610.662,583.734,1609.741Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M573.606,1622.876a2,2,0,0,1,2.327-1.907c1.37.25,2.961,2.81,3.578,3.322s3.029,3.2,2,4.663-2.349.891-3.9,0S573.425,1624.593,573.606,1622.876Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M563.2,1629.3c1.024-.622,1.992.2,2.489,2.747s2.291,6.444,1.08,7.887-2.767.827-3.48-.469-1.734-6.236-1.45-7.426S561.713,1630.2,563.2,1629.3Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M598.772,1622.351c.878-.509,2.52.846,2.914,1.688s1.962,3.579,2.155,4.863-.255,3.093-1.209,3.509-2.038.742-3.475-1.619-2.422-4.753-1.918-6S597.173,1623.278,598.772,1622.351Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M507.837,1638.471c1.2.974,3.161,3.307,1.956,4.348s-2.97,1.284-3.781.738-5.538-4.655-5.008-6.067,1.541-2.414,2.934-1.981S507.837,1638.471,507.837,1638.471Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M493.359,1631.838c-.912-.908-3.3-3.482-4.445-2.151s-1.522,2.511-.252,4.376,3.968,4.861,5.131,4.634,3.1-.624,2.923-2.039S494.467,1632.94,493.359,1631.838Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M497.039,1617.736c-1.184-.155-2.094,2.119-1.962,2.8a8.119,8.119,0,0,0,1.36,3.357c.752.759,2.987,4.474,4.452,3.219a3.761,3.761,0,0,0,1.4-4.06C501.87,1621.824,498.89,1617.978,497.039,1617.736Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M512.755,1628.883c-1.529-.546-4.209-1.923-5.217-.55s.022,2.349.881,3.021,6.056,3.468,6.868,2.75,1.42-1.622.38-2.932A6.524,6.524,0,0,0,512.755,1628.883Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M483.068,1638.219c.237-1.561-.168-3.463-.765-3.919s-3.214.146-3.814,2.284-1.749,4.714-1.534,5.817.827,2.933,1.988,2.367S482.122,1644.443,483.068,1638.219Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M488.642,1620.857c-.3-1.107-1.425-1.445-3.165-.911s-7.414,2.4-7.057,4.56,2.221,1.282,3.14,1.1S489.568,1624.3,488.642,1620.857Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M506.466,1616.424c-.869.608-1.878.474-2.2-.185s-2.562-2.7-2.441-5.012-.35-4.255,1.482-4.549,3.735,3.594,3.855,4.206S508.983,1614.661,506.466,1616.424Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M521.884,1615.294c-.284.9-1.247.779-2.226.97a20.547,20.547,0,0,1-6.29.02c-1.613-.448-2.89-1.13-2.411-2.58.181-.547,1.146-1.623,3.655-1.795a16.851,16.851,0,0,1,5.649.932l.6.137S522.512,1613.3,521.884,1615.294Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M516.175,1602.005a2.293,2.293,0,0,1-2.94.574c-1.477-.729-6.5-4.134-5.991-6.65s3.153-1.378,4.031-.787S518.611,1599.177,516.175,1602.005Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M499.658,1595.39c1.06.112,2.364.656,2.651,1.718s-.887,2.41-2.426,2.71a23.052,23.052,0,0,1-6.319.116c-.982-.288-3.406-1.252-2.292-2.907s2.683-1.8,4.406-1.978A14.845,14.845,0,0,1,499.658,1595.39Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M495.286,1606.284a2,2,0,0,1-.033,2.3,34.861,34.861,0,0,1-3.8,3.871c-.841.7-2.062,1.968-3.5,1.613s-1.55-2.73-1.279-3.321a21.456,21.456,0,0,1,3.5-3.1C491.066,1606.961,493.806,1604.714,495.286,1606.284Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M482.57,1618.868a2.565,2.565,0,0,0-.549-2.815,20.017,20.017,0,0,0-3.474-2.828c-.665-.41-3-1.572-3.626.078s.989,3.224,1.721,3.98S481.192,1621.25,482.57,1618.868Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M470.7,1637.092a2.4,2.4,0,0,1-2.918-1.619c-.619-1.653-2.4-5.323-2.081-6.719s.766-2.441,2.093-2.31,2.618,1.595,3.157,3.146,1.778,4.563,1.42,5.756A2.215,2.215,0,0,1,470.7,1637.092Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M459.188,1626.892a1.61,1.61,0,0,1-2.494-1.011c-.347-1.191-2-6.438-2.076-7.4s-.522-2.968,1.149-4.114,2.855,1.092,3.376,3.173S460.961,1625.971,459.188,1626.892Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M469.316,1613.757a2,2,0,0,1-2.327,1.907c-1.37-.25-2.961-2.811-3.577-3.322s-3.03-3.2-2-4.664,2.349-.89,3.9,0S469.5,1612.04,469.316,1613.757Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M479.72,1607.338c-1.023.622-1.992-.2-2.489-2.748s-2.291-6.444-1.08-7.886,2.767-.827,3.48.469,1.734,6.236,1.45,7.426S481.209,1606.432,479.72,1607.338Z" />
          <path
            class="sparkle rellax"
            data-rellax-speed="-1"
            d="M444.15,1614.282c-.878.508-2.52-.846-2.914-1.688s-1.962-3.58-2.155-4.863.255-3.093,1.209-3.509,2.038-.743,3.476,1.618,2.421,4.754,1.917,6S445.749,1613.355,444.15,1614.282Z" />
        </g>
      </g>
    </svg>
  </div>
</div>
<div class="bg-beige py3">
  <MixYourMagic />
  <StayBalanced />
  <NewRitual />
</div>
