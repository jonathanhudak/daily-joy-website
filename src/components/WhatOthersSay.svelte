<style>
  section {
    background-color: var(--brown);
    position: relative;
    color: var(--white);
    padding: 5rem 0;
    overflow: hidden;
  }

  .portrait {
    display: block;
    margin: auto;
  }

  .row {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: var(--max-content-width);
  }

  @media (min-width: 740px) {
    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      grid-gap: 2em;
    }
  }

  .person {
    padding: 0 1rem 2rem;
    max-width: 50%;
  }

  @media (min-width: 740px) {
    .person {
      max-width: none;
    }
  }

  .portrait {
    height: 150px;
    padding-bottom: 1em;
  }
  @media (min-width: 1024px) {
    .portrait {
      height: 250px;
    }
  }

  .portrait img {
    vertical-align: middle;
    max-height: 100%;
  }
</style>

<section>
  <p class="caps font-alt pb3 center">What others have to say</p>
  <div class="row">
    <div class="person">
      <div class="portrait">
        <img src="images/testimonials/erik@2x.png" alt="gwyneth" />
      </div>
      <p class="caps font-alt">Erik Molano</p>
      <p class="body-2">
        Daily Joy gives you the feeling of feeling bright, and energetic inside.
        Starting the day with a warm glass of ginger and turmeric is now an
        essential of my self care routine.
      </p>
    </div>
    <div class="person">
      <div class="portrait">
        <img src="images/testimonials/lily@2x.png" alt="jeremy" />
      </div>
      <p class="caps font-alt">Lily</p>
      <p class="body-2">
        Who knew such a small sachet can be packed with so much power. I’m
        definitely a Daily Joy fan for life!
      </p>
    </div>
    <div class="person">
      <div class="portrait">
        <img src="images/courtney.png" alt="courtney" />
      </div>
      <p class="caps font-alt">Courtney Rossi</p>
      <p class="body-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  </div>
</section>
