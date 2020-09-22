<style>
  .ToggleList {
    border-top: 1px solid var(--grey);
  }

  .ToggleList-row {
    border-bottom: 1px solid var(--grey);
    padding-top: 0.5rem;
  }

  .container {
    max-width: 520px;
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
    natural resilience. We sustainably source 100% natural ingredients and
    formulate them for bio-effective, bio-available support.
  </p>

  <div class="ToggleList">
    <div class="ToggleList-row">
      <ToggleSection title="Curcumin">
        <div class="py2">
          <p>
            Found in turmeric, curcumin balances inflammation with powerful
            antioxidant and anti-microbial properties. Curcumin offers natural
            prevention and support for chronic and age-related challenges
            including cognition and mood, organs and tissues, movement and
            recovery, and metabolism and energy. Our 100% natural
            tetrahydrocurcumin is colorless, water-soluble, and concentrated for
            3x more bioavailable support.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Amla Berry">
        <div class="py2">
          <p>
            The Indian Gooseberry, or Amla Berry plant, delivers adaptogens that
            support natural resilience, helping the body rejuvenate in the face
            of stress, trauma, anxiety, and fatigue. Used for more than 5,000
            years and renowned as the highest antioxidant food in the world,
            Amla Berry aids digestion, helps regulate blood sugar levels, and
            supports healthy liver function.
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
            inflammation, swelling, and pain in the body. This 100% natural
            extract is so powerful, it is considered comparable to chemical
            anti-inflammatory pain relievers.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Pterostilbene">
        <div class="py2">
          <p>
            This natural phytonutrient (from Pterocarpus Marsupium) may be
            better absorbed by the body than resveratrol. Pterostilbene supports
            cardiovascular health, helps regulate blood sugar levels, protects
            liver cells from oxidative stress, and supports healthy cognitive
            function.
          </p>
        </div>
      </ToggleSection>
    </div>
    <div class="ToggleList-row">
      <ToggleSection title="Lactospore Probiotic">
        <div class="py2">
          <p>
            This natural probiotic enzyme improves gut microflora and aids
            digestion. Producing good lactic acid, Lactospore slows yeast and
            parasite growth in the digestive tract, and prevents the growth of
            harmful microorganisms that contribute to diarrhea, constipation, or
            dyspepsia.
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
