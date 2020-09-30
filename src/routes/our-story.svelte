<style>
  @media (min-width: 600px) {
    .behind-scenes {
      display: grid;
      justify-content: space-between;
      max-content: 900px;
      grid-template-columns: min-content minmax(min-content, 400px);
      grid-gap: 2rem;
    }

    .hero-content {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
    }
  }

  .lead {
    font-size: 1.25rem;
  }
</style>

<script>
  import ColorBlobs from "../components/ColorBlobs.svelte";
</script>

<svelte:head>
  <title>Our story</title>

</svelte:head>

<section class="max-width-section mx-auto px2 py4">
  <div>
    <div>
      <h1 class="font-alt sm-caps caps">Our story</h1>
      <strong class="h1">Meet Our Founders</strong>
      <div class="hero-content">
        <div>
          <p class="lead mt0">
            Hi! We are Mike and Jenny, two long time friends with shared love
            for health and wellness.
          </p>
          <p>
            We founded Daily Joy with the goal of bringing the most effective
            anti-inflammatory solutions to everyone. Our mission is to harness
            Ayurvedic wisdom for modern life with pure and simple formulas that
            optimize the body's response to challenges and support your body's
            natural resilience. Our formulas are inspired by the wisdom of our
            ancestors and our ingredients are supported by scientific data.
          </p>

          <p class="lead">
            The three pillars at the base of our wellness brand are:
          </p>
          <ul>
            <li>Integrity</li>
            <li>Transparency</li>
            <li>Sustainability</li>
          </ul>
          <p>
            We create delicious and nutritious formulas that we can trust and
            enjoy ourselves, daily.
          </p>
        </div>
        <div>
          <p class="mt0">
            Having spent most of our 20s dealing with high stress jobs and
            not-so-balanced personal lives, we had similar "aha' moments in our
            early 30s that made us realize we needed to change our habits and
            take control of our physical and mental health (better late than
            never, right?!)
          </p>
          <p>
            Mike, a former athlete, was dealing with long term health problems
            that were not getting better. The treatments he was offered by his
            doctors seemed to have a bandaid approach and did not address the
            core issue, which stemmed from inflammation.
          </p>

          <p>
            Jenny, who became a new mom, was struggling to bounce back post
            childbirth and had a nagging feeling that "things were just not
            working or feeling right". As a busy mom, with little to no time to
            spare, she was hoping to find the one product that would address her
            chronic inflammation, help deal with post pregnancy challenges and
            help her feel balanced again.
          </p>
          <p>
            Neither of us could find that magical unicorn product. We decided to
            make it ourselves.
          </p>

        </div>

      </div>
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
      <p>We care about quality every step of the way!</p>
    </div>
  </div>
</ColorBlobs>
