<style>
  @media (min-width: 600px) {
    .behind-scenes {
      display: grid;
      justify-content: space-between;
      max-content: 900px;
      grid-template-columns: min-content minmax(min-content, 400px);
      grid-gap: 2rem;
    }

    .hero {
      display: grid;
      justify-content: space-between;
      grid-template-columns: minmax(min-content, 400px) min-content;
      grid-gap: 2rem;
    }
  }
</style>

<script>
  import ColorBlobs from "../components/ColorBlobs.svelte";
</script>

<svelte:head>
  <title>Our story</title>

</svelte:head>

<section class="max-width-section mx-auto px2 py4">
  <div class="hero">
    <div>
      <h1 class="font-alt sm-caps caps">Our story</h1>
      <strong class="h1">Meet Our Founders</strong>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Read more
      </p>
    </div>
    <div>
      <img
        src="images/placeholder-founders@2x.jpg"
        alt="founders in the manufacturing facility"
      />
    </div>
  </div>
</section>
<ColorBlobs>
  <div class="behind-scenes max-width-section mx-auto">
    <div>
      <img
        src="images/our-story-lab@2x.jpg"
        alt="founders in the manufacturing facility"
      />
    </div>
    <div>
      <h2 class="font-alt sm-caps caps">Behind The Scenes</h2>
      <strong class="h1 caps">It takes guts</strong>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Read more
      </p>
    </div>
  </div>
</ColorBlobs>
