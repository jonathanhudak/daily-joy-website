<style>
  main {
    width: 100vw;
    overflow: hidden;
  }
</style>

<script>
  export let segment;
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  
</script>

<svelte:head>

  <link
    rel="stylesheet"
    href="//unpkg.com/@beyonk/gdpr-cookie-consent-banner/dist/style.css"
  />

  <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous">

  </script>
  <script
    src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
    data-api-key="Y2I4MWYyZjItYzI3Mi00YzQ3LTg4YzEtZWRkOGQwYTI3MTRjNjM3MzYyMzE4ODM4MDc2OTY1"
    id="snipcart">

  </script>

  {#if process.env.NODE_ENV !== 'development'}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139987009-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-139987009-1');
    </script>
  {/if}

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

<Nav segment="{segment}" />

<main>
  <slot />
</main>

<GdprBanner
  cookieName="daily-joy-cookies"
  categories="{{}}"
  showEditIcon="{false}"
/>
<Footer segment="{segment}" />
