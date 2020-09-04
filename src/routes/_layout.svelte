<style>
  main {
    width: 100vw;
    overflow: hidden;
  }
</style>

<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
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
  <link
    href="http://localhost:3006/themes/base/snipcart.css"
    rel="stylesheet"
    type="text/css"
  />

  {#if process.env.NODE_ENV === 'development'}
    <link
      href="http://localhost:3006/themes/base/snipcart.css"
      rel="stylesheet"
      type="text/css"
    />
  {:else}
    <link
      href="https://daily-joy-health.s3-us-west-2.amazonaws.com/snipcart-theme/snipcart.min.css"
      rel="stylesheet"
      type="text/css"
    />
  {/if}

</svelte:head>

<Nav segment="segment" />

<main>
  <slot />
</main>

<Footer segment="segment" />
