<style>
  .ProductHero {
    padding: 2rem 0;
  }

  .ProductHero .h1 {
    line-height: 1.2;
  }

  @media (min-width: 700px) {
    .ProductHero {
      display: flex;
      padding: 6rem 0 0;
    }
    .ProductHero-image {
      order: 2;
      padding-left: 2rem;
    }

    .ProductHero-copy {
      order: 1;
    }
  }

  .ProductHero-copy {
    flex: 1;
    padding: 1rem;
  }

  .lead {
    max-width: 43ch;
  }

  .ProductHero-image {
    z-index: 2;
    max-width: 500px;
    margin: auto;
  }

  .ProductHero-image img {
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }

  @media (min-width: 1024px) {
    .ProductHero-copy {
      padding: 0 1rem 0 0;
    }
  }
</style>

<section class="max-width-section mx-auto ProductHero">
  <div class="ProductHero-image relative">
    <img
      src="images/product-hero@2x.jpg"
      alt="Box of Daily Joy Turmeric Extract on a glossy surface"
    />
  </div>
  <div class="ProductHero-copy">
    <h2 class="caps font-alt m0 mb3 sm-caps">Turmeric Extract</h2>
    <p class="caps h1 m0">
      <span class="nowrap">Daily Turmeric.</span>
      <br />
      <span class="nowrap">Daily Balance.</span>
      <br />
      <span class="nowrap">Daily Joy.</span>
    </p>
    <p class="line-height-4 lead">
      Support all body systems with our award winning
      <strong class="nowrap">tetra-hydro-curcumin.</strong>
      It’s 3x more powerful than the standard supplement and is sourced from the
      most extensively studied and clinically documented curcumin.
    </p>
  </div>
</section>
