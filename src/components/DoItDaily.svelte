<style>
  section {
    padding: 6rem 1rem;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ol li {
    flex-basis: 50%;
  }

  .graphic {
    height: 100px;
    width: 100px;
    position: relative;
  }

  .step {
    display: flex;
    padding-top: 1rem;
    padding-right: 1rem;
  }

  .step .h1 {
    margin-right: 1rem;
    line-height: 1.2;
  }

  @media (min-width: 500px) {
    ol {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }

    .graphic {
      height: 150px;
      width: 150px;
    }

    .step {
      padding-top: 2rem;
      padding-right: 3rem;
    }
  }

  @media (min-width: 1024) {
    .graphic {
      height: 200px;
      width: 200px;
    }
  }
</style>

<script>
  import Step1 from "./graphics/step1.svelte";
  import Step2 from "./graphics/step2.svelte";
  import Step3 from "./graphics/step3.svelte";
</script>

<section class="bg-sand">
  <div class="max-width-section mx-auto relative">
    <p class="font-alt caps m0">As easy as 1-2-3</p>
    <p class="h1 caps mt0 mb3">Do it daily</p>
    <ol>
      <li>
        <div class="graphic">
          <Step1 />
        </div>
        <div class="step">
          <strong class="h1">1</strong>
          <span>
            Add powder to
            <br />
            an empty glass
          </span>
        </div>
      </li>
      <li>
        <div class="graphic">
          <Step2 />
        </div>
        <div class="step">
          <strong class="h1">2</strong>
          <span>
            Pour in 8 oz. of your favorite
            <br />
            room temperature drink
          </span>
        </div>
      </li>
      <li>
        <div class="graphic">
          <Step3 />
        </div>
        <div class="step">
          <strong class="h1">3</strong>
          <span>
            Mix well
            <br />
            and enjoy daily
          </span>
        </div>
      </li>
    </ol>
  </div>
</section>
