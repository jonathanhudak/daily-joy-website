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
  <link
    rel="stylesheet"
    href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
  <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js">

  </script>
</svelte:head>

<div
  id="snipcart"
  data-api-key="NTcyNGUzNmEtODgzNC00YjExLTgzZWQtM2E1Y2M4NWM2NDYwNjM3Mjk5NTEzNjAzMTMyMjA0"
  hidden />

<Hero />
<Buy />
<Highlights />
<Benefits />
<WhatOthersSay />
<DoItDaily />
