<style>
  .ToggleList {
    border-top: 1px solid var(--grey);
  }

  .ToggleList-row {
    border-bottom: 1px solid var(--grey);
    padding-top: 0.5rem;
  }

  .container {
    max-width: 720px;
    padding: 8rem 0 4rem;
  }
</style>

<script>
  import ToggleSection from "../ToggleSection.svelte";
</script>

<div class="container">
  <h3 class="h1 caps">Ingredients</h3>
  <p>
    Phytonutrients have been optimizing human health for centuries.
    Bio-protective, plant-based nutrients balance inflammation to support
    natural resilience without the side effects that pharmaceuticals often have.
    We sustainably source 100% natural ingredients and formulate them for
    powerful bio-effective, bio-available support in the form of a
    nutraceutical.
  </p>

  <div class="ToggleList">
    <div class="ToggleList-row">
      <ToggleSection title="Curcumin (tetrahydrocurcumin)">
        <div class="py2">
          <p>
            Turmeric’s most pharmacologically bio-active metabolite is
            <strong>tetrahydrocurcumin</strong>
            and does not require additives to enhance bioavailability. This
            pre-converted form of curcumin is easily absorbed by the body’s
            gastrointestinal tract and is 3X more powerful than standard
            curcumin extract allowing you to feel its powerful benefits in a
            smaller dose in a shorter amount of time.
          </p>
          <p>
            Our 100% natural turmeric extract offers natural prevention and
            support for chronic and age-related challenges including cognition
            and mood, organs and tissues, movement and recovery, and metabolism
            and energy. Balance your inflammation with powerful antioxidant and
            anti-microbial properties without staining your shirt!
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Probiotic: Bacillus Coagulans MTCC5856">
        <div class="py2">
          <p>
            This natural probiotic enzyme improves gut microflora and aids
            digestion so you can absorb the most out of our formula’s
            phytonutrients. Producing good lactic acid, Bacillus Coagulans
            MTCC5856 slows yeast and parasite growth in the digestive tract, and
            prevents the growth of harmful microorganisms that contribute to
            diarrhea, constipation, or dyspepsia. Bacillus Coagulans MTCC5856
            survives high and low temperatures and shows resistance to the human
            gut. Many other probiotics do not survive manufacturing,
            transportation, and storage; if they do, some do not survive the
            harsh human gastric environment.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Boswellia">
        <div class="py2">
          <p>
            Extracted from the barks and resins of Indian flowering trees, this
            phytonutrient turns off the immune system responses that increase
            inflammation, swelling, and pain in the body by inhibiting the
            enzyme responsible for inflammation. Boswellia has shown to be
            effective against a large number of inflammatory diseases such as
            arthritis, bronchial asthma, chronic colitis, ulcerative colitis,
            and Crohn’s disease. This 100% natural extract is so powerful, it is
            considered comparable to chemical anti-inflammatory pain relievers.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Amla Berry">
        <div class="py2">
          <p>
            The Indian gooseberry delivers adaptogens that support natural
            resilience, helping the body rejuvenate in the face of stress,
            trauma, anxiety, and fatigue. Used for more than 5,000 years, amla
            berries are known as one of the highest antioxidant foods with an
            ORAC value at 55X more than blueberries. Amla Berry aids digestion,
            helps regulate blood sugar levels, and supports healthy liver
            function.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Pterostilbene">
        <div class="py2">
          <p>
            Pterostilbene (from Pterocarpus Marsupium), another powerful
            antioxidant, supports cardiovascular health, can help regulate blood
            sugar levels, protects liver cells from oxidative stress and
            supports healthy cognitive function. This natural phytonutrient may
            be better absorbed by the body than resveratrol.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Ginger">
        <div class="py2">
          <p>
            Another ancient favorite that delivers anti-inflammatory and
            antioxidant properties, ginger is known to aid digestion, ease
            respiratory problems, and reduce symptoms of nausea.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Lemon">
        <div class="py2">
          <p>
            Lemons have antioxidant and anti-inflammatory effects and may also
            support heart health and digestive health.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Papaya">
        <div class="py2">
          <p>
            Loaded with antioxidants, papayas have 50 ingredients that support
            the immune system. Papayas also aid digestion, reduce inflammation,
            and have beauty benefits. Vitamin E and beta-carotene help protect
            against skin damage.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Mango">
        <div class="py2">
          <p>
            This delicious low glycemic prebiotic fruit contains an abundance of
            nutrients and are a great source of vitamin C and vitamin A to boost
            immunity and promote eye and skin health. Mangoes have also been
            used for centuries to aid digestion and support gut health.
          </p>
        </div>
      </ToggleSection>
    </div>

  </div>
</div>
