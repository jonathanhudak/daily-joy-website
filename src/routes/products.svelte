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
</svelte:head>

<Hero />
<Buy />
<Highlights />
<Benefits />
<WhatOthersSay />
<DoItDaily />
