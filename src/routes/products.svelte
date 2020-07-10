<script>
  import Hero from "../components/TurmericExtract/Hero.svelte";
  import Buy from "../components/TurmericExtract/Buy.svelte";
  import Highlights from "../components/TurmericExtract/Highlights.svelte";
  import Benefits from "../components/TurmericExtract/Benefits.svelte";
  import WhatOthersSay from "../components/WhatOthersSay.svelte";
  import DoItDaily from "../components/DoItDaily.svelte";
</script>

<svelte:head>
  <title>Products</title>

  <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous">

  </script>
  <script
    src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
    data-api-key="NTcyNGUzNmEtODgzNC00YjExLTgzZWQtM2E1Y2M4NWM2NDYwNjM3Mjk5NTEzNjAzMTMyMjA0"
    id="snipcart">

  </script>
  <link
    href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
    rel="stylesheet"
    type="text/css" />
</svelte:head>

<Hero />
<Buy />
<Highlights />
<Benefits />
<WhatOthersSay />
<DoItDaily />
