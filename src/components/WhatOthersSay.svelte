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
      <p class="caps font-alt">Erik M. 32</p>
      <p class="body-2">
        Daily Joy gives you the feeling of feeling bright, and energetic inside.
        Starting the day with a warm glass of ginger and turmeric is now an
        essential of my self-care routine.
      </p>
    </div>
    <div class="person">
      <div class="portrait">
        <img src="images/testimonials/lily@2x.png" alt="jeremy" />
      </div>
      <p class="caps font-alt">Lilly H. 31</p>
      <p class="body-2">
        Who knew such a small sachet can be packed with so much power? I’m
        definitely a Daily Joy fan for life!
      </p>
    </div>
    <div class="person">
      <div class="portrait">
        <img src="images/testimonials/sean@2x.png" alt="Sean M" />
      </div>
      <p class="caps font-alt">Sean M. 33</p>
      <p class="body-2">
        Looking for a supplement that tastes good, treats your body well, and
        eases your mind on whether you’ve received your extra dose of vitamins?
        Easily mixed with most of our daily liquid consumables and if you’re
        suffering from inflammation you’re on track for quick relief. Take it
        anywhere! Highly recommended.
      </p>
    </div>
  </div>
</section>
