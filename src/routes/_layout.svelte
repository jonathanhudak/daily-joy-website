<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<svelte:head>

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
  <!-- <link
    href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
    rel="stylesheet"
    type="text/css" /> -->
  <link
    href="http://localhost:3006/themes/base/snipcart.css"
    rel="stylesheet"
    type="text/css" />

</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
